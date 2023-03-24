<script>
    export let ankers = []
    const scrollTo = (e) => {
        document.getElementById(e.target.name).scrollIntoView({ behavior: "smooth" });
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