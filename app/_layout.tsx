import { View } from 'react-native';
import { Stack } from 'expo-router';
import { useLayoutRootView } from '@/hooks/useLayoutRootView';
import { initSplashScreen } from '@/shared/initSplashScreen';

initSplashScreen({
  _duration: 3000,
  _fade: true
});

export default function RootLayout() {

  const onLayoutRootView = useLayoutRootView();

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}  />
        <Stack.Screen name="+not-found" />
      </Stack>
    </View>
  );
}
