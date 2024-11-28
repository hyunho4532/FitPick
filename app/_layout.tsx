import { ContainerRoot } from './styles/child';
import { useLayoutRootView } from '@/hooks/useLayoutRootView';
import { initSplashScreen } from '@/shared/initSplashScreen';
import { Stack } from 'expo-router';

initSplashScreen({
  _duration: 3000,
  _fade: true
});

export default function RootLayout() {

  const onLayoutRootView = useLayoutRootView();

  return (
    <ContainerRoot onLayout={onLayoutRootView}>
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="_pages/login/[oauth]" />
            <Stack.Screen name="+not-found" />
        </Stack>
    </ContainerRoot>
  )
}