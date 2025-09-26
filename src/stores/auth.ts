import { create } from 'zustand'
import type { User } from '@/types/api'

interface AuthState {
  // State (only user in store)
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean

  // Actions
  login: (tokens: {
    access_token: string
    refresh_token: string
    token_type: string
    expires_in: number
    user: User
  }) => void
  logout: () => void
  setLoading: (loading: boolean) => void
  updateTokens: (tokens: {
    access_token: string
    refresh_token: string
    token_type: string
    expires_in: number
  }) => void
  isTokenExpired: () => boolean
  clearAuth: () => void
  getAccessToken: () => string | null
  getRefreshToken: () => string | null
  setAuthenticated: (authenticated: boolean) => void
  setUser: (user: User | null) => void
}

// Local storage helpers for tokens
const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  TOKEN_TYPE: 'token_type',
  EXPIRES_IN: 'expires_in',
  EXPIRES_AT: 'expires_at'
}

const setTokenToStorage = (key: string, value: string | number | undefined) => {
  if (typeof window !== 'undefined' && value !== undefined && value !== null) {
    localStorage.setItem(key, value.toString())
  }
}

const getTokenFromStorage = (key: string): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key)
  }
  return null
}

const removeTokenFromStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key)
  }
}

export const useAuthStore = create<AuthState>((set, get) => ({
  // Initial state (only user in store)
  user: null,
  isAuthenticated: false,
  isLoading: false,

  // Actions
  login: (tokens) => {
    const expires_at = Date.now() + tokens.expires_in * 1000

    // Save tokens to localStorage
    setTokenToStorage(STORAGE_KEYS.ACCESS_TOKEN, tokens.access_token)
    setTokenToStorage(STORAGE_KEYS.REFRESH_TOKEN, tokens.refresh_token)
    setTokenToStorage(STORAGE_KEYS.TOKEN_TYPE, tokens.token_type)
    setTokenToStorage(STORAGE_KEYS.EXPIRES_IN, tokens.expires_in)
    setTokenToStorage(STORAGE_KEYS.EXPIRES_AT, expires_at)

    // Save only user to store (in memory only)
    set({
      user: tokens.user,
      isAuthenticated: true,
      isLoading: false
    })
  },

  logout: () => {
    // Clear tokens from localStorage
    removeTokenFromStorage(STORAGE_KEYS.ACCESS_TOKEN)
    removeTokenFromStorage(STORAGE_KEYS.REFRESH_TOKEN)
    removeTokenFromStorage(STORAGE_KEYS.TOKEN_TYPE)
    removeTokenFromStorage(STORAGE_KEYS.EXPIRES_IN)
    removeTokenFromStorage(STORAGE_KEYS.EXPIRES_AT)

    // Clear user from store
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false
    })
  },

  setLoading: (loading) => {
    set({ isLoading: loading })
  },

  updateTokens: (tokens) => {
    const expires_at = Date.now() + tokens.expires_in * 1000

    // Update tokens in localStorage
    setTokenToStorage(STORAGE_KEYS.ACCESS_TOKEN, tokens.access_token)
    setTokenToStorage(STORAGE_KEYS.REFRESH_TOKEN, tokens.refresh_token)
    setTokenToStorage(STORAGE_KEYS.TOKEN_TYPE, tokens.token_type)
    setTokenToStorage(STORAGE_KEYS.EXPIRES_IN, tokens.expires_in)
    setTokenToStorage(STORAGE_KEYS.EXPIRES_AT, expires_at)
  },

  isTokenExpired: () => {
    const expires_at = getTokenFromStorage(STORAGE_KEYS.EXPIRES_AT)
    if (!expires_at) return true
    return Date.now() >= parseInt(expires_at)
  },

  clearAuth: () => {
    // Clear tokens from localStorage
    removeTokenFromStorage(STORAGE_KEYS.ACCESS_TOKEN)
    removeTokenFromStorage(STORAGE_KEYS.REFRESH_TOKEN)
    removeTokenFromStorage(STORAGE_KEYS.TOKEN_TYPE)
    removeTokenFromStorage(STORAGE_KEYS.EXPIRES_IN)
    removeTokenFromStorage(STORAGE_KEYS.EXPIRES_AT)

    // Clear user from store
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false
    })
  },

  getAccessToken: () => {
    return getTokenFromStorage(STORAGE_KEYS.ACCESS_TOKEN)
  },

  getRefreshToken: () => {
    return getTokenFromStorage(STORAGE_KEYS.REFRESH_TOKEN)
  },

  setAuthenticated: (authenticated) => {
    set({ isAuthenticated: authenticated })
  },

  setUser: (user) => {
    set({ user, isAuthenticated: true })
  }
}))
