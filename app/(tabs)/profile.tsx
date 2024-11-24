import { Button } from 'react-native';
import * as AuthSession from 'expo-auth-session'
import { supabase } from '@/shared/util/supabase';

export default function ProfileScreen() {

  const redirectUrl = AuthSession.makeRedirectUri();

  return (
    <>
      <Button title='테스트' onPress={async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: redirectUrl,
            queryParams: {
              access_type: 'offline',
              prompt: 'consent',
            }
          }
        })

        if (data) {
          console.error(data);
        }

      }} />
    </>
  );
}