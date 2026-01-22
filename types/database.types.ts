// Database types based on your Supabase schema

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_name: string | null
          full_name: string | null
          created_at: string
          updated_at: string
          email: string | null
          bio: string | null
        }
        Insert: {
          id: string
          user_name?: string | null
          full_name?: string | null
          created_at?: string
          updated_at?: string
          email?: string | null
          bio?: string | null
        }
        Update: {
          id?: string
          user_name?: string | null
          full_name?: string | null
          created_at?: string
          updated_at?: string
          email?: string | null
          bio?: string | null
        }
      }
      recipes: {
        Row: {
          id: string
          created_at: string
          user_id: string | null
          title: string
          ingredients: string[]
          instructions: string[]
          cooking_time: number | null
          difficulty: string | null
          category: string | null
          description: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          user_id?: string | null
          title: string
          ingredients?: string[]
          instructions?: string[]
          cooking_time?: number | null
          difficulty?: string | null
          category?: string | null
          description?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string | null
          title?: string
          ingredients?: string[]
          instructions?: string[]
          cooking_time?: number | null
          difficulty?: string | null
          category?: string | null
          description?: string | null
        }
      }
    }
  }
}

// Convenience types
export type Profile = Database['public']['Tables']['profiles']['Row']
export type Recipe = Database['public']['Tables']['recipes']['Row']
export type RecipeInsert = Database['public']['Tables']['recipes']['Insert']
export type RecipeUpdate = Database['public']['Tables']['recipes']['Update']
