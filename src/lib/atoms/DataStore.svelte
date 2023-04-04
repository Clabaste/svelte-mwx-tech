<script>
    import {dataStore} from '../../stores/data'
    import DataChildContext from './DataChildContext.svelte';
</script>

<main>
    {#if $dataStore.length === 0}
    {#await dataStore.init('https://www.swapi.tech/api/people?page=4&limit=3')}
    <p>waiting for the promise to resolve...</p>
    {:then peoples}
    <div class="flex">
        <ul class="image-list">
            {#each peoples as person, i (person.uid)}
                <li>
                    <DataChildContext {person}></DataChildContext>
                </li>
            {/each}
        </ul>
    </div>
{:catch error}
    <p>Something went wrong: {error.message}</p>
{/await}
    {:else }
    <div class="flex">
        <ul class="image-list">
            {#each $dataStore as person, i (person.uid)}
                <li>
                    <DataChildContext {person}></DataChildContext>
                </li>
            {/each}
        </ul>
    </div>
    {/if}
    
</main>
