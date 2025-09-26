import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@/types/api'

interface AuthState {
  // State
  access_token: string | null
  refresh_token: string | null
  user: User | null
  expires_at: number | null
  isAuthenticated: boolean
  isLoading: boolean

  // Actions
  login: (tokens: {
    access_token: string
    refresh_token: string
    user: User
    expires_in: number
  }) => void
  logout: () => void
  setLoading: (loading: boolean) => void
  updateTokens: (tokens: {
    access_token: string
    refresh_token: string
    expires_in: number
  }) => void
  isTokenExpired: () => boolean
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial state
      access_token: null,
      refresh_token: null,
      user: null,
      expires_at: null,
      isAuthenticated: false,
      isLoading: false,

      // Actions
      login: (tokens) => {
        const expires_at = Date.now() + tokens.expires_in * 1000 // Convert seconds to milliseconds
        set({
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
          user: tokens.user,
          expires_at,
          isAuthenticated: true,
          isLoading: false
        })
      },

      logout: () => {
        set({
          access_token: null,
          refresh_token: null,
          user: null,
          expires_at: null,
          isAuthenticated: false,
          isLoading: false
        })
      },

      setLoading: (loading) => {
        set({ isLoading: loading })
      },

      updateTokens: (tokens) => {
        const expires_at = Date.now() + tokens.expires_in * 1000
        set({
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
          expires_at
        })
      },

      isTokenExpired: () => {
        const { expires_at } = get()
        if (!expires_at) return true
        return Date.now() >= expires_at
      },

      clearAuth: () => {
        set({
          access_token: null,
          refresh_token: null,
          user: null,
          expires_at: null,
          isAuthenticated: false,
          isLoading: false
        })
      }
    }),
    {
      name: 'auth-store', // Storage key
      partialize: (state) => ({
        access_token: state.access_token,
        refresh_token: state.refresh_token,
        user: state.user,
        expires_at: state.expires_at,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
)
