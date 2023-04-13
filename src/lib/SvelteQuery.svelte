<script>

    //App.svelte
 
    import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query'
 
    import SvelteQueryChild from './atoms/SvelteQueryChild.svelte'
 
  
 
    // Create a client
 
    const queryClient = new QueryClient()
 
  
 
  </script>
 
  
 
  <QueryClientProvider client={queryClient}>
 
    <SvelteQueryChild />
 
  </QueryClientProvider>