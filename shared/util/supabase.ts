import AsyncStorage from "@react-native-async-storage/async-storage"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://pqgmeahuxkrrdimlovrl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxZ21lYWh1eGtycmRpbWxvdnJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0MjYyMTksImV4cCI6MjA0ODAwMjIxOX0.g9ese4efTl_2rVJC6tb6ljXmfdHVAsj3wzvlrfzc6WY'

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false
    }
})