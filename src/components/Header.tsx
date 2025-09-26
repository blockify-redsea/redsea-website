import Image from 'next/image'
import { MdPerson, MdLanguage } from 'react-icons/md'

interface HeaderProps {
  className?: string
}

export default function Header({ className = '' }: HeaderProps) {
  const handleUserClick = () => {
    // TODO: Implement user menu dropdown
    console.log('User menu clicked')
  }

  const handleLanguageClick = () => {
    // TODO: Implement language switcher
    console.log('Language switcher clicked')
  }

  return (
    <header
      className={`bg-base-100 border-b border-base-300 ${className}`}
      style={{
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '48px',
        paddingRight: '48px'
      }}
    >
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center'>
          <Image
            src='/logo.svg'
            alt='RedSea Logo'
            width={40}
            height={40}
            className='text-primary'
          />
        </div>

        {/* Right side icons */}
        <div className='flex items-center gap-4'>
          {/* Language Icon */}
          <button
            onClick={handleLanguageClick}
            className='btn btn-ghost btn-sm btn-circle hover:bg-base-200'
            title='Change Language'
          >
            <MdLanguage className='w-5 h-5' />
          </button>

          {/* User Icon */}
          <button
            onClick={handleUserClick}
            className='btn btn-ghost btn-sm btn-circle hover:bg-base-200'
            title='User Menu'
          >
            <MdPerson className='w-5 h-5' />
          </button>
        </div>
      </div>
    </header>
  )
}
