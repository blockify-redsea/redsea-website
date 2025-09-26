export default function ApiManagementPage() {
  return (
    <>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold text-base-content'>API Management</h1>
        <p className='text-base-content/70 mt-2'>
          Manage your API keys and integrations
        </p>
      </div>

      <div className='grid grid-cols-2 gap-6 mb-8'>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-2'>API Status</h3>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-success rounded-full'></div>
            <span className='text-success font-semibold'>Connected</span>
          </div>
          <div className='mt-4'>
            <div className='text-sm text-base-content/70'>Last sync</div>
            <div className='font-semibold'>2 minutes ago</div>
          </div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-2'>API Calls Today</h3>
          <div className='text-3xl font-bold text-primary'>1,247</div>
          <div className='text-sm text-base-content/70 mt-2'>
            of 10,000 limit
          </div>
        </div>
      </div>

      {/* API Keys Section */}
      <div className='bg-base-100 rounded-lg p-6 border border-base-300 mb-8'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-lg font-semibold'>API Keys</h3>
          <button className='btn btn-primary btn-sm'>Add New Key</button>
        </div>
        <div className='overflow-x-auto'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th>Exchange</th>
                <th>Key Name</th>
                <th>Status</th>
                <th>Permissions</th>
                <th>Last Used</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xs'>
                      B
                    </div>
                    Binance
                  </div>
                </td>
                <td>Main Trading Key</td>
                <td>
                  <span className='badge badge-success'>Active</span>
                </td>
                <td>
                  <div className='flex gap-1'>
                    <span className='badge badge-sm'>Read</span>
                    <span className='badge badge-sm'>Trade</span>
                  </div>
                </td>
                <td>2 minutes ago</td>
                <td>
                  <button className='btn btn-ghost btn-xs'>Edit</button>
                  <button className='btn btn-ghost btn-xs text-error'>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-xs'>
                      K
                    </div>
                    KuCoin
                  </div>
                </td>
                <td>Backup Key</td>
                <td>
                  <span className='badge badge-warning'>Inactive</span>
                </td>
                <td>
                  <div className='flex gap-1'>
                    <span className='badge badge-sm'>Read</span>
                  </div>
                </td>
                <td>1 week ago</td>
                <td>
                  <button className='btn btn-ghost btn-xs'>Edit</button>
                  <button className='btn btn-ghost btn-xs text-error'>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* API Usage Statistics */}
      <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
        <h3 className='text-lg font-semibold mb-4'>API Usage Statistics</h3>
        <div className='grid grid-cols-3 gap-6'>
          <div className='text-center'>
            <div className='text-2xl font-bold text-primary'>5,247</div>
            <div className='text-sm text-base-content/70'>Total Requests</div>
          </div>
          <div className='text-center'>
            <div className='text-2xl font-bold text-success'>99.8%</div>
            <div className='text-sm text-base-content/70'>Success Rate</div>
          </div>
          <div className='text-center'>
            <div className='text-2xl font-bold text-info'>24ms</div>
            <div className='text-sm text-base-content/70'>Avg Response</div>
          </div>
        </div>
      </div>
    </>
  )
}
