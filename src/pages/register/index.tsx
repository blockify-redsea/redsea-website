import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import {
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
  MdPerson
} from 'react-icons/md'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { authService } from '@/services'
import { useAuthStore } from '@/stores'
import type { ApiError } from '@/lib/api'

// Validation schema
const registerSchema = Yup.object({
  userName: Yup.string()
    .min(3, 'User Name must be at least 3 characters')
    .max(50, 'User Name must be less than 50 characters')
    .matches(
      /^[a-zA-Z0-9_]+$/,
      'User Name can only contain letters, numbers, and underscores'
    )
    .required('User Name is required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .required('Password is required'),
  agreeToTerms: Yup.boolean()
    .oneOf([true], 'You must agree to the Terms of Service')
    .required('You must agree to the Terms of Service')
})

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
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
      userName: '',
      email: '',
      password: '',
      agreeToTerms: false
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      setLoading(true)
      setError(null)
      setSuccess(null)

      try {
        const response = await authService.register({
          user_id: values.userName,
          email: values.email,
          password: values.password
        })

        if (response.success) {
          setSuccess('Account created successfully! Redirecting to login...')
          // Redirect to login page after 2 seconds
          setTimeout(() => {
            router.push('/login')
          }, 2000)
        } else {
          setError(response.message || 'Registration failed')
        }
      } catch (error: any) {
        const apiError = error as ApiError
        setError(apiError.message || 'An unexpected error occurred')
      } finally {
        setLoading(false)
      }
    }
  })

  const handleGoogleSignUp = () => {
    // TODO: Implement Google OAuth integration
    console.log('Google sign up - not implemented yet')
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

              <form onSubmit={formik.handleSubmit} className='space-y-4'>
                {/* Error Message */}
                {error && (
                  <div className='alert alert-error'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='stroke-current shrink-0 h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <span>{error}</span>
                  </div>
                )}

                {/* Success Message */}
                {success && (
                  <div className='alert alert-success'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='stroke-current shrink-0 h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <span>{success}</span>
                  </div>
                )}

                {/* Google Sign Up Button */}
                <button
                  type='button'
                  onClick={handleGoogleSignUp}
                  className='btn btn-outline w-full'
                  disabled={isLoading}
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

                {/* User Name Input */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>User Name</span>
                  </label>
                  <div className='relative'>
                    <MdPerson className='w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 pointer-events-none z-10' />
                    <input
                      type='text'
                      name='userName'
                      placeholder='User Name'
                      value={formik.values.userName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`input input-bordered w-full pl-10 ${
                        formik.touched.userName && formik.errors.userName
                          ? 'input-error'
                          : ''
                      }`}
                      autoComplete='new-password'
                      autoCorrect='off'
                      autoCapitalize='off'
                      spellCheck='false'
                    />
                  </div>
                  {formik.touched.userName && formik.errors.userName && (
                    <div className='label'>
                      <span className='label-text-alt text-error'>
                        {formik.errors.userName}
                      </span>
                    </div>
                  )}
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
                      name='email'
                      placeholder='Email'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`input input-bordered w-full pl-10 ${
                        formik.touched.email && formik.errors.email
                          ? 'input-error'
                          : ''
                      }`}
                      autoComplete='new-password'
                      autoCorrect='off'
                      autoCapitalize='off'
                      spellCheck='false'
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <div className='label'>
                      <span className='label-text-alt text-error'>
                        {formik.errors.email}
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
                      autoComplete='new-password'
                      autoCorrect='off'
                      autoCapitalize='off'
                      spellCheck='false'
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

                {/* Terms of Service Agreement */}
                <div className='form-control'>
                  <div className='flex items-start gap-3'>
                    <input
                      type='checkbox'
                      name='agreeToTerms'
                      checked={formik.values.agreeToTerms}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`checkbox checkbox-sm mt-1 flex-shrink-0 ${
                        formik.touched.agreeToTerms &&
                        formik.errors.agreeToTerms
                          ? 'checkbox-error'
                          : ''
                      }`}
                    />
                    <span className='label-text text-sm leading-relaxed'>
                      I agree to RedSea's{' '}
                      <a href='#' className='link link-primary'>
                        Terms of Service
                      </a>
                    </span>
                  </div>
                  {formik.touched.agreeToTerms &&
                    formik.errors.agreeToTerms && (
                      <div className='label'>
                        <span className='label-text-alt text-error'>
                          {formik.errors.agreeToTerms}
                        </span>
                      </div>
                    )}
                </div>

                {/* Register Button */}
                <button
                  type='submit'
                  className='btn btn-primary w-full'
                  disabled={isLoading || !formik.isValid || !formik.dirty}
                >
                  {isLoading ? (
                    <>
                      <span className='loading loading-spinner loading-sm'></span>
                      Creating account...
                    </>
                  ) : (
                    'Create an account'
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
          alt='Register illustration'
          fill
          className='object-cover'
          priority
        />
      </div>
    </div>
  )
}
