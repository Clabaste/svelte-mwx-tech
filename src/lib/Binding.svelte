<script>
import Ankerlinks from "./navis/Ankerlinks.svelte";
import InputField from './forms/InputField.svelte'
const radioBound = `
        <input
            id="hund"
            type=radio
            name="tier"
            bind:group={animalBound}
            value="Hund">`
const radioUnBound = `
        <input
            id="unBhund"
            type=radio
            name="tier2"
            on:change={() => {animalUnBound = 'Hund'}}
            checked={animalUnBound === 'Hund'}
            value="Hund">`

let inputValue = 'Fooo'
let inputValueUnbound = 'Bar'
let boundCB = false
let unboundCB = false

let animalBound = "Hund"
let animalUnBound = "Hund"
</script>


<Ankerlinks ankers={['Eingabefelder und Textareas', 'Checkboxen', 'Radiobuttons']}></Ankerlinks>
<h1>Binding</h1>
<p>Bindings sind ein weites Feld, wer mehr wisen möchte schaut sich <a href="https://svelte.dev/tutorial/text-inputs">diese Beispiele</a> an</p>
<p>Generelle gilt: Der Datenfluss geht in svelte vom oben nach unten (parent to child) –
    diese Regel wird allerding für eine einfachere Benutzbarkeit an einigen Stellen gebrochen.</p>
<p>Konkret gilt das vor allem für Formularelemente – hier kann man den Wert mit "bind:value" in beide Richtungen binden (doublebinding) </p>

<h2 id="Eingabefelder und Textareas">Eingabefelder und Textareas</h2>
<div class="flex">
    <div>

        <InputField labelName="Gebundener Wert: {inputValue}" bind:value={inputValue}></InputField>
    </div>
    <div>
        <InputField  labelName="Nicht gebundener Wert: {inputValueUnbound}" value={inputValueUnbound}></InputField>
    </div>
</div>

<h2 id="Checkboxen">Checkboxen</h2>
<div class="flex">
    <div>
        <label for="checkboxBound">
            <input id="checkboxBound" type=checkbox bind:checked={boundCB}>
            Gebundene Checkbox
        </label>
        {#if boundCB}
            <p>Bedingung "checked" erfüllt ({boundCB})</p>
        {:else}
            <p>Bedingung "checked" nicht erfüllt ({boundCB})</p>
        {/if}
    </div>
    <div>
        <label for="checkboxUnBound">
            <input id="checkboxUnBound" type=checkbox checked={unboundCB}>
            Nicht gebundene Checkbox
        </label>
        {#if unboundCB}
            <p>Bedingung "checked" erfüllt ({unboundCB})</p>
        {:else}
            <p>Bedingung "checked" nicht erfüllt ({unboundCB})</p>
        {/if}
    </div>
</div>

<h2 id="Radiobuttons">Radiobuttons</h2>
<p>Achtung: Beide Beispiele funktionieren, die "bind:group" Methode ist nur kürzer</p>
<div class="flex flex-jus">
    <div>
        Das gewählte Tier ist: {animalBound}
    <div>
        <label for="hund">
            <input id="hund" type=radio name="tier2" bind:group={animalBound} value="Hund">
            Hund
        </label>

    </div>
    <div>
        <label for="katze">
            <input id="katze" type=radio name="tier2" bind:group={animalBound} value="Katze">
            Katze
        </label>

    </div>
    <div>
        <label for="maus">
            <input id="maus" type=radio name="tier2" bind:group={animalBound}  value="Maus">
            Maus
        </label>

    </div>
      <pre>{radioBound}</pre>
    </div>
    <div>
        Das gewählte Tier ist: {animalUnBound}
        <div>
            <label for="unBhund">
                <input id="unBhund" type=radio name="tier" on:change={() => {animalUnBound = 'Hund'}} checked={animalUnBound === 'Hund'} value="Hund">
                Hund
            </label>

        </div>
        <div>
            <label for="unBkatze">
                <input id="unBkatze" type=radio name="tier" on:change={() => {animalUnBound = 'Katze'}} checked={animalUnBound === 'Katze'} value="Katze">
                Katze
            </label>

        </div>
        <div>
            <label for="unBmaus">
                <input id="unBmaus" type=radio name="tier"  on:change={() => {animalUnBound = 'Maus'}} checked={animalUnBound === 'Maus'}  value="Maus">
                Maus
            </label>

        </div>
        <pre>{radioUnBound}</pre>
    </div>
</div>