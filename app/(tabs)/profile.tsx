import {
  GoogleSignin
} from '@react-native-google-signin/google-signin'

export default function ProfileScreen() {

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: '770007854771-3tmu39bss76v84g3i04vs2k0erd27jkf.apps.googleusercontent.com'
  })

  return (
    <>

    </>
  );
}