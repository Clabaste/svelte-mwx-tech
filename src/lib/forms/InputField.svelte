<svelte:options accessors />

<script>
    let input
    import { fade, slide, fly, blur, scale, crossfade } from 'svelte/transition';

    import { v4 as uid } from 'uuid';
    import { createEventDispatcher } from 'svelte';

    export function focus() {
        input.focus();
    }

    export let id = uid();
    export let dataValidate = undefined;
    export let dataValidationMessage = undefined;
    export let labelName = undefined;
    export let value = '';
    export let placeholder = undefined;
    export let type = 'text';
    export let disabledState = false;
    export let error = {};
    export let success = false;
    export let loading = false;

    let isChanged = false;

    let touched = false;
    let timer;

    const dispatch = createEventDispatcher();
    const handleOnInput = (e) => {
        touched = false;

        value = e.target.value;
        dispatch('input', {
            target: e.target,
            value: value
        });
    };
    const handleOnBlur = (e) => {
        dispatch('blur', {
            target: e.target,
            value: value
        });
    };

    const handleOnFocus = (e) => {
        dispatch('focus', {
            target: e.target,
            value: value
        });
    };

    $: disabled = disabledState
</script>

<div class="field">
    <slot name="label" />
    {#if !$$slots.label}
        <label class="field__label" for={id}>
            {labelName}
        </label>
    {/if}

    <input
            bind:this={input}
            class="field__el"
            class:field__el--error={error && error.id && touched}
            class:field__el--loading={loading}
            {disabled}
            {placeholder}
            bind:value
            type="text"
            {id}
            on:change={() => (isChanged = true)}
            on:input={handleOnInput}
            on:blur={handleOnBlur}
            on:focus={() => {handleOnFocus}}
            data-validate={dataValidate}
            data-validationMessage={dataValidationMessage}
    />
    {#if error && error.message && touched}
        <div class="field__error-msg">
            {error.message}
        </div>
    {/if}
</div>

<style lang="scss">
  .field {
    position: relative;
    &__error-msg {
      color: red;
      font-size: 0.9rem;
      margin-top: -10px;
      margin-bottom: 10px;
    }
    &__el {
      width: 100%;
      padding: 10px;
      font-family: 'Helvetica', sans-serif;
      font-size: 1rem;
      background: #f1f1f1;
      border: 1px solid transparent;
      margin-bottom: 20px;
      outline: none;
      &--error {
        background: mistyrose;
      }
      &:focus {
        border: 1px solid #ccc;
      }
      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
    &__status {
      position: absolute;
      top: 25px;
      right: 10px;
      width: 25px;
      padding: 0;
      background-color: transparent;
    }
    &__success {
      color: darkseagreen;
    }
    &__loading-ani {
      animation: waber 2s infinite;
    }
  }
  @keyframes waber {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.3;
      transform: scale(0.7);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
