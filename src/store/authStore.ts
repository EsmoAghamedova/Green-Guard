import { create } from 'zustand'
import * as authService from '../services/auth'

export interface User {
    id: string
    email: string
    username?: string
    avatar_url?: string
}

export interface AuthStore {
    user: User | null
    loading: boolean
    error: string | null

    // Actions
    signUp: (email: string, password: string, username: string) => Promise<void>
    signIn: (email: string, password: string) => Promise<void>
    signOut: () => Promise<void>
    getCurrentUser: () => Promise<void>
    updateProfile: (updates: { username?: string; avatar_url?: string }) => Promise<void>
    clearError: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    loading: false,
    error: null,

    signUp: async (email, password, username) => {
        set({ loading: true, error: null })
        try {
            await authService.signUp(email, password, username)
            const user = await authService.getCurrentUser()
            set({ user, loading: false })
        } catch (error: any) {
            set({ error: error.message, loading: false })
            throw error
        }
    },

    signIn: async (email, password) => {
        set({ loading: true, error: null })
        try {
            await authService.signIn(email, password)
            const user = await authService.getCurrentUser()
            set({ user, loading: false })
        } catch (error: any) {
            set({ error: error.message, loading: false })
            throw error
        }
    },

    signOut: async () => {
        set({ loading: true, error: null })
        try {
            await authService.signOut()
            set({ user: null, loading: false })
        } catch (error: any) {
            set({ error: error.message, loading: false })
            throw error
        }
    },

    getCurrentUser: async () => {
        set({ loading: true })
        try {
            const user = await authService.getCurrentUser()
            set({ user, loading: false })
        } catch (error: any) {
            set({ error: error.message, loading: false })
        }
    },

    updateProfile: async (updates) => {
        set({ loading: true, error: null })
        try {
            const user = useAuthStore.getState().user
            if (!user) throw new Error('No user logged in')

            await authService.updateUserProfile(user.id, updates)
            const updatedUser = await authService.getCurrentUser()
            set({ user: updatedUser, loading: false })
        } catch (error: any) {
            set({ error: error.message, loading: false })
            throw error
        }
    },

    clearError: () => set({ error: null }),
}))