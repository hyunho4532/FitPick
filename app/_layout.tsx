import { View } from 'react-native';
import { Stack } from 'expo-router';
import { useLayoutRootView } from '@/hooks/useLayoutRootView';
import { initSplashScreen } from '@/shared/initSplashScreen';
import { Stacks } from '@/components/stack';

initSplashScreen({
  _duration: 3000,
  _fade: true
});

export default function RootLayout() {

  const onLayoutRootView = useLayoutRootView();

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stacks />
    </View>
  );
}
