import { useState, useEffect } from 'react'
import Image from 'next/image'
import { MdPerson, MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { authService } from '@/services'
import { useAuthStore } from '@/stores'
import type { ApiError } from '@/lib/api'
import toast from 'react-hot-toast'

// Validation schema
const loginSchema = Yup.object({
  username: Yup.string()
    .min(3, 'User Name must be at least 3 characters')
    .max(50, 'User Name must be less than 50 characters')
    .matches(
      /^[a-zA-Z0-9_]+$/,
      'User Name can only contain letters, numbers, and underscores'
    )
    .required('User Name is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
})

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const { isLoading, setLoading, isAuthenticated } = useAuthStore()

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && authService.isAuthenticated()) {
      router.replace('/')
    }
  }, [isAuthenticated, router])

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      rememberMe: false
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true)

      try {
        const response = await authService.login({
          user_id: values.username,
          password: values.password
        })

        if (response.success) {
          toast.success('Login successful!')
          const redirectTo = (router.query.redirect as string) || '/'
          router.push(redirectTo)
        } else {
          toast.error(response.message || 'Login failed')
        }
      } catch (error: any) {
        console.log('🚀 ~ LoginPage ~ error:', error)
        const apiError = error as ApiError
        toast.error(apiError.message || 'An unexpected error occurred')
      } finally {
        setLoading(false)
      }
    }
  })

  const handleGoogleSignIn = () => {
    // TODO: Implement Google OAuth integration
    console.log('Google sign in - not implemented yet')
  }

  // Show loading state
  if (isLoading) {
    return (
      <div
        className='min-h-screen flex items-center justify-center'
        data-theme='dark'
      >
        <div className='flex flex-col items-center gap-4'>
          <span className='loading loading-spinner loading-lg'></span>
          <p className='text-base-content/70'>Loading...</p>
        </div>
      </div>
    )
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

              <form onSubmit={formik.handleSubmit} className='space-y-4'>
                {/* Google Sign In Button */}
                <button
                  type='button'
                  onClick={handleGoogleSignIn}
                  className='btn btn-outline w-full'
                  disabled={isLoading}
                >
                  <FcGoogle className='w-5 h-5' />
                  Sign in with Gmail
                </button>

                {/* Divider */}
                <div className='divider'>Or</div>

                {/* User Name Input */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>User Name</span>
                  </label>
                  <div className='relative'>
                    <MdPerson className='w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 pointer-events-none z-10' />
                    <input
                      type='text'
                      name='username'
                      placeholder='User Name'
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`input input-bordered w-full pl-10 ${
                        formik.touched.username && formik.errors.username
                          ? 'input-error'
                          : ''
                      }`}
                    />
                  </div>
                  {formik.touched.username && formik.errors.username && (
                    <div className='label'>
                      <span className='label-text-alt text-error'>
                        {formik.errors.username}
                      </span>
                    </div>
                  )}
                </div>

                {/* Password Input */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <div className='relative'>
                    <MdLock className='w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 pointer-events-none z-10' />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name='password'
                      placeholder='Password'
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`input input-bordered w-full pl-10 pr-10 ${
                        formik.touched.password && formik.errors.password
                          ? 'input-error'
                          : ''
                      }`}
                      autoComplete='off'
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute right-3 top-1/2 -translate-y-1/2 z-10 hover:scale-110 transition-transform'
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <MdVisibilityOff className='w-5 h-5 text-base-content/50 hover:text-base-content' />
                      ) : (
                        <MdVisibility className='w-5 h-5 text-base-content/50 hover:text-base-content' />
                      )}
                    </button>
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <div className='label'>
                      <span className='label-text-alt text-error'>
                        {formik.errors.password}
                      </span>
                    </div>
                  )}
                </div>

                {/* Remember me and Forgot password */}
                <div className='flex items-center justify-between'>
                  <label className='label cursor-pointer'>
                    <input
                      type='checkbox'
                      name='rememberMe'
                      checked={formik.values.rememberMe}
                      onChange={formik.handleChange}
                      className='checkbox checkbox-sm'
                    />
                    <span className='label-text'>Remember me</span>
                  </label>
                  <a href='#' className='link link-primary text-sm'>
                    Forgot Password?
                  </a>
                </div>

                {/* Login Button */}
                <button
                  type='submit'
                  className='btn btn-primary w-full'
                  disabled={isLoading || !formik.isValid || !formik.dirty}
                >
                  {isLoading ? (
                    <>
                      <span className='loading loading-spinner loading-sm'></span>
                      Logging in...
                    </>
                  ) : (
                    'Log in'
                  )}
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
