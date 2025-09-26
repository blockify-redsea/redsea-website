export default function HomePage() {
  return (
    <main className='container py-12'>
      <section className='mb-10'>
        <span className='inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground'>
          ● RedSea website
        </span>
        <h1 className='mt-4 text-3xl sm:text-5xl font-bold leading-tight'>
          Next.js + TypeScript + Tailwind
        </h1>
        <p className='mt-3 max-w-2xl text-lg/7 opacity-80'>
          Brand-new source created from scratch. Minimal dependencies.
        </p>
        <div className='mt-6 flex gap-3'>
          <button className='btn btn-primary'>Get Started</button>
          <button className='btn btn-ghost'>Docs</button>
        </div>
      </section>

      <section className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='card bg-base-100 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title'>Clean Pages Router</h2>
            <p>src/pages/* with traditional routing</p>
          </div>
        </div>
        <div className='card bg-base-100 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title'>Strict TypeScript</h2>
            <p>Configured TS for good DX</p>
          </div>
        </div>
        <div className='card bg-base-100 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title'>Tailwind Ready</h2>
            <p>Edit theme in tailwind.config.ts</p>
          </div>
        </div>
      </section>
    </main>
  )
}
