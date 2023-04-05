<script>
    
    import DataChild from "./atoms/DataChild.svelte";
    import DataChildContext from "./atoms/DataChildContext.svelte";
    import DataStore from "./atoms/DataStore.svelte";
    import Ankerlinks from "./navis/Ankerlinks.svelte";
    const dataBlock1 = `    /* Parent */
    <DataChild {person}></DataChild>

    /* Child */
    <DataGrandChild {url}></DataGrandChild>  

    /* Grandchild */
    export let url 
    `

    const dataBlock2 = `    /* Parent */
    <DataChild {person}></DataChild>

    /* Child */
    import { setContext } from 'svelte';
    import { myContextKey } from '../../keys.js';
    const {name, url, uid} = person
    setContext(myContextKey, {
        getURL: () => url
    });

    /* Grandchild */
    import { getContext } from 'svelte';
    import { myContextKey } from '../../keys.js';

    const { getURL } = getContext(myContextKey);
    const url = getURL();
    `


    let results = []
    
    async function getStarWarsData(url) {   
        const res = await fetch(url);
        const {message, results, error} = await res.json();
        if (message==='ok') {
        return results;
        } else {
        throw new Error(error);
        }
    }

    let promise = getStarWarsData('https://www.swapi.tech/api/people?page=1&limit=3')
    let promise2 = getStarWarsData('https://www.swapi.tech/api/people?page=2&limit=3')
</script>
<Ankerlinks></Ankerlinks>
<h2 data-anker="Properties">Properties</h2>
<p>Natürlich kann man wie in allen anderen bekannten Framework mittels "Properties" Daten und Informationen an die Childkomponente übermitteln</p>
<p>Mehr Info hier im  <a href="https://svelte.dev/tutorial/declaring-props">Tutorial</a></p>
{#await promise}
    <p>...waiting</p>
{:then peoples}
    <div class="flex">
        <ul class="image-list">
            {#each peoples as { person }, i (person.uid)}
                <li>
                    <DataChild {...person}></DataChild>
                </li>
            {/each}
        </ul>
        <div>
           <pre>{dataBlock1}</pre> 
        </div>
    </div>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<h2 data-anker="Context">Context</h2>
<p>Will man Daten eines Bereichs nicht durch sämtliche Komponenten "mitschleifen", kann man "Context" benutzen.</p>
<p>In diesem Fall also die URL – sie wird mit "getContext" vom PArent geholt</p>
{#await promise2}
    <p>...waiting</p>
{:then peoples}
    <div class="flex">
        <ul class="image-list">
            {#each peoples as person, i (person.uid)}
                <li>
                    <DataChildContext {person}></DataChildContext>
                </li>
            {/each}
        </ul>
        <pre>{dataBlock2}</pre>
    </div>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<h2 data-anker="Store">Daten kommen aus einem Store</h2>
<DataStore></DataStore>
<div style="height: 70vh"></div>