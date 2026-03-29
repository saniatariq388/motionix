import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// In-memory storage for mock client
const mockData: Record<string, any[]> = {}

// Create a mock client if env vars are missing
if (!supabaseUrl || !supabaseKey) {
  console.warn("Supabase environment variables not set. Using mock client.")
}

export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : {
      from: (table: string) => ({
        select: () => ({
          eq: () => ({
            order: () => ({
              limit: () => Promise.resolve({ 
                data: (mockData[table] || []).map(item => ({ ...item })), 
                error: null 
              }),
            }),
          }),
          single: () => Promise.resolve({ 
            data: mockData[table]?.[0] || null, 
            error: null 
          }),
        }),
        update: (data: any) => ({
          eq: () => Promise.resolve({ error: null }),
        }),
        insert: (data: any) => {
          const id = Date.now().toString();
          const newItem = { id, ...data, created_at: new Date().toISOString() };
          if (!mockData[table]) mockData[table] = [];
          mockData[table].push(newItem);
          return Promise.resolve({ error: null });
        },
        eq: () => ({
          order: () => ({
            limit: () => Promise.resolve({ 
              data: (mockData[table] || []).map(item => ({ ...item })), 
              error: null 
            }),
          }),
        }),
        rpc: () => Promise.resolve({ error: null, data: null }),
      }),
    } as any
