// Route Configuration for Authentication
export const routeConfig = {
  // Các route KHÔNG cần authentication (public routes)
  publicRoutes: ['/login', '/register', '/forgot-password'],

  // Redirect paths
  redirects: {
    afterLogin: '/',
    unauthorized: '/login'
  }
} as const

// Helper function to check if route is public
export function isPublicRoute(path: string): boolean {
  // Remove query parameters and hash for comparison
  const cleanPath = path.split('?')[0].split('#')[0]
  return routeConfig.publicRoutes.includes(cleanPath as any)
}

// Helper function to check if route requires redirect after login
export function shouldRedirectFromAuth(path: string): boolean {
  const cleanPath = path.split('?')[0].split('#')[0]
  return ['/login', '/register'].includes(cleanPath)
}
