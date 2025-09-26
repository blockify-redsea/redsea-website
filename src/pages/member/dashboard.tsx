export default function MemberDashboard() {
  return (
    <>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold text-base-content'>Dashboard</h1>
        <p className='text-base-content/70 mt-2'>
          Welcome to your trading dashboard
        </p>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-3 gap-6 mb-8'>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <div className='text-sm text-base-content/70 mb-2'>
            Active Strategies
          </div>
          <div className='text-3xl font-bold text-base-content'>5</div>
          <div className='text-sm text-success mt-2'>↗ +1 this week</div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <div className='text-sm text-base-content/70 mb-2'>Total Profit</div>
          <div className='text-3xl font-bold text-success'>$2,150</div>
          <div className='text-sm text-success mt-2'>↗ +12% this month</div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <div className='text-sm text-base-content/70 mb-2'>Success Rate</div>
          <div className='text-3xl font-bold text-base-content'>89%</div>
          <div className='text-sm text-success mt-2'>↗ +3% this month</div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-6 mb-8'>
        {/* Performance Chart */}
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-4'>Performance Over Time</h3>
          <div className='h-64 flex items-center justify-center text-base-content/50'>
            Performance Chart Placeholder
          </div>
        </div>

        {/* Strategy Distribution */}
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-4'>Strategy Distribution</h3>
          <div className='space-y-3'>
            <div className='flex justify-between items-center'>
              <span>Arbitrage</span>
              <div className='flex items-center gap-2'>
                <progress
                  className='progress progress-primary w-20'
                  value={60}
                  max={100}
                ></progress>
                <span className='text-sm'>60%</span>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <span>Scalping</span>
              <div className='flex items-center gap-2'>
                <progress
                  className='progress progress-secondary w-20'
                  value={30}
                  max={100}
                ></progress>
                <span className='text-sm'>30%</span>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <span>Grid Trading</span>
              <div className='flex items-center gap-2'>
                <progress
                  className='progress progress-accent w-20'
                  value={10}
                  max={100}
                ></progress>
                <span className='text-sm'>10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Trades */}
      <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
        <h3 className='text-lg font-semibold mb-4'>Recent Trades</h3>
        <div className='overflow-x-auto'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th>Time</th>
                <th>Strategy</th>
                <th>Pair</th>
                <th>Side</th>
                <th>Amount</th>
                <th>P&L</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10:45 AM</td>
                <td>Arbitrage Bot</td>
                <td>BTC/USDT</td>
                <td>
                  <span className='badge badge-success'>BUY</span>
                </td>
                <td>0.1 BTC</td>
                <td className='text-success'>+$45.20</td>
                <td>
                  <span className='badge badge-success'>Completed</span>
                </td>
              </tr>
              <tr>
                <td>10:30 AM</td>
                <td>Scalping Strategy</td>
                <td>ETH/USDT</td>
                <td>
                  <span className='badge badge-error'>SELL</span>
                </td>
                <td>2.5 ETH</td>
                <td className='text-success'>+$23.75</td>
                <td>
                  <span className='badge badge-success'>Completed</span>
                </td>
              </tr>
              <tr>
                <td>10:15 AM</td>
                <td>Grid Trading</td>
                <td>ADA/USDT</td>
                <td>
                  <span className='badge badge-success'>BUY</span>
                </td>
                <td>1000 ADA</td>
                <td className='text-warning'>Pending</td>
                <td>
                  <span className='badge badge-warning'>Running</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
