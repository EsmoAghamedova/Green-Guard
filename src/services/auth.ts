import { supabase } from '../services/supabase'

export interface User {
    id: string
    email: string
    username?: string
    avatar_url?: string
}

// Sign Up
export async function signUp(
    email: string,
    password: string,
    username: string
) {
    try {
        // Create user in Supabase Auth
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username,
                },
            },
        })

        if (authError) throw authError

        // Create user profile in database
        if (authData.user) {
            const { error: profileError } = await supabase
                .from('users')
                .insert([
                    {
                        id: authData.user.id,
                        email,
                        username,
                    },
                ])

            if (profileError) throw profileError
        }

        return authData
    } catch (error) {
        console.error('Sign up error:', error)
        throw error
    }
}

// Sign In
export async function signIn(email: string, password: string) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) throw error
        return data
    } catch (error) {
        console.error('Sign in error:', error)
        throw error
    }
}

// Sign Out
export async function signOut() {
    try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
    } catch (error) {
        console.error('Sign out error:', error)
        throw error
    }
}

// Get Current User
export async function getCurrentUser(): Promise<User | null> {
    try {
        const { data, error } = await supabase.auth.getUser()
        if (error) throw error

        if (data.user) {
            // Fetch user profile from database
            const { data: profile, error: profileError } = await supabase
                .from('users')
                .select('*')
                .eq('id', data.user.id)
                .single()

            if (profileError && profileError.code !== 'PGRST116') throw profileError

            return {
                id: data.user.id,
                email: data.user.email || '',
                username: profile?.username,
                avatar_url: profile?.avatar_url,
            }
        }

        return null
    } catch (error) {
        console.error('Get user error:', error)
        return null
    }
}

// Update User Profile
export async function updateUserProfile(
    userId: string,
    updates: { username?: string; avatar_url?: string }
) {
    try {
        const { data, error } = await supabase
            .from('users')
            .update(updates)
            .eq('id', userId)
            .select()

        if (error) throw error
        return data
    } catch (error) {
        console.error('Update profile error:', error)
        throw error
    }
}