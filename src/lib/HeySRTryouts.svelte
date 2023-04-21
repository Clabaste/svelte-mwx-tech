<script>

    //App.svelte
 
    import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query'
 
    import SvelteQueryChild from './atoms/SvelteQueryChild.svelte'
 
  import Table from './atoms/Table.svelte'
  import TableSortable from './atoms/TableSortable.svelte'
 
    // Create a client
 
    const queryClient = new QueryClient()
 
  
 
  </script>
 <h2 data-anker="Table">Table</h2>
 <TableSortable></TableSortable>
 <Table></Table> 
  
 <h2 data-anker="Svelte Query">Svelte Query</h2>
  <QueryClientProvider client={queryClient}>
 
    <SvelteQueryChild />
 
  </QueryClientProvider>

  