<script>
    import {onDestroy, onMount} from "svelte";
    export let ankers = []
    /* let ankers = [];
    onMount( () => {
        ankers = [...document.querySelectorAll('[data-anker]')].map((anker) => anker.getAttribute("data-anker"));
    }) */


    const scrollTo = (e) => {
        document.querySelector(`[data-anker="${e.target.name}"]`).scrollIntoView({ behavior: "smooth" });
    } 
</script>

<div class="ankerblock">
    <ul class="ankerlist">
        {#each ankers as anker}
        <li>
                <button name={anker} on:click={scrollTo}>{anker}</button>
                </li>
        {/each}
    </ul>
</div>

<style lang="scss">
  .ankerblock {
    border-top: 5px solid #FFF;
    position: sticky;
    z-index: $navIndex;
    top: 40px;
    left: -16px;
    background-color: var(--ankerbg);
  }
    button {
        margin: 4px 0;
      padding: 0;
      color: #FFF;
      border-bottom: 1px dashed #FFF;
      background: transparent;
      border-radius: 0;
      font-size: 12px;
    }
    .ankerlist {
      margin: 0;
      padding: 0 20px;
      list-style: none;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      li {
        padding: calc($gridV / 12) 0 calc($gridV / 6) 0;
        white-space: nowrap;
      }
    }
</style>