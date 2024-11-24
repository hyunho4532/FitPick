import { supabase } from '@/shared/util/supabase';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'

export default function ProfileScreen() {

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: '770007854771-3tmu39bss76v84g3i04vs2k0erd27jkf.apps.googleusercontent.com'
  })

  return (
    <>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={async () => {
          try {
            await GoogleSignin.hasPlayServices()

            const userInfo = await GoogleSignin.signIn()
            if (userInfo.data?.idToken) {
              const { data, error } = await supabase.auth.signInWithIdToken({
                provider: 'google',
                token: userInfo.data.idToken
              })

              console.log(error, data);
            } else {
              throw new Error('no ID token present!')
            }
          } catch (error: any) {
            
          }
        }}
      />
    </>
  );
}