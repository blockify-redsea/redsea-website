import { apiClient } from '@/lib/api/client'
import { API_ENDPOINTS } from '@/lib/api/config'
import { useAuthStore } from '@/stores'
import { UserRank, isPendingApproval } from '@/types/enums'
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse
} from '@/types/api'

export class AuthService {
  // Login user
  static async login(credentials: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await apiClient.post<LoginResponse>(
        API_ENDPOINTS.AUTH.LOGIN,
        credentials
      )

      // Check if user is pending approval
      if (
        response.data?.user?.rank !== undefined &&
        isPendingApproval(response.data.user.rank as UserRank)
      ) {
        throw { success: false, message: 'Your account is not approved yet.' }
      }

      // Only proceed if rank is not 0
      if (response.success && response.data?.access_token) {
        const { login } = useAuthStore.getState()
        login(response.data as any)

        // Set auth token for API client
        apiClient.setAuthToken(response.data.access_token)
      }

      return response
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  // Register user
  static async register(userData: RegisterRequest): Promise<RegisterResponse> {
    try {
      const response = await apiClient.post<RegisterResponse>(
        API_ENDPOINTS.AUTH.REGISTER,
        userData
      )

      return response
    } catch (error) {
      console.error('Register error:', error)
      throw error
    }
  }

  // Logout user
  static async logout(): Promise<void> {
    try {
      await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT)
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Clear auth store and API client
      const { logout } = useAuthStore.getState()
      logout()
      apiClient.removeAuthToken()
    }
  }

  // Check if user is authenticated
  static isAuthenticated(): boolean {
    const { isAuthenticated, isTokenExpired } = useAuthStore.getState()
    return isAuthenticated && !isTokenExpired()
  }

  // Get current user from Zustand store
  static getCurrentUser() {
    const { user } = useAuthStore.getState()
    return user
  }

  // Decode user info from JWT token
  static getUserFromToken(): any | null {
    try {
      const token = this.getAuthToken()
      if (!token) return null

      // Decode JWT payload (basic decode, not verifying signature)
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )

      return JSON.parse(jsonPayload)
    } catch (error) {
      console.error('Error decoding token:', error)
      return null
    }
  }

  // Get auth token
  static getAuthToken(): string | null {
    const { getAccessToken } = useAuthStore.getState()
    return getAccessToken()
  }

  // Initialize auth state (call on app startup)
  static initializeAuth(): void {
    const { getAccessToken, isTokenExpired, clearAuth, user, setLoading } =
      useAuthStore.getState()
    const access_token = getAccessToken()

    if (access_token) {
      // Check if token is expired
      if (isTokenExpired()) {
        // Token expired, clear auth state
        clearAuth()
        apiClient.removeAuthToken()
      } else {
        // Token is valid, set it in API client
        apiClient.setAuthToken(access_token)

        // If we have token but no user data (after page refresh),
        // try to restore user data from token
        if (!user) {
          const tokenUser = this.getUserFromToken()
          if (tokenUser) {
            // Reconstruct user object from token data
            const userData = {
              id: tokenUser.id,
              user_id: tokenUser.user_id,
              nickname: tokenUser.nickname,
              email: tokenUser.email,
              rank: tokenUser.rank,
              is_active: true, // Assume active if token is valid
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            }

            // Set user data and authenticated state
            const { setUser } = useAuthStore.getState()
            setUser(userData)
          } else {
            // Token exists but can't decode user, just set authenticated
            const { setAuthenticated } = useAuthStore.getState()
            setAuthenticated(true)
          }
        }
      }
    }
  }

  // Refresh token method
  static async refreshToken(): Promise<boolean> {
    try {
      const { getRefreshToken, updateTokens, clearAuth } =
        useAuthStore.getState()
      const refresh_token = getRefreshToken()

      if (!refresh_token) {
        clearAuth()
        return false
      }

      const response = await apiClient.post<{
        success: boolean
        data?: {
          access_token: string
          refresh_token: string
          token_type: string
          expires_in: number
        }
      }>(API_ENDPOINTS.AUTH.REFRESH, {
        refresh_token
      })

      if (response.success && response.data) {
        updateTokens(response.data)
        apiClient.setAuthToken(response.data.access_token)
        return true
      } else {
        clearAuth()
        apiClient.removeAuthToken()
        return false
      }
    } catch (error) {
      console.error('Token refresh error:', error)
      const { clearAuth } = useAuthStore.getState()
      clearAuth()
      apiClient.removeAuthToken()
      return false
    }
  }
}

// Export default instance
export const authService = AuthService
