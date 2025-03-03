import React from 'react';
import { AdvancedInput } from './components/AdvancedInput';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Formula Input</h1>
      <AdvancedInput />
    </QueryClientProvider>
  );
};

export default App;
