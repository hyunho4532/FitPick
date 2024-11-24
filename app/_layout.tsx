import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { useLayoutRootView } from '@/hooks/useLayoutRootView';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
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
