import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qeaktliqcihldbmflsdp.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ljW0lBHCRK0YUXtut4s3SA_nxiaxmGD';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);