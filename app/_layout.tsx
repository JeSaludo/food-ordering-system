import { useEffect, useState } from 'react';
import '../global.css';

import { Stack } from 'expo-router';
import { supabase } from '~/utils/supabase';
import { Session } from '@supabase/supabase-js';
import { View, Text, SafeAreaView } from 'react-native';
import Auth from '~/components/Auth';
import Tabs from '~/components/Tabs';


export default function RootLayout() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (     
     <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
     </Stack>
  )
}
