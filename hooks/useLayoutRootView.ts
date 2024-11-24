import { SplashScreen } from "expo-router";
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

    const onLayoutRootView = useCallback(() => {
        if (appIsReady) {
            SplashScreen.hide();
        }
    }, [appIsReady])

    return onLayoutRootView
}