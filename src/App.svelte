<script>
  import Counter from './lib/Reactivity.svelte'
  import theme from './stores/theme.js'
  import {onMount} from "svelte";
  import Logic from "./lib/Logic.svelte";
  import Events from "./lib/Events.svelte";
  import Binding from "./lib/Binding.svelte";
  import Data from "./lib/Data.svelte";
  import Stores from "./lib/Stores.svelte";

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
    } else {
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
{$theme}
<svelte:window on:hashchange={onRouteChange} />
<svelte:head>
  const 
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
              href="#/binding">Binding and Slots</a
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
    <Binding  on:blur={eventForward}/>
  {:else if page === 'data'}
    <Data  on:blur={eventForward}/>

  {:else if page === 'stores'}
  <Stores/>

    {/if}
</main>


<style lang="scss">
  .mainnavi {
    position: sticky;
    z-index: $navIndex;
    top: 0;
    left: -16px;
    background-color: #000;
    &__list {
      list-style: none;
      display: flex;
      a {
        display: block;
        font-size: 24px;
        color: #FFF;
        border-bottom: 1px dashed #FFF;
        margin: 8px $gridH;
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
