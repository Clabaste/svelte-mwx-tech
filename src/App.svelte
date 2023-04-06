<script>
  import { onMount, afterUpdate, tick } from 'svelte';

// @ts-nocheck

  import Counter from './lib/Reactivity.svelte'
  import theme from './stores/theme.js'
  
  import Logic from "./lib/Logic.svelte";
  import Events from "./lib/Events.svelte";
  import Binding from "./lib/Binding.svelte";
  import Data from "./lib/Data.svelte";
  import Stores from "./lib/Stores.svelte";
  import Directives from './lib/Directives.svelte';
  import Start from './lib/Start.svelte'
  import Slots from './lib/Slots.svelte'
  import Ankerlinks from './lib/navis/Ankerlinks.svelte'

  
  
  let page = window.location.hash.slice(1)
  
  

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

  const routes = [
    {
        path: '/props',
        name: 'Reactivity',
        component: Counter,
        data: counterData
    },
    {
        path: '/logic',
        name: 'Logik',
        component: Logic,
        data: logicData
    },
    {
        path: '/binding',
        name: 'Binding',
        component: Binding
    },
    {
        path: '/slots',
        name: 'Slots',
        component: Slots
    },
    {
        path: '/events',
        name: 'Events',
        component: Events
    },
    {
        path: '/data',
        name: 'Data und Props',
        component: Data
    },
    {
        path: '/stores',
        name: 'Stores',
        component: Stores
    },
    {
        path: '/directives',
        name: 'Direktiven und Specials',
        component: Directives
    },
]
  let  ankers = [...document.querySelectorAll('[data-anker]')].map((anker) => anker.getAttribute("data-anker"));
  const setAnkers = () => {
    ankers = [...document.querySelectorAll('[data-anker]')].map((anker) => anker.getAttribute("data-anker"));
  }
  onMount(() => {
    onRouteChange();
    
  });
  afterUpdate(() => {
    setAnkers()
  })
  let pathComponent = Start
  let pathData = {}
  const onRouteChange = () => {
    page = window.location.hash.slice(1)
    const selectedObj = routes.filter((route) => route.path === page)[0]
    if(selectedObj) {
      pathComponent = selectedObj.component;
      pathData = selectedObj.data
    }else {
      pathComponent = Start
      pathData = {}
    }
  }  
</script>
<svelte:window on:load={setAnkers} on:hashchange={onRouteChange} />

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
    {#each routes as { path, name }, i}
      <li >
        <a
                class="mainnavi__list-link"
                class:mainnavi__list-link--active={page === path}
                href={`#${path}`}>{name}
        </a>
      </li>
    {/each} 
  </ul>
</nav> 
<Ankerlinks {ankers}></Ankerlinks>
<main>
  {#if page === '/events'}
      <svelte:component this={pathComponent}  on:blur={eventForward}/>
    {:else }  
      <svelte:component this={pathComponent} {...pathData}/>
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
      padding:0 $gridH;
      li {
        padding: 8px 0;
      }
    }
    &__list-link {
        display: block;
        font-size: 20px;
        color: #FFF;
        border-bottom: 1px dashed #FFF;
        margin-bottom: 2px;
        &--active,&:hover, &:focus {
          border-width: 3px;
          margin-bottom: 0;
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
