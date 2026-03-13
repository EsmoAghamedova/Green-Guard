import { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuthStore } from '../../store/authStore'
import { Leaf, Eye, EyeOff } from 'lucide-react'

export function SignUp() {
  const navigate = useNavigate()
  const { signUp, loading, error, clearError } = useAuthStore()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [localError, setLocalError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLocalError(null)
    clearError()

    if (!formData.username.trim()) return setLocalError('Username required')
    if (formData.username.length < 3) return setLocalError('Username too short')
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return setLocalError('Invalid email')
    if (formData.password.length < 6) return setLocalError('Password too short')
    if (formData.password !== formData.confirmPassword) return setLocalError('Passwords do not match')

    try {
      await signUp(formData.email, formData.password, formData.username)
      navigate('/')
    } catch (err: any) {
      setLocalError(err.message || 'Failed to create account')
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
          <p className="text-muted-foreground">Join us in planting a greener future</p>
        </div>

        {/* Error */}
        {displayError && (
          <div className="mb-4 p-3 bg-destructive text-destructive-foreground rounded-lg text-sm border border-destructive">
            {displayError}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {['username', 'email', 'password', 'confirmPassword'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <div className={field.includes('password') ? 'relative' : ''}>
                <input
                  type={
                    field === 'password'
                      ? showPassword ? 'text' : 'password'
                      : field === 'confirmPassword'
                        ? showConfirmPassword ? 'text' : 'password'
                        : 'text'
                  }
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={field}
                  disabled={loading}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-input dark:bg-input-background focus:outline-none focus:ring-2 focus:ring-primary-foreground disabled:opacity-50 transition"
                />
                {field.includes('password') && (
                  <button
                    type="button"
                    onClick={() => field === 'password' ? setShowPassword(!showPassword) : setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-2.5 text-muted-foreground"
                  >
                    {field === 'password' ? showPassword ? <EyeOff size={20} /> : <Eye size={20} /> : showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                )}
              </div>
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary-foreground hover:text-primary transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center text-muted-foreground">
          <div className="flex-1 border-t border-border"></div>
          <span className="px-3 text-sm">Already have an account?</span>
          <div className="flex-1 border-t border-border"></div>
        </div>

        <Link
          to="/login"
          className="block w-full py-2 border border-primary text-primary font-bold rounded-lg text-center hover:bg-primary hover:text-primary-foreground transition"
        >
          Sign In Instead
        </Link>

        <p className="text-center text-xs text-muted-foreground mt-4">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}