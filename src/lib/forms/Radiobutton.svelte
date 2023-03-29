<svelte:options accessors />

<script>
    import {createEventDispatcher} from "svelte";
    import { v4 as uid } from 'uuid';
 export let name = ''
 export let id = uid()
 export let labelName = ''
 export let nameValue = ''
 export let value
 export let group
    const dispatch = createEventDispatcher();
    const handleOnChange = (e) => {
        dispatch('change', {
            target: e.target
        });
    };
    $: id2 = id
</script>

<div class="field">
    <input
            class="field__el"
            id={id2}
            type="radio"
            name={nameValue}
            on:change={handleOnChange}
            bind:group={group}
            value={value}>

    <slot name="label" />
    {#if !$$slots.label}
        <label class="field__label" for={id}>
            {labelName}
        </label>
    {/if}
</div>

<style lang="scss">
  .field {
    position: relative;
    border: 1px dotted #f1f1f1;
}
</style>
