<script>
    import longpress from '../actions/longpress'
    import Ankerlinks from "./navis/Ankerlinks.svelte";
    
    let duration = 1000
    let animalBound
</script>
<Ankerlinks></Ankerlinks>
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