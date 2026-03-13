import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuthStore } from '../../store/authStore'
import { Leaf, Eye, EyeOff } from 'lucide-react'

export function Login() {
  const navigate = useNavigate()
  const { signIn, loading, error, clearError, user } = useAuthStore()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [localError, setLocalError] = useState<string | null>(null)
  const [rememberMe, setRememberMe] = useState(false)

  useEffect(() => {
    if (user) navigate('/')
  }, [user, navigate])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLocalError(null)
    clearError()

    if (!email.trim()) return setLocalError('Email is required')
    if (!password.trim()) return setLocalError('Password is required')

    try {
      await signIn(email, password)
      if (rememberMe) localStorage.setItem('rememberEmail', email)
      navigate('/')
    } catch (err: any) {
      setLocalError(err.message || 'Failed to sign in')
    }
  }

  const displayError = localError || error

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground flex items-center justify-center p-4">
      <div className="bg-card dark:bg-card-foreground rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <Leaf className="w-10 h-10 text-primary-foreground mr-2" />
            <h1 className="text-4xl font-bold text-primary-foreground">TreeApp</h1>
          </div>
          <p className="text-muted-foreground">Welcome back, eco-warrior!</p>
        </div>

        {/* Error */}
        {displayError && (
          <div className="mb-4 p-3 bg-destructive text-destructive-foreground rounded-lg text-sm border border-destructive">
            {displayError}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={loading}
              className="w-full px-4 py-2 border border-border rounded-lg bg-input dark:bg-input-background focus:outline-none focus:ring-2 focus:ring-primary-foreground disabled:opacity-50 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                disabled={loading}
                className="w-full px-4 py-2 border border-border rounded-lg bg-input dark:bg-input-background focus:outline-none focus:ring-2 focus:ring-primary-foreground disabled:opacity-50 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-muted-foreground"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-primary rounded focus:ring-primary-foreground"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-muted-foreground">
              Remember me
            </label>
            <a href="#" className="ml-auto text-sm text-primary-foreground hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary-foreground hover:text-primary transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center text-muted-foreground">
          <div className="flex-1 border-t border-border" />
          <span className="px-3 text-sm">New here?</span>
          <div className="flex-1 border-t border-border" />
        </div>

        {/* Sign up link */}
        <Link
          to="/signup"
          className="block w-full py-2 border border-primary text-primary font-bold rounded-lg text-center hover:bg-primary hover:text-primary-foreground transition"
        >
          Create Account
        </Link>
      </div>
    </div>
  )
}