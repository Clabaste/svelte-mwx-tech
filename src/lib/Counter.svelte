<script>
  export let numbersArray = [1, 2, 3, 4];
  export let singleNumber = 0

  function updateArray() {
    // Show: push won't work: Array.push adds an element to the end of the existing array while the spread syntax creates an entirely new array.
    // numbers.push(numbers.length + 1);
    numbersArray = [...numbersArray, numbersArray.length + 1];
  }

  $: sum = numbersArray.reduce((t, n) => t + n, 0);
  $: if(singleNumber > 3) {
        alert('Nicht mehr als 3')
      singleNumber = 3
  }
</script>
<h1>Reactivity and Props</h1>
<h2>Props aus der Parentdatei "App"</h2>
<pre>
  {JSON.stringify($$props, null, 2)}
</pre>

<h2>Reactivity</h2>
<p>Eine Zahl <strong class="alert">({singleNumber})</strong> soll den Wert "4" nicht überschreiten</p>


<button on:click={() => {singleNumber++}}>
  Nummer zählt hoch
</button>


<h2>Die Summe eines Arrays soll neu berechnet werden</h2>
<pre>
  {JSON.stringify(numbersArray)}
</pre>
<p>{numbersArray.join(' + ')} = {sum}</p>
<button on:click={updateArray}>
  Berechne die Summe aus dem Array
</button>