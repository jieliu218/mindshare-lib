import { HeroUIProvider } from '@heroui/react';
import ReactQueryProvider from '../components/ReactQueryProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <HeroUIProvider>{children}</HeroUIProvider>
    </ReactQueryProvider>
  );
}
