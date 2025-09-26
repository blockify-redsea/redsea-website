// User Rank Enum
export enum UserRank {
  PENDING = 0, // 🔴 Unapproved - Chưa được phê duyệt
  MEMBER = 1, // 🟢 Regular User - Người dùng thường
  ADMIN = 2, // 🟡 Admin - Quản trị viên
  SUPER_ADMIN = 3 // 🔥 Super Admin - Siêu quản trị viên
}

// User Status Enum
export enum UserStatus {
  INACTIVE = 0, // Tài khoản chưa kích hoạt
  ACTIVE = 1, // Tài khoản hoạt động
  SUSPENDED = 2, // Tài khoản bị đình chỉ
  BANNED = 3 // Tài khoản bị cấm
}

// Strategy Result Enum
export enum StrategyResult {
  SUCCESS = 'Success',
  FAILED = 'Failed',
  PARTIAL = 'Partial',
  TIMEOUT = 'Timeout',
  STALLED = 'Stalled',
  CANCELLED = 'Cancelled'
}

// Strategy Type Enum
export enum StrategyType {
  ARBITRAGE = 'Arbitrage',
  SCALPING = 'Scalping',
  GRID = 'Grid',
  OTHER = 'Other'
}

// Trading Action Enum
export enum TradingAction {
  BUY = 'BUY',
  SELL = 'SELL'
}

// Helper functions
export const getUserRoleLabel = (rank: UserRank): string => {
  switch (rank) {
    case UserRank.PENDING:
      return 'Unapproved'
    case UserRank.MEMBER:
      return 'Regular User'
    case UserRank.ADMIN:
      return 'Admin'
    case UserRank.SUPER_ADMIN:
      return 'Super Admin'
    default:
      return 'Unknown'
  }
}

export const isAdmin = (rank: UserRank): boolean => {
  return rank === UserRank.ADMIN || rank === UserRank.SUPER_ADMIN
}

export const isMember = (rank: UserRank): boolean => {
  return rank >= UserRank.MEMBER
}

export const isPendingApproval = (rank: UserRank): boolean => {
  return rank === UserRank.PENDING
}

export const isSuperAdmin = (rank: UserRank): boolean => {
  return rank === UserRank.SUPER_ADMIN
}

export const getDashboardUrl = (rank: UserRank): string => {
  if (isAdmin(rank)) {
    return '/admin/dashboard'
  } else if (isMember(rank)) {
    return '/member/dashboard'
  }
  return '/'
}
