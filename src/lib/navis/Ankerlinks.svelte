<script>
    import {onDestroy, onMount} from "svelte";
    let ankers = [];
    onMount( () => {
        ankers = [...document.querySelectorAll('[data-anker]')].map((anker) => anker.getAttribute("data-anker"));
    })


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
    top: 50px;
    left: -16px;
    background-color: #000;
  }
    button {
        margin: 4px $gridH;
      padding: 0;

      color: #FFF;
      border-bottom: 1px dashed #FFF;
      background: transparent;
      border-radius: 0;
    }
    .ankerlist {
      margin: 0;
      list-style: none;
      display: flex;
      li {
        padding: calc($gridV / 2) 0;
      }
    }
</style>