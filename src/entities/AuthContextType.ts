import { User } from "@supabase/supabase-js";

export type AuthContextType = {
    user: User | null;
    loading: boolean;
    singIn: (email: string, password: string )=> Promise<void>;
    singOut: ()=> Promise<void>;

}