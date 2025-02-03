import { Database } from '../../types/supabase';

export type Tables = Database['public']['Tables'];
export type User = Tables['users']['Row'];
export type Profile = Tables['profiles']['Row'];
export type Problem = Tables['problems']['Row']; 