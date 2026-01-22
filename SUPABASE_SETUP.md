# Supabase Setup Guide

## ✅ Completed Steps

1. ✅ Installed Supabase dependencies (`@supabase/supabase-js` and `@supabase/ssr`)
2. ✅ Created TypeScript database types (`types/database.types.ts`)
3. ✅ Set up Supabase client utilities:
   - `lib/supabase/client.ts` - Browser client
   - `lib/supabase/server.ts` - Server client
4. ✅ Created middleware for session management (`middleware.ts`)

## 🔧 Next Steps: Configure Environment Variables

You need to add your Supabase credentials to a `.env.local` file:

1. **Get your Supabase credentials:**
   - Go to your Supabase project: https://app.supabase.com
   - Navigate to **Settings** → **API**
   - Copy your **Project URL** and **anon/public key**

2. **Create `.env.local` file** in the root directory:
   ```bash
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your-project-url-here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

3. **Replace the placeholder values** with your actual credentials

## 📁 Project Structure

```
├── lib/
│   └── supabase/
│       ├── client.ts      # Browser client (use in Client Components)
│       └── server.ts      # Server client (use in Server Components/Actions)
├── types/
│   └── database.types.ts  # TypeScript types for your database
└── middleware.ts          # Handles auth session refresh
```

## 🚀 Usage Examples

### In Server Components:
```typescript
import { createClient } from '@/lib/supabase/server'

export default async function Page() {
  const supabase = await createClient()
  const { data } = await supabase.from('recipes').select('*')
  // ...
}
```

### In Client Components:
```typescript
'use client'
import { createClient } from '@/lib/supabase/client'

export default function Component() {
  const supabase = createClient()
  // ...
}
```

### Get Current User:
```typescript
const supabase = await createClient()
const { data: { user } } = await supabase.auth.getUser()
```

## 🔐 Database Schema Reference

Based on your Supabase tables:

**profiles:**
- `id` (uuid, PK, FK to auth.users)
- `user_name` (text, unique)
- `full_name` (text)
- `email` (text)
- `bio` (text)
- `created_at` (timestamptz)
- `updated_at` (timestamptz)

**recipes:**
- `id` (uuid, PK)
- `created_at` (timestamptz)
- `user_id` (uuid, FK to profiles)
- `title` (text)
- `description` (text)
- `ingredients` (text[])
- `instructions` (text[])
- `cooking_time` (integer)
- `difficulty` (text)
- `category` (text)

## ✅ Verification

After adding your `.env.local` file, test the connection:

1. Restart your dev server: `npm run dev`
2. Check the browser console for any connection errors
3. Try accessing Supabase in a component to verify it works

---

**Next:** Once environment variables are set, we can start building authentication flows and recipe CRUD operations!
