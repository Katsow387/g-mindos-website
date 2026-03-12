import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sjnogjscqycbfcbpveif.supabase.co'
const supabaseKey = 'sb_publishable_xSIJ4q5xCKtYg0S6NgYhbA_sHsqTk_9'

export const supabase = createClient(supabaseUrl, supabaseKey)