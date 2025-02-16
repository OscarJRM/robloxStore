import { createContext, useEffect, useState } from "react";
import { AuthContextType } from "../entities/AuthContextType";
import { User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: {children: React.ReactNode}){
    const [user, setUser] = useState<User |null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        supabase.auth.getSession().then(({data:{session}})=>{
        setUser(session?.user ?? null);
        setLoading(false);
        })
    })



}