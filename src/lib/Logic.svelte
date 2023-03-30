<script>
  import Emoji from './atoms/Emoji.svelte'
  import Ankerlinks from './navis/Ankerlinks.svelte'
  const codeblock = `   Die Variable "singleNumber" ist
  {#if singleNumber < 3}
      kleiner als 3
  {:else if singleNumber === 3}
      genauso groß wie 3
  {:else }
      größer als 3{/if}`

  const eachblock = `<ul class="image-list">
  {#each imageList as { src, name }, i}
    <li class="flex ">
      <img src="{src}" alt="">
        {name}
      </li>
  {/each}
</ul>`
  const eachblockKeyed = `<ul class="image-list">
  {#each imageList as { src, name }, i (name)}
    <li class="flex ">
      <img src="{src}" alt="">
        {name}
      </li>
  {/each}
</ul>`

  const awaitBlock = `{#await promise}
  <p>...waiting</p>
{:then list}
<!--
  ..hier kommt die Liste von oben mit
  neuen Daten vom BE-Server rein -->
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}`
  export let singleNumber = 0
  export let imageList = []



  function removeFirstItem() {
    imageList = imageList.slice(1);
  }

  async function getImageList() {
    const res = await fetch(`/imageList/`);
    const {message, imageList, error} = await res.json();

    if (message==='ok') {
      return imageList;
    } else {
      throw new Error(error);
    }
  }

  let promise = getImageList();
</script>
<Ankerlinks></Ankerlinks>
<h1>Anweisungen</h1>
<h2 data-anker="if">if/else</h2>
<p>In svelte können logische Anweisungen im HTML-Template ausgeführt werden:</p>
<pre>{codeblock}</pre>

<p>
  Die Variable "singleNumber" ist
  {#if singleNumber < 3}kleiner als 3
  {:else if singleNumber === 3}genauso groß wie 3
  {:else }größer als 3{/if}
</p>
<button on:click={() => {singleNumber++}}>
  Nummer zählt hoch ({singleNumber})
</button>

<h2 data-anker="each">each</h2>
<p>Auch die "each" Anweisung kommt ins Template, sehr praktisch kann man die einzelnen Objektitems dekonstruieren:</p>

<div class="flex">
  <div>
    <pre>{eachblock}</pre>
  <ul class="image-list">
    {#each imageList as { src, name }, i}
      <li class=" flex--fix ">
        <img src="{src}" alt="">
        {name} <Emoji name={name}></Emoji>
      </li>
    {/each}
  </ul>
  </div>
  <div>
    <pre>{eachblockKeyed}</pre>
  <ul class="image-list">
    {#each imageList as { src, name }, i (name)}
      <li class="flex flex--fix ">
        <img src="{src}" alt="">
        {name} <Emoji name={name}></Emoji>
      </li>
    {/each}
  </ul>
  </div>
</div>

<h3>Achtung Falle: Fehler im linken Beispiel</h3>
<p>Wenn ich jetzt das erste Element lösche, wird zwar das Array upgedated und es sieht auf den ersten Blick alles fein aus – aber die <code>&lt;Emoji&gt;</code>-Komponente zeigt nicht mehr
das richtige Icon an.</p>
<p>Hintergrund: Es wird nicht die erste <code>&lt;Emoji&gt;</code>-Komponente entfernt, sondern der letzte DOM-Knoten.
  Dann wird der Namenswert in den verbleibenden DOM-Knoten aktualisiert, aber nicht das Emoji.</p>
<p>Hier in der rechten Liste habe ich das mit dem `name` gelöst, in der Regel nimmt man dafür eine ID</p>

<button on:click={removeFirstItem}>Lösch den ersten Eintrag im Array</button>

<h2 data-anker="await">Promises</h2>

<p>Etwas ungewohnt aber super praktisch, wenn man den #await Block im Template hat:</p>
<div class="flex">
  <div>
    <pre>{awaitBlock}</pre>
  </div>
  <div>
    {#await promise}
      <p>...waiting</p>
    {:then list}
      <ul class="image-list">
        {#each list as { src, name }, i (name)}
          <li class="flex flex--fix ">
            <img src="{src}" alt="">
            {name}
          </li>
        {/each}
      </ul>
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
</div>
<div style="height: 1000px"></div>

<style lang="scss">
  
  .image-list {
    li {
      display: flex;
      gap: $gridH;
      margin-bottom: $gridV;
      align-items: center;
      font-size: 2rem;
    }
    img {
      border-radius: 50%;
    }
  }
</style>