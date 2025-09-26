import { useState } from 'react'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { MdEmail, MdLock, MdVisibility } from 'react-icons/md'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login:', { email, password, rememberMe })
  }

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic here
    console.log('Google sign in')
  }

  return (
    <div className='min-h-screen flex flex-col md:flex-row' data-theme='dark'>
      {/* Left side - Login form */}
      <div className='flex-1 flex items-center justify-center'>
        <div className='w-full max-w-md'>
          <div className='card'>
            <div className='card-body'>
              {/* Logo */}
              <div className='text-center mb-6'>
                <div className='flex justify-center mb-4'>
                  <Image
                    src='/logo.svg'
                    alt='RedSea Logo'
                    width={60}
                    height={60}
                    className='text-primary'
                  />
                </div>
                <h1 className='text-2xl font-bold'>Welcome to RedSea</h1>
                <p className='text-base-content/70 text-sm mt-2'>
                  No account?{' '}
                  <Link
                    href='/register'
                    className='cursor-pointer hover:underline'
                  >
                    Sign up
                  </Link>
                </p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-4'>
                {/* Google Sign In Button */}
                <button
                  type='button'
                  onClick={handleGoogleSignIn}
                  className='btn btn-outline w-full'
                >
                  <Image
                    src='/icons/gmail.svg'
                    alt='Gmail Icon'
                    width={24}
                    height={24}
                    className='mr-1'
                  />
                  Sign in with Gmail
                </button>

                {/* Divider */}
                <div className='divider'>Or</div>

                {/* Email Input */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <div className='relative'>
                    <MdEmail className='w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 pointer-events-none z-10' />
                    <input
                      type='email'
                      placeholder='Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='input input-bordered w-full pl-10'
                      autoComplete='new-password'
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <div className='relative'>
                    <MdLock className='w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 pointer-events-none z-10' />
                    <input
                      type='password'
                      placeholder='Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='input input-bordered w-full pl-10 pr-10'
                      autoComplete='new-password'
                      required
                    />
                    <button
                      type='button'
                      className='absolute right-3 top-1/2 -translate-y-1/2 z-10'
                    >
                      <MdVisibility className='w-5 h-5 text-base-content/50 hover:text-base-content' />
                    </button>
                  </div>
                </div>

                {/* Remember me and Forgot password */}
                <div className='flex items-center justify-between'>
                  <label className='label cursor-pointer'>
                    <input
                      type='checkbox'
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className='checkbox checkbox-sm'
                    />
                    <span className='label-text'>Remember me</span>
                  </label>
                  <a href='#' className='text-sm'>
                    Forgot Password?
                  </a>
                </div>

                {/* Login Button */}
                <button type='submit' className='btn btn-[#1E90FF] w-full'>
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className='hidden md:flex flex-1 relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 min-h-[300px] md:min-h-0'>
        <Image
          src='/images/login.png'
          alt='Login illustration'
          fill
          className='object-cover'
          priority
        />
      </div>
    </div>
  )
}
