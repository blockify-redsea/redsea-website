import Link from 'next/link'
import { useAuthStore } from '@/stores'
import { UserRank, getDashboardUrl } from '@/types/enums'

export default function Custom404() {
  const { isAuthenticated, user } = useAuthStore()

  // Get dashboard URL based on user role using enum helper
  const dashboardUrl = () => {
    if (!user) return '/'

    return getDashboardUrl(user.rank as UserRank)
  }

  return (
    <div
      className='min-h-screen flex items-center justify-center'
      data-theme='dark'
    >
      <div className='text-center'>
        <h1 className='text-6xl font-bold text-primary mb-4'>404</h1>
        <h2 className='text-2xl font-semibold text-base-content mb-4'>
          Page Not Found
        </h2>
        <p className='text-base-content/70 mb-8'>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className='space-x-4'>
          {isAuthenticated ? (
            <Link href={dashboardUrl()} className='btn btn-primary'>
              Go to Dashboard
            </Link>
          ) : (
            <Link href='/login' className='btn btn-primary'>
              Go to Login
            </Link>
          )}
          <button
            onClick={() => window.history.back()}
            className='btn btn-outline'
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
