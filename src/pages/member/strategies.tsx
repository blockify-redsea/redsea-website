export default function MemberStrategiesPage() {
  return (
    <>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold text-base-content'>My Strategies</h1>
        <p className='text-base-content/70 mt-2'>
          Manage and monitor your trading strategies
        </p>
      </div>

      <div className='grid grid-cols-3 gap-6 mb-8'>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-2'>Active Strategies</h3>
          <div className='text-3xl font-bold text-success'>5</div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-2'>Total Profit</h3>
          <div className='text-3xl font-bold text-primary'>$2,150</div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-2'>Win Rate</h3>
          <div className='text-3xl font-bold text-info'>89%</div>
        </div>
      </div>

      {/* Strategies List */}
      <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-lg font-semibold'>Your Strategies</h3>
          <button className='btn btn-primary btn-sm'>
            Create New Strategy
          </button>
        </div>
        <div className='overflow-x-auto'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th>Strategy Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Profit/Loss</th>
                <th>Win Rate</th>
                <th>Last Run</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>
                    <div className='font-semibold'>My Arbitrage Bot</div>
                    <div className='text-sm text-base-content/70'>
                      BTC/USDT - ETH/USDT
                    </div>
                  </div>
                </td>
                <td>
                  <span className='badge badge-primary'>Arbitrage</span>
                </td>
                <td>
                  <span className='badge badge-success'>Running</span>
                </td>
                <td className='text-success font-semibold'>+$1,250</td>
                <td>92%</td>
                <td>2 minutes ago</td>
                <td>
                  <div className='flex gap-1'>
                    <button className='btn btn-ghost btn-xs'>View</button>
                    <button className='btn btn-ghost btn-xs'>Edit</button>
                    <button className='btn btn-ghost btn-xs'>Stop</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <div className='font-semibold'>Scalping Pro</div>
                    <div className='text-sm text-base-content/70'>
                      Multiple pairs
                    </div>
                  </div>
                </td>
                <td>
                  <span className='badge badge-secondary'>Scalping</span>
                </td>
                <td>
                  <span className='badge badge-success'>Running</span>
                </td>
                <td className='text-success font-semibold'>+$580</td>
                <td>85%</td>
                <td>5 minutes ago</td>
                <td>
                  <div className='flex gap-1'>
                    <button className='btn btn-ghost btn-xs'>View</button>
                    <button className='btn btn-ghost btn-xs'>Edit</button>
                    <button className='btn btn-ghost btn-xs'>Stop</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <div className='font-semibold'>Grid Master</div>
                    <div className='text-sm text-base-content/70'>ADA/USDT</div>
                  </div>
                </td>
                <td>
                  <span className='badge badge-accent'>Grid</span>
                </td>
                <td>
                  <span className='badge badge-warning'>Paused</span>
                </td>
                <td className='text-success font-semibold'>+$320</td>
                <td>78%</td>
                <td>1 hour ago</td>
                <td>
                  <div className='flex gap-1'>
                    <button className='btn btn-ghost btn-xs'>View</button>
                    <button className='btn btn-ghost btn-xs'>Edit</button>
                    <button className='btn btn-ghost btn-xs'>Start</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
