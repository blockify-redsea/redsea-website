import { RecentExecutions } from '@/modules/dashboard'

export default function AdminDashboard() {
  return (
    <>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold text-base-content'>
          Admin Dashboard
        </h1>
        <p className='text-base-content/70 mt-2'>
          Overview of system performance and user activities
        </p>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-4 gap-6 mb-8'>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <div className='text-sm text-base-content/70 mb-2'>Total Members</div>
          <div className='text-3xl font-bold text-base-content'>1,247</div>
          <div className='text-sm text-success mt-2'>
            ↗ +12% from last month
          </div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <div className='text-sm text-base-content/70 mb-2'>
            Active Strategies
          </div>
          <div className='text-3xl font-bold text-base-content'>89</div>
          <div className='text-sm text-success mt-2'>↗ +8% from last month</div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <div className='text-sm text-base-content/70 mb-2'>Total Volume</div>
          <div className='text-3xl font-bold text-base-content'>$4.2M</div>
          <div className='text-sm text-success mt-2'>
            ↗ +15% from last month
          </div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <div className='text-sm text-base-content/70 mb-2'>Success Rate</div>
          <div className='text-3xl font-bold text-base-content'>94%</div>
          <div className='text-sm text-success mt-2'>↗ +2% from last month</div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-6 mb-8'>
        {/* Member Activity Chart */}
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-4'>
            Member Activity Over Time
          </h3>
          <div className='h-64 flex items-center justify-center text-base-content/50'>
            Activity Chart Placeholder
          </div>
        </div>

        {/* Revenue Chart */}
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-4'>Revenue Breakdown</h3>
          <div className='h-64 flex items-center justify-center'>
            <div className='w-32 h-32 rounded-full border-8 border-primary/20 border-t-primary flex items-center justify-center'>
              <div className='text-center'>
                <div className='text-2xl font-bold'>$4.2M</div>
                <div className='text-sm text-base-content/70'>Total</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Executions */}
      <RecentExecutions />
    </>
  )
}
