export default function MembersPage() {
  return (
    <>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold text-base-content'>Members</h1>
        <p className='text-base-content/70 mt-2'>
          Manage all members and their permissions
        </p>
      </div>

      <div className='bg-base-100 rounded-lg p-6 border border-base-300'>
        <h3 className='text-lg font-semibold mb-4'>Members List</h3>
        <div className='overflow-x-auto'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>
                  <span className='badge badge-primary'>Member</span>
                </td>
                <td>
                  <span className='badge badge-success'>Active</span>
                </td>
                <td>
                  <button className='btn btn-ghost btn-xs'>Edit</button>
                  <button className='btn btn-ghost btn-xs text-error'>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td>
                  <span className='badge badge-secondary'>Admin</span>
                </td>
                <td>
                  <span className='badge badge-success'>Active</span>
                </td>
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
    </>
  )
}
