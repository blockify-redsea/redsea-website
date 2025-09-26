import { useState } from 'react'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { MdEmail, MdLock, MdVisibility, MdPerson } from 'react-icons/md'
import Link from 'next/link'

export default function RegisterPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle register logic here
    console.log('Register:', { username, email, password, agreeToTerms })
  }

  const handleGoogleSignUp = () => {
    // Handle Google sign up logic here
    console.log('Google sign up')
  }

  return (
    <div className='min-h-screen flex flex-col md:flex-row' data-theme='dark'>
      {/* Left side - Register form */}
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
                <h1 className='text-2xl font-bold'>Create an account</h1>
                <p className='text-base-content/70 text-sm mt-2'>
                  Already have an account?{' '}
                  <Link
                    href='/login'
                    className='cursor-pointer hover:underline'
                  >
                    Log in
                  </Link>
                </p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-4'>
                {/* Google Sign Up Button */}
                <button
                  type='button'
                  onClick={handleGoogleSignUp}
                  className='btn btn-outline w-full'
                >
                  <Image
                    src='/icons/gmail.svg'
                    alt='Gmail Icon'
                    width={24}
                    height={24}
                    className='mr-1'
                  />
                  Sign up with Gmail
                </button>

                {/* Divider */}
                <div className='divider'>Or</div>

                {/* Username Input */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>User name</span>
                  </label>
                  <div className='relative'>
                    <MdPerson className='w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 pointer-events-none z-10' />
                    <input
                      type='text'
                      placeholder='User name'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className='input input-bordered w-full pl-10'
                      autoComplete='new-password'
                      required
                    />
                  </div>
                </div>

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

                {/* Terms of Service Agreement */}
                <div className='flex items-start gap-3'>
                  <input
                    type='checkbox'
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className='checkbox checkbox-sm mt-1 flex-shrink-0'
                    required
                  />
                  <span className='label-text text-sm leading-relaxed'>
                    I agree to RedSea's{' '}
                    <a href='#' className='link link-primary'>
                      Terms of Service
                    </a>
                  </span>
                </div>

                {/* Register Button */}
                <button
                  type='submit'
                  className='btn btn-primary w-full'
                  disabled={!agreeToTerms}
                >
                  Create an account
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
          alt='Register illustration'
          fill
          className='object-cover'
          priority
        />
      </div>
    </div>
  )
}
