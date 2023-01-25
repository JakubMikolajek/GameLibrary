import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-url-polyfill/auto"
import {createClient} from "@supabase/supabase-js";


export const client = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});