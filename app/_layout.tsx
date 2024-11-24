import { useLayoutRootView } from '@/hooks/useLayoutRootView';
import { initSplashScreen } from '@/shared/initSplashScreen';
import { Stacks } from '@/components/stack';
import { ContainerRoot } from './styles/child';

initSplashScreen({
  _duration: 3000,
  _fade: true
});

export default function RootLayout() {

  const onLayoutRootView = useLayoutRootView();

  return (
    <ContainerRoot onLayout={onLayoutRootView}>
      <Stacks />
    </ContainerRoot>
  )
}