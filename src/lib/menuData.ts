import {
  MdDashboard,
  MdPeople,
  MdTrendingUp,
  MdPlayArrow,
  MdMonitor,
  MdApi,
  MdSettings
} from 'react-icons/md'

export interface MenuItem {
  categoryCode: string
  code: string
  header: string
  icon: string
  title: string
  url: string
  iconComponent?: React.ComponentType<any>
}

// Icon mapping
const iconMap: Record<string, React.ComponentType<any>> = {
  dashboard: MdDashboard,
  members: MdPeople,
  strategies: MdTrendingUp,
  execution: MdPlayArrow,
  monitoring: MdMonitor,
  api: MdApi,
  strategy: MdSettings
}

export function getAdminMenu(): MenuItem[] {
  return [
    {
      categoryCode: 'ADMIN',
      code: 'dashboard',
      header: 'Dashboard',
      icon: 'dashboard',
      title: 'Dashboard',
      url: '/admin/dashboard',
      iconComponent: iconMap.dashboard
    },
    {
      categoryCode: 'ADMIN',
      code: 'members',
      header: 'Members',
      icon: 'members',
      title: 'Members',
      url: '/admin/members',
      iconComponent: iconMap.members
    },
    {
      categoryCode: 'ADMIN',
      code: 'strategies',
      header: 'Strategies',
      icon: 'strategies',
      title: 'Strategies',
      url: '/admin/strategies',
      iconComponent: iconMap.strategies
    },
    {
      categoryCode: 'ADMIN',
      code: 'execution',
      header: 'Execution',
      icon: 'execution',
      title: 'Execution',
      url: '/admin/execution',
      iconComponent: iconMap.execution
    },
    {
      categoryCode: 'ADMIN',
      code: 'logs',
      header: 'Logs & Monitoring',
      icon: 'monitoring',
      title: 'Logs & Monitoring',
      url: '/admin/logs',
      iconComponent: iconMap.monitoring
    }
  ]
}

export function getMemberMenu(): MenuItem[] {
  return [
    {
      categoryCode: 'MEMBER',
      code: 'dashboard',
      header: 'Dashboard',
      icon: 'dashboard',
      title: 'Dashboard',
      url: '/member/dashboard',
      iconComponent: iconMap.dashboard
    },
    {
      categoryCode: 'MEMBER',
      code: 'api',
      header: 'API Management',
      icon: 'api',
      title: 'API Management',
      url: '/member/api',
      iconComponent: iconMap.api
    },
    {
      categoryCode: 'MEMBER',
      code: 'strategies',
      header: 'Strategies',
      icon: 'strategy',
      title: 'Strategies',
      url: '/member/strategies',
      iconComponent: iconMap.strategy
    }
  ]
}

// Get menu based on user role
export function getMenuByRole(role: 'admin' | 'member'): MenuItem[] {
  switch (role) {
    case 'admin':
      return getAdminMenu()
    case 'member':
      return getMemberMenu()
    default:
      return []
  }
}
