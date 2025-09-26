export default function StrategiesPage() {
  return (
    <>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold text-base-content'>Strategies</h1>
        <p className='text-base-content/70 mt-2'>
          Manage trading strategies and configurations
        </p>
      </div>

      <div className='grid grid-cols-3 gap-6 mb-8'>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-2'>Active Strategies</h3>
          <div className='text-3xl font-bold text-primary'>12</div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-2'>Total Profit</h3>
          <div className='text-3xl font-bold text-success'>$45,230</div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-2'>Success Rate</h3>
          <div className='text-3xl font-bold text-info'>87%</div>
        </div>
      </div>

      <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
        <h3 className='text-lg font-semibold mb-4'>Strategy List</h3>
        <div className='overflow-x-auto'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th>Strategy Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Profit/Loss</th>
                <th>Success Rate</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arbitrage Bot</td>
                <td>
                  <span className='badge badge-primary'>Arbitrage</span>
                </td>
                <td>
                  <span className='badge badge-success'>Running</span>
                </td>
                <td className='text-success'>+$1,250</td>
                <td>92%</td>
                <td>
                  <button className='btn btn-ghost btn-xs'>View</button>
                  <button className='btn btn-ghost btn-xs'>Edit</button>
                </td>
              </tr>
              <tr>
                <td>Scalping Strategy</td>
                <td>
                  <span className='badge badge-secondary'>Scalping</span>
                </td>
                <td>
                  <span className='badge badge-warning'>Paused</span>
                </td>
                <td className='text-success'>+$890</td>
                <td>85%</td>
                <td>
                  <button className='btn btn-ghost btn-xs'>View</button>
                  <button className='btn btn-ghost btn-xs'>Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
