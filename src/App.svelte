<script>
  import Counter from './lib/Reactivity.svelte'
  import theme from './stores/theme.js'
  import {onMount} from "svelte";
  import Logic from "./lib/Logic.svelte";
  import Events from "./lib/Events.svelte";
  import Binding from "./lib/Binding.svelte";
  import Data from "./lib/Data.svelte";
  import Stores from "./lib/Stores.svelte";
    import Directives from './lib/Directives.svelte';

  let page
  onMount(() => {
    onRouteChange();
  });

  const onRouteChange = () => {
    const path = window.location.hash.slice(1);
    if (path === '/') {
      page = 'reactivity';
    } else if (path === '/logic') {
      page = 'logic';
    }  else if (path === '/events') {
      page = 'events';
    }
    else if (path === '/binding') {
      page = 'binding';
    }
    else if (path === '/data') {
      page = 'data';
    }
    else if (path === '/stores') {
      page = 'stores';
    } 
    else if (path === '/directives') {
      page = 'directives';
    } 
    else {
      window.location.hash = '/';
    }
  };

  const counterData = {
    numbersArray: [1, 2, 3, 4],
    singleNumber: 0
  }
  const logicData = {
    imageList: [{
      name: 'Strand',
      src: 'https://picsum.photos/id/12/100/100'
    },
      {
        name: 'Wasserfall',
        src: 'https://picsum.photos/id/15/100/100'
      },
      {
        name: 'Weg',
        src: 'https://picsum.photos/id/17/100/100'
      }
    ],
    singleNumber: 0
  }

  function eventForward () {
    alert('event Forwarded')
  }
</script>

<svelte:window on:hashchange={onRouteChange} />
<svelte:head>
  {#if $theme === 'dark'}
		<style>
			:root {
				--background: #000;
				--color: #fff;
        --ankerbg: #716d6d
			}
		</style>
	{:else}
		<style>
			:root {
				--background: #FFF;
				--color: #000;
				--ankerbg: #000
			}
		</style>
	{/if} 
</svelte:head>
<nav class="mainnavi">
  <ul class="mainnavi__list">
    <li>
      <a
              class="nav__list-link"
              class:nav__list-link--active={page === 'reactivity'}
              href="#/">Props und Reactivity</a
      >
    </li>
    <li>
      <a
              class="nav__list-link"
              class:nav__list-link--active={page === '/ifelse'}
              href="#/logic">Logik</a
      >
    </li>
    <li>
      <a
              class="nav__list-link"
              class:nav__list-link--active={page === '/events'}
              href="#/events">Events</a
      >
    </li>
    <li>
      <a
              class="nav__list-link"
              class:nav__list-link--active={page === '/binding'}
              href="#/binding">Binding und Slots</a
      >
    </li>
    <li>
      <a
              class="nav__list-link"
              class:nav__list-link--active={page === '/data'}
              href="#/data">Data</a
      >
    </li>

    <li>
      <a
              class="nav__list-link"
              class:nav__list-link--active={page === '/stores'}
              href="#/stores">Stores</a
      >

    <li>
      <a
              class="nav__list-link"
              class:nav__list-link--active={page === '/stores'}
              href="#/stores">Stores</a
      >
    </li>


    <li>
      <a
              class="nav__list-link"
              class:nav__list-link--active={page === '/directives'}
              href="#/stores">Directiven</a
      >
    </li>
  </ul>
</nav>
<main>
  {#if page === 'reactivity'}
    <Counter {...counterData} />
  {:else if page === 'logic'}
    <Logic {...logicData} />
  {:else if page === 'events'}
    <Events  on:blur={eventForward}/>
  {:else if page === 'binding'}
    <Binding/>
  {:else if page === 'data'}
    <Data/>

  {:else if page === 'stores'}
  <Directives/>

    {/if}
</main>


<style lang="scss">
  .mainnavi {
    position: sticky;
    z-index: $navIndex;
    top: 0;
    left: -16px;
    background-color: var(--ankerbg);
    &__list {
      list-style: none;
      display: flex;
      justify-content: space-between;
      padding: 8px $gridH;
      a {
        display: block;
        font-size: 20px;
        color: #FFF;
        border-bottom: 1px dashed #FFF;
        

      }
    }
  }
  button {
    margin: 4px $gridH;
    padding: 0;
    color: #000;
    border-bottom: 1px dashed #000;
    background: transparent;
    border-radius: 0;
  }
  .ankerlist {
    list-style: none;
    display: flex;
    li {
      padding: calc($gridV / 2) 0;
    }
  }
</style>
