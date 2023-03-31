<script>
    import { setContext } from 'svelte';
    import { myContextKey } from '../../keys.js';
    import DataGrandChildContext from './DataGrandChildContext.svelte'
    export let person = {}
    const {name, url, uid} = person
    setContext(myContextKey, {
        getURL: () => url
    });
</script>
<p>{name}</p>
<DataGrandChildContext></DataGrandChildContext>  
