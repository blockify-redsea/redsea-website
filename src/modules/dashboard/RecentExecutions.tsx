import Table, { TableColumn } from '@/components/ui/table'

// Recent Executions data
const recentExecutionsData = [
  {
    time: '2025-09-18 14:45:23',
    member: 'John Lee',
    strategy: 'Arbitrage',
    result: 'Success',
    profitLoss: '+$200.00',
    trading: '5',
    action: 'view'
  },
  {
    time: '2025-09-18 14:44:15',
    member: 'John Lee',
    strategy: 'Arbitrage',
    result: 'Failed',
    profitLoss: '+$250.00',
    trading: '5',
    action: 'view'
  },
  {
    time: '2025-09-18 14:43:08',
    member: 'John Lee',
    strategy: 'Scalping',
    result: 'Partial',
    profitLoss: '+$450.00',
    trading: '5',
    action: 'view'
  },
  {
    time: '2025-09-18 14:42:01',
    member: 'John Lee',
    strategy: 'Scalping',
    result: 'Success',
    profitLoss: '+$300.00',
    trading: '5',
    action: 'view'
  },
  {
    time: '2025-09-18 14:41:45',
    member: 'John Lee',
    strategy: 'Other',
    result: 'Timeout',
    profitLoss: '$50.00',
    trading: '5',
    action: 'view'
  },
  {
    time: '2025-09-18 14:40:32',
    member: 'John Lee',
    strategy: 'Grid',
    result: 'Stalled',
    profitLoss: '+$250.00',
    trading: '5',
    action: 'view'
  },
  {
    time: '2025-09-18 14:39:18',
    member: 'John Lee',
    strategy: 'Grid',
    result: 'Success',
    profitLoss: '+$150.00',
    trading: '5',
    action: 'view'
  },
  {
    time: '2025-09-18 14:38:05',
    member: 'John Lee',
    strategy: 'Other',
    result: 'Cancelled',
    profitLoss: '+$180.00',
    trading: '5',
    action: 'view'
  }
]

const columns: TableColumn[] = [
  {
    key: 'time',
    label: 'Time',
    render: (value) => (
      <div className='text-sm'>
        <div>{value.split(' ')[0]}</div>
        <div className='text-base-content/50'>{value.split(' ')[1]}</div>
      </div>
    )
  },
  {
    key: 'member',
    label: 'Member'
  },
  {
    key: 'strategy',
    label: 'Strategy'
  },
  {
    key: 'result',
    label: 'Result',
    render: (value) => {
      const getBadgeClass = (result: string) => {
        switch (result.toLowerCase()) {
          case 'success':
            return 'badge-success'
          case 'failed':
            return 'badge-error'
          case 'partial':
            return 'badge-warning'
          case 'timeout':
            return 'badge-error'
          case 'stalled':
            return 'badge-info'
          case 'cancelled':
            return 'badge-neutral'
          default:
            return 'badge-neutral'
        }
      }
      return (
        <span className={`badge ${getBadgeClass(value)} badge-sm`}>
          {value}
        </span>
      )
    }
  },
  {
    key: 'profitLoss',
    label: 'P&L / Loss',
    render: (value) => {
      const isProfit = value.startsWith('+')
      const isLoss = value.startsWith('-')
      return (
        <span
          className={
            isProfit
              ? 'text-success'
              : isLoss
              ? 'text-error'
              : 'text-base-content'
          }
        >
          {value}
        </span>
      )
    }
  },
  {
    key: 'trading',
    label: 'Trading'
  },
  {
    key: 'action',
    label: 'Action',
    render: () => (
      <button className='btn btn-ghost btn-circle btn-sm'>
        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
          <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
        </svg>
      </button>
    )
  }
]

export default function RecentExecutions() {
  return (
    <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
      <h3 className='text-lg font-semibold mb-4'>Recent Executions</h3>
      <Table columns={columns} data={recentExecutionsData} />
    </div>
  )
}
