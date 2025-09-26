import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuItem } from '@/lib/menuData'

interface SidebarProps {
  menuItems: MenuItem[]
  className?: string
}

export default function Sidebar({ menuItems, className = '' }: SidebarProps) {
  const router = useRouter()

  const isActive = (url: string) => {
    return router.pathname === url || router.pathname.startsWith(url + '/')
  }

  return (
    <aside className={`bg-base-200 border-r border-base-300 ${className}`}>
      <nav className='p-4'>
        <ul className='space-y-2'>
          {menuItems.map((item) => {
            const IconComponent = item.iconComponent
            const active = isActive(item.url)

            return (
              <li key={item.code}>
                <Link
                  href={item.url}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-base-300 ${
                    active
                      ? 'bg-primary text-primary-content hover:bg-primary/90'
                      : 'text-base-content'
                  }`}
                >
                  {IconComponent && <IconComponent className='w-5 h-5' />}
                  <span className='font-medium'>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
