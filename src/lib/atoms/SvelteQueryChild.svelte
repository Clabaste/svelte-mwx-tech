<script>

    // Todos.svelte
 
    import { useQuery, useMutation, useQueryClient } from '@sveltestack/svelte-query'
    import { getTodos, postTodo, getUrls } from '../../actions/my-api'
    
    

 
    const queryClient = useQueryClient()
    const queryResult = useQuery('todos', getTodos)
    
    let disabledAll = false

    
    // Mutations
 
    const mutation = useMutation(postTodo, {
        onMutate:() => {
            disabledAll = true
        },
      onSuccess: async() => {
        // Invalidate and refetch
        
        await queryClient.invalidateQueries('todos')
        disabledAll = false
      },
 
    })
    let completedTodo = []
    let notCompletedTodo = []
    
    $: if($queryResult.isSuccess) {
        completedTodo = $queryResult.data.filter((item) => {
            if(item.completed){
                return item
            }
        })
        notCompletedTodo = $queryResult.data.filter((item) => {
            if(!item.completed){
                return item
            }
        })
    }
  </script>
   <!-- <pre>
    {JSON.stringify($queryResult, null, 2)}
</pre> -->

{#if $queryResult.isSuccess}
<div class="flex">
    <ul>
        
        {#each notCompletedTodo as {todo, id, completed} (id)}
    
          <li>
            <label for={id}>
            <input 
            id={id}
            disabled={disabledAll}
            type="checkbox" 
            on:change={(e) => {
                $mutation.mutate({
                    id,
                    todo,
                    completed: e.target.checked
                })
            }} 
            checked={completed}>
            {todo} ({id})</label></li>
    
        {/each}
        
      </ul>
<ul>
    
    {#each completedTodo as {todo, id, completed}  (id)}

      <li>
        <label for={id}>
        <input 
            id={id}
            disabled={disabledAll}
            on:change={(e) => {
            $mutation.mutate({
                id,
                todo,
                completed: e.target.checked
            })
        }} 
            type="checkbox" 
            checked={completed}>
        {todo} ({id})</label></li>

    {/each}
    
  </ul>
</div>
{/if}