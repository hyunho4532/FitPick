import SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react"

export function useLayoutRootView() {

    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        try {
            new Promise(resolve => setTimeout(resolve, 2000));
        } finally {
            setAppIsReady(true);
        }
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            SplashScreen.hide();
        }
    }, [appIsReady])

    return onLayoutRootView
}