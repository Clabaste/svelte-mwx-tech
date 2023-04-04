<script>
    import {dataStore} from '../../stores/data'
    import DataChildContext from './DataChildContext.svelte';
</script>

<h2>DIR</h2>
{$dataStore}
<main>
    {#await dataStore.init()}
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
</main>
