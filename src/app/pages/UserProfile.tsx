// 

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuthStore } from '../../store/authStore'
import { User, Mail, LogOut, Upload } from 'lucide-react'

export function UserProfile() {
  const navigate = useNavigate()
  const { user, loading, signOut, updateProfile } = useAuthStore()
  const [isEditing, setIsEditing] = useState(false)
  const [username, setUsername] = useState(user?.username || '')
  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  const handleUpdateProfile = async () => {
    if (!username.trim()) return

    setUpdating(true)
    try {
      await updateProfile({ username })
      setIsEditing(false)
    } catch (error) {
      console.error('Update error:', error)
    } finally {
      setUpdating(false)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-8">👤 My Profile</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          {/* Profile Header */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{user.username || 'User'}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>

          {/* User Info */}
          <div className="border-t pt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              {isEditing ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="flex-1 px-4 py-2 border-2 border-green-300 rounded-lg focus:outline-none focus:border-green-600"
                  />
                  <button
                    onClick={handleUpdateProfile}
                    disabled={updating}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false)
                      setUsername(user.username || '')
                    }}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <p className="text-gray-800">{user.username || 'Not set'}</p>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-green-600 hover:underline"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-500" />
                <p className="text-gray-800">{user.email}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User ID
              </label>
              <p className="text-gray-600 text-sm font-mono">{user.id}</p>
            </div>
          </div>

          {/* Sign Out Button */}
          <div className="border-t pt-6">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition"
            >
              <LogOut size={20} />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}