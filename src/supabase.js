import {createClient} from "@supabase/supabase-js"

const supabaseUrl = "https://cmrpfbjggzfoaffgqlsg.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtcnBmYmpnZ3pmb2FmZmdxbHNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzODk2NDUsImV4cCI6MjAwMTk2NTY0NX0.5D7ePQz95jTsQvkQUn_FK79rpOq5Q2M1668CdHS2qQw"

 export const supabase = createClient(supabaseUrl,supabaseKey)