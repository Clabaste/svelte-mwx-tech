<script>
    import { getContext } from 'svelte';
    import { myContextKey } from '../../keys.js';

    const { getURL } = getContext(myContextKey);
    const url = getURL();
    let promise = null
    let show = false
    const getSingleData = async() => {
        show = true
        const res = await fetch(url);
        const {message, result, error} = await res.json();
        const arr = []
        if (message==='ok') {
            for (const key in result.properties) {
                arr.push({
                    keyName: key,
                    value: result.properties[key]
                })
                
        }
        return arr;
        } else {
        throw new Error(error);
        }
    }
    console.info('url from Context', url)
</script>
<button on:click={() => {
    if(promise) {
        show = !show 
    }
    else {
        promise = getSingleData()
    }
}}>Zeige Details an</button>

{#if promise && show}
{#await promise}
    <p>...waiting</p>
{:then personList}
    <dl>
        {#each personList as person, i}
            <dt>
                {person.keyName}
            </dt>
            <dd>
                {person.value}
            </dd>
        {/each}
    </dl>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
{/if}