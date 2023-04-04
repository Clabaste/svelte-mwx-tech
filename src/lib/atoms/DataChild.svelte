<script>
    import DataGrandChild from './DataGrandChild.svelte'
    export let person = {}
    const {name, url, uid} = person
</script>
<p>{name}</p>
<DataGrandChild {url}></DataGrandChild>  
