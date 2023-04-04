<script>
    import {dataStore} from '../stores/data'
    import Ankerlinks from "./navis/Ankerlinks.svelte";
    import InputField from "./forms/InputField.svelte";
    
    const changeDataInStore = async() => { 
        const res = await fetch('https://www.swapi.tech/api/people?page=5&limit=3');
        const {message, results, error} = await res.json();
        if (message==='ok') {
            dataStore.update((data) => {
            return [
                    ...data,
                    ...results
                ]
            })
        } else {
            throw new Error(error);
        }
    }
</script>
<Ankerlinks></Ankerlinks>

<h2 data-anker="Writable Store">Writable Store</h2>
    <h3>Storedaten werden auf der Seite "Data" initial befüllt</h3>
    <pre>{JSON.stringify($dataStore, null, 2)}</pre>
    {#if $dataStore.length > 0}
    <InputField bind:value={$dataStore[0].name} labelName="Ändere den Namen des ersten Eintrags mittels 'bind:value'" />

    <button on:click={changeDataInStore}>Update Datensatz</button>
    
    {/if}
