import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuthStore } from '@/stores'
import { authService } from '@/services'
import {
  isPublicRoute,
  shouldRedirectFromAuth,
  routeConfig
} from '@/config/routes'

// Loading component
function AppLoading() {
  return (
    <div
      className='min-h-screen flex items-center justify-center'
      data-theme='dark'
    >
      <div className='flex flex-col items-center gap-4'>
        <span className='loading loading-spinner loading-lg'></span>
        <p className='text-base-content/70'>Loading...</p>
      </div>
    </div>
  )
}

interface RouteGuardProps {
  children: React.ReactNode
}

export function RouteGuard({ children }: RouteGuardProps) {
  const router = useRouter()
  const { isAuthenticated, isLoading } = useAuthStore()
  const [isAuthorizing, setIsAuthorizing] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const currentPath = router.asPath

      // Nếu là public route, cho phép truy cập
      if (isPublicRoute(currentPath)) {
        // Nếu đã authenticated và đang ở login/register, redirect về home
        if (isAuthenticated && shouldRedirectFromAuth(currentPath)) {
          router.replace(routeConfig.redirects.afterLogin)
          return
        }
        setIsAuthorizing(false)
        return
      }

      // Protected route - cần authentication
      if (!isAuthenticated) {
        // Try to refresh token first
        const refreshSuccess = await authService.refreshToken()

        if (!refreshSuccess) {
          // No valid token, redirect to login with return URL
          const redirectUrl = `${
            routeConfig.redirects.unauthorized
          }?redirect=${encodeURIComponent(currentPath)}`
          router.replace(redirectUrl)
          return
        }
      }

      setIsAuthorizing(false)
    }

    // Only check auth when loading is complete
    if (!isLoading) {
      checkAuth()
    }
  }, [router.asPath, isAuthenticated, isLoading, router])

  // Show loading during auth check or initial load
  if (isLoading || isAuthorizing) {
    return <AppLoading />
  }

  return <>{children}</>
}
