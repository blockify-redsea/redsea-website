import { useAuthStore } from '@/stores'
import { authService } from '@/services'
import DashboardLayout from '@/layouts/DashboardLayout'

export default function HomePage() {
  const { user } = useAuthStore()

  const handleLogout = async () => {
    await authService.logout()
  }

  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-2xl font-bold text-base-content'>Requests</h1>
        <button onClick={handleLogout} className='btn btn-outline btn-sm'>
          Logout
        </button>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-4 gap-6 mb-8'>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <div className='text-sm text-base-content/70 mb-2'>Active Member</div>
          <div className='text-3xl font-bold text-base-content'>125</div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <div className='text-sm text-base-content/70 mb-2'>
            Running Strategies
          </div>
          <div className='text-3xl font-bold text-base-content'>48</div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <div className='text-sm text-base-content/70 mb-2'>
            Total Trade Volume
          </div>
          <div className='text-3xl font-bold text-base-content'>$2.3M</div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <div className='text-sm text-base-content/70 mb-2'>
            Execution Success Rate
          </div>
          <div className='text-3xl font-bold text-base-content'>92%</div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-6 mb-8'>
        {/* Trade Volume Chart */}
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-4'>Trade Volume Over Time</h3>
          <div className='h-64 flex items-center justify-center text-base-content/50'>
            Chart will be implemented here
          </div>
        </div>

        {/* Performance Donut Chart */}
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-4'>
            Top Performing Strategy
          </h3>
          <div className='h-64 flex items-center justify-center'>
            <div className='w-32 h-32 rounded-full border-8 border-primary/20 border-t-primary flex items-center justify-center'>
              <div className='text-center'>
                <div className='text-2xl font-bold'>48</div>
                <div className='text-sm text-base-content/70'>Strategies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-6 mb-8'>
        {/* Logs & Alerts */}
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-4'>Logs & Alerts</h3>
          <div className='space-y-3'>
            <div className='flex items-center gap-3'>
              <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
              <div className='text-sm'>Execution started for member 1</div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
              <div className='text-sm'>Member 154 approved</div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-2 h-2 bg-red-500 rounded-full'></div>
              <div className='text-sm'>
                Error in strategy execution: Timeout
              </div>
            </div>
          </div>
        </div>

        {/* System Alerts */}
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-4'>System Alerts</h3>
          <div className='text-center'>
            <div className='text-2xl font-bold text-green-500'>05</div>
            <div className='text-sm text-base-content/70'>Active</div>
          </div>
        </div>

        {/* API Health */}
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-4'>API Health</h3>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
            <span className='text-sm'>Healthy</span>
          </div>
          <div className='mt-4'>
            <div className='text-sm text-base-content/70'>Assigned members</div>
            <div className='text-xl font-bold'>37</div>
          </div>
        </div>
      </div>

      {/* Recent Executions Table */}
      <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
        <h3 className='text-lg font-semibold mb-4'>Recent Executions</h3>
        <div className='overflow-x-auto'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th>Member</th>
                <th>Strategy</th>
                <th>Result</th>
                <th>P&L / Loss</th>
                <th>Volume</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Lee</td>
                <td>Arbitrage</td>
                <td>
                  <span className='badge badge-success'>SUCCESS</span>
                </td>
                <td className='text-success'>+ $200.00</td>
                <td>5</td>
                <td>
                  <button className='btn btn-ghost btn-xs'>View</button>
                </td>
              </tr>
              <tr>
                <td>John Lee</td>
                <td>Arbitrage</td>
                <td>
                  <span className='badge badge-warning'>PARTIAL</span>
                </td>
                <td className='text-success'>+ $500.00</td>
                <td>5</td>
                <td>
                  <button className='btn btn-ghost btn-xs'>View</button>
                </td>
              </tr>
              <tr>
                <td>John Lee</td>
                <td>Scalping</td>
                <td>
                  <span className='badge badge-warning'>PARTIAL</span>
                </td>
                <td className='text-success'>+ $450.00</td>
                <td>5</td>
                <td>
                  <button className='btn btn-ghost btn-xs'>View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}
