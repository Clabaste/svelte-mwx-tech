<script>
    import longpress from '../actions/longpress'

    
    let duration = 1000
    let animalBound
</script>
<h1>Direktiven</h1>

<h2 data-anker="use">Die "Use" Direktive (Actions)</h2>
    <p>Aktionen benutzt man für:</p> 
    <ul>
    <li>Schnittstellen zu Bibliotheken von Drittanbietern</li>
    <li>Lazy Loading</li>
    <li>Tooltips</li>
    <li>Hinzufügen von custom Eventhandler</li>
</ul>
<p>Ein custom Eventhandler: Wenn der Button für {duration} Sekunden gedrückt wird,  soll ein Alert aufgehen</p>
<div>
    <input type="range" min="500" max="3000" bind:value={duration}>
	<button
		use:longpress={{ duration: duration }}
		on:longpress={() => {
			alert('press');
		}}>Alert nach {duration} Sekunden</button
	>
</div>

<h2 data-anker="class">Die "Class" Direktive)</h2>
<div>
    Das gewählte Tier ist{animalBound ? `: ${animalBound}` : ' noch nicht ausgewählt'}
    <div>
        <label 
            class:selected="{animalBound === 'Hund'}" 
            class:unselected="{animalBound !== 'Hund'}" 
            for="hund">
                <input id="hund" type=radio name="tier2" bind:group={animalBound} value="Hund">
                Hund
        </label>

    </div>
    <div>
        <label class:selected="{animalBound === 'Katze'}" class:unselected="{animalBound !== 'Katze'}" for="katze">
            <input id="katze" type=radio name="tier2" bind:group={animalBound} value="Katze">
            Katze
        </label>

    </div>
    <div>
        <label class:selected="{animalBound === 'Maus'}"  class:unselected="{animalBound !== 'Maus'}" for="maus">
            <input id="maus" type=radio name="tier2" bind:group={animalBound}  value="Maus">
            Maus
        </label>

    </div>
</div> 
    
<style lang="scss">
    .selected {
        background-color: lime;
    }
    .unselected {
        background-color: #CCC;
    }
</style>

<h2 data-anker="Svelte eigene Elemente">Svelte eigene Elemente</h2>
<p>
    Svelte liefert einen ganzen Schwung an eigenen Elementen mit. 
    Die sind eigenlich ganz gut im Tutorial vorgestellt:</p>

    <ul>
        <li><a href="https://svelte.dev/tutorial/svelte-self">svelte-self</a></li>
        <li><a href="https://svelte.dev/tutorial/svelte-component">svelte-component</a> (Lässt sich gut für ein Routing verwenden)</li>
        <li><a href="https://svelte.dev/tutorial/svelte-element">svelte-element</a>, um z.B. in einer Komponente ein Tag zu überschreiben</li>
        <li>
            <a href="https://svelte.dev/tutorial/svelte-window">svelte-window</a><br>
            <a href="https://svelte.dev/tutorial/svelte-window-bindings">svelte-window-bindings</a>
        </li>
        <li><a href="https://svelte.dev/tutorial/svelte-document">svelte-document</a></li>
        <li><a href="https://svelte.dev/tutorial/svelte-body">svelte-body</a></li>
        <li><a href="https://svelte.dev/tutorial/svelte-head">svelte-head</a></li>
        <li><a href="https://svelte.dev/tutorial/svelte-options">svelte-options</a></li>
    </ul>

    <h2 data-anker="Svelte eigene Tags">Svelte eigene Tags</h2>
    <p>Es gibt einen Debug Tag</p>
    <!-- {@debug animalBound} -->
    <p>Man kann im Templatebereich eine Konsole ausgeben, wenn man möchte</p>
    {(console.log(animalBound), '')}

    <p>HTML als string mit "@html string"</p>
    {#if animalBound}
        {@const lala = `Tier ist <strong>${animalBound}</strong>`}
        <div>{@html lala}</div>
    {/if}
    