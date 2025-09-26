export default function ExecutionPage() {
  return (
    <>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold text-base-content'>Execution</h1>
        <p className='text-base-content/70 mt-2'>
          Monitor and manage strategy executions
        </p>
      </div>

      <div className='grid grid-cols-4 gap-6 mb-8'>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-2'>Total Executions</h3>
          <div className='text-3xl font-bold text-base-content'>1,247</div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-2'>Successful</h3>
          <div className='text-3xl font-bold text-success'>1,089</div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-2'>Failed</h3>
          <div className='text-3xl font-bold text-error'>158</div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-2'>Success Rate</h3>
          <div className='text-3xl font-bold text-info'>87.3%</div>
        </div>
      </div>

      <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
        <h3 className='text-lg font-semibold mb-4'>Recent Executions</h3>
        <div className='overflow-x-auto'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th>Time</th>
                <th>Strategy</th>
                <th>Member</th>
                <th>Status</th>
                <th>Result</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10:45 AM</td>
                <td>Arbitrage Bot</td>
                <td>John Lee</td>
                <td>
                  <span className='badge badge-success'>Completed</span>
                </td>
                <td className='text-success'>+$45.20</td>
                <td>
                  <button className='btn btn-ghost btn-xs'>Details</button>
                </td>
              </tr>
              <tr>
                <td>10:42 AM</td>
                <td>Scalping Strategy</td>
                <td>Jane Smith</td>
                <td>
                  <span className='badge badge-error'>Failed</span>
                </td>
                <td className='text-error'>-$12.50</td>
                <td>
                  <button className='btn btn-ghost btn-xs'>Details</button>
                </td>
              </tr>
              <tr>
                <td>10:38 AM</td>
                <td>Grid Trading</td>
                <td>Mike Johnson</td>
                <td>
                  <span className='badge badge-warning'>Running</span>
                </td>
                <td className='text-base-content/70'>Pending</td>
                <td>
                  <button className='btn btn-ghost btn-xs'>Monitor</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
