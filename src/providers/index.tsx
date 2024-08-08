'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NextAdapterApp from 'next-query-params/app';
import { RecoilRoot } from 'recoil';
import { QueryParamProvider } from 'use-query-params';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <QueryParamProvider adapter={NextAdapterApp}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </QueryParamProvider>
    </RecoilRoot>
  );
};
