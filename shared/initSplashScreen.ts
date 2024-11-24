import SplashScreen from "expo-splash-screen"

type Props = {
    _duration: number,
    _fade: boolean
}

export async function initSplashScreen({ _duration, _fade }: Props) {
    await SplashScreen.preventAutoHideAsync();

    SplashScreen.setOptions({
        duration: _duration,
        fade: _fade
    })
}