import { apiClient } from '@/lib/api/client'
import { API_ENDPOINTS } from '@/lib/api/config'
import { useAuthStore } from '@/stores'
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

      // Check if user rank is 0 (not approved)
      if (response.data?.user?.rank === 0) {
        throw { success: false, message: 'Your account is not approved yet.' }
      }

      // Only proceed if rank is not 0
      if (response.success && response.data?.access_token) {
        const { login } = useAuthStore.getState()
        login(response.data)

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

  // Get auth token
  static getAuthToken(): string | null {
    const { access_token } = useAuthStore.getState()
    return access_token
  }

  // Initialize auth state (call on app startup)
  static initializeAuth(): void {
    const { access_token, isTokenExpired, clearAuth } = useAuthStore.getState()

    if (access_token) {
      // Check if token is expired
      if (isTokenExpired()) {
        // Token expired, clear auth state
        clearAuth()
        apiClient.removeAuthToken()
      } else {
        // Token is valid, set it in API client
        apiClient.setAuthToken(access_token)
      }
    }
  }

  // Refresh token method
  static async refreshToken(): Promise<boolean> {
    try {
      const { refresh_token, updateTokens, clearAuth } = useAuthStore.getState()

      if (!refresh_token) {
        clearAuth()
        return false
      }

      const response = await apiClient.post<{
        success: boolean
        data?: {
          access_token: string
          refresh_token: string
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
