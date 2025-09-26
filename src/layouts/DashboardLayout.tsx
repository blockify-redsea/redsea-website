import { ReactNode } from 'react'
import { useAuthStore } from '@/stores'
import { getMenuByRole } from '@/lib/menuData'
import { UserRank, isAdmin } from '@/types/enums'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

interface DashboardLayoutProps {
  children: ReactNode
  className?: string
}

export default function DashboardLayout({
  children,
  className = ''
}: DashboardLayoutProps) {
  const { user } = useAuthStore()

  const getUserRole = (): 'admin' | 'member' => {
    if (!user) return 'member'

    return isAdmin(user.rank as UserRank) ? 'admin' : 'member'
  }

  const userRole = getUserRole()
  const menuItems = getMenuByRole(userRole)

  return (
    <div className={`min-h-screen bg-base-100 ${className}`} data-theme='dark'>
      {/* Header */}
      <Header />

      {/* Main content area */}
      <div className='flex'>
        {/* Sidebar */}
        <Sidebar menuItems={menuItems} className='w-64 min-h-screen' />

        {/* Main content */}
        <main className='flex-1 p-6'>{children}</main>
      </div>
    </div>
  )
}
