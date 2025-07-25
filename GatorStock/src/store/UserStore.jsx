import { create } from "zustand";
import { supabase } from "../index";
import {InsertUser} from "../supabase/crudUsers"

export const useUserStore = create((set, get) => ({
    InsertAdminUser: async (p) => {
        const { data, error } = await supabase.auth.signUp({
            email: p.correo,
            password: p.pass,
        });
        console.log('data del registro del  usuario', data)

        if (error) return null;

        const datauser = await InsertUser({
            id_auth: data.user.id,
            register_date: new Date(),
            user_type: "admin",
        });
        return datauser;
    },
}))
