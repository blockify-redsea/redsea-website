// Auth Types
export interface LoginRequest {
  user_id: string
  password: string
}

export interface LoginResponse {
  success: boolean
  message: string
  data?: {
    access_token: string
    refresh_token: string
    user: User
    expires_in: number
  }
}

export interface RegisterRequest {
  user_id: string
  email: string
  password: string
}

export interface RegisterResponse {
  success: boolean
  message: string
  data?: {
    user: User
  }
}

export interface User {
  id: number
  user_id: string
  email: string
  nickname: string
  is_active: boolean
  rank: number
  created_at: string
  updated_at: string
}

// API Error Types
export interface ApiError {
  success: false
  message: string
  errors?: Record<string, string[]>
  status_code: number
}

// Generic API Response
export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
}
