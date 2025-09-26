import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '@/styles/globals.css'
import { authService } from '@/services'
import { useAuthStore } from '@/stores'
import { RouteGuard } from '@/hocs/RouteGuard'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  const { setLoading } = useAuthStore()

  useEffect(() => {
    const initializeApp = async () => {
      setLoading(true)
      try {
        // Initialize auth state on app startup
        authService.initializeAuth()
      } catch (error) {
        console.error('App initialization error:', error)
      } finally {
        setLoading(false)
      }
    }

    initializeApp()
  }, [setLoading])

  return (
    <RouteGuard>
      <Component {...pageProps} />
      <Toaster position='top-right' />
    </RouteGuard>
  )
}
