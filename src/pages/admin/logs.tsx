export default function LogsPage() {
  return (
    <>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold text-base-content'>
          Logs & Monitoring
        </h1>
        <p className='text-base-content/70 mt-2'>
          System logs and monitoring dashboard
        </p>
      </div>

      <div className='grid grid-cols-3 gap-6 mb-8'>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-2'>System Status</h3>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-success rounded-full'></div>
            <span className='text-success font-semibold'>Healthy</span>
          </div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-2'>Active Alerts</h3>
          <div className='text-3xl font-bold text-warning'>3</div>
        </div>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-2'>Uptime</h3>
          <div className='text-3xl font-bold text-success'>99.9%</div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-6'>
        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-4'>System Logs</h3>
          <div className='space-y-2 h-64 overflow-y-auto'>
            <div className='flex items-center gap-2 text-sm'>
              <span className='text-base-content/50'>10:45:23</span>
              <span className='badge badge-info badge-sm'>INFO</span>
              <span>Strategy execution started for user #1247</span>
            </div>
            <div className='flex items-center gap-2 text-sm'>
              <span className='text-base-content/50'>10:44:15</span>
              <span className='badge badge-success badge-sm'>SUCCESS</span>
              <span>Database backup completed successfully</span>
            </div>
            <div className='flex items-center gap-2 text-sm'>
              <span className='text-base-content/50'>10:43:08</span>
              <span className='badge badge-warning badge-sm'>WARN</span>
              <span>High memory usage detected: 87%</span>
            </div>
            <div className='flex items-center gap-2 text-sm'>
              <span className='text-base-content/50'>10:42:01</span>
              <span className='badge badge-error badge-sm'>ERROR</span>
              <span>Failed to connect to external API</span>
            </div>
          </div>
        </div>

        <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
          <h3 className='text-lg font-semibold mb-4'>Performance Metrics</h3>
          <div className='space-y-4'>
            <div>
              <div className='flex justify-between text-sm mb-1'>
                <span>CPU Usage</span>
                <span>45%</span>
              </div>
              <progress
                className='progress progress-primary w-full'
                value={45}
                max={100}
              ></progress>
            </div>
            <div>
              <div className='flex justify-between text-sm mb-1'>
                <span>Memory Usage</span>
                <span>67%</span>
              </div>
              <progress
                className='progress progress-warning w-full'
                value={67}
                max={100}
              ></progress>
            </div>
            <div>
              <div className='flex justify-between text-sm mb-1'>
                <span>Disk Usage</span>
                <span>23%</span>
              </div>
              <progress
                className='progress progress-success w-full'
                value={23}
                max={100}
              ></progress>
            </div>
            <div>
              <div className='flex justify-between text-sm mb-1'>
                <span>Network I/O</span>
                <span>89%</span>
              </div>
              <progress
                className='progress progress-error w-full'
                value={89}
                max={100}
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
