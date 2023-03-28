<script>
import Ankerlinks from "./navis/Ankerlinks.svelte";
import InputField from './forms/InputField.svelte'
import Radiobutton from './forms/Radiobutton.svelte'

let inputFieldBound
let nativeFieldBound
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

const elBindCode = `   <input type="text" bind:this={nativeFieldBound}>`
const compBindCode = `    let input
    export function focus() {
        input.focus();
    }`
const compParentCode = `    <InputField
        labelName="Komponente ist gebunden"
        bind:this={inputFieldBound}>
    </InputField>`

let inputValue = 'Fooo'
let inputValueUnbound = 'Bar'
let boundCB = false
let unboundCB = false

let animalBound = "Hund"
let animalUnBound = "Hund"

let selectedValue=1
let selectedValueUnBound=1
const selectedValues = [
    {
        id: 1,
        text: 'Eins'
    },
    {
        id: 2,
        text: 'Zwei'

    },
    {
        id: 3,
        text: 'Drei'

    }
]
</script>


<Ankerlinks ankers={['Eingabefelder und Textareas', 'Checkboxen', 'Radiobuttons', 'Select', 'Elemente oder Komponenteninstanzen binden']}></Ankerlinks>
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
<h3>Beispiel mit Komponente</h3>
<div class="flex flex-jus">
    <div>
        Das gewählte Tier ist: {animalBound}
    <div>
        <Radiobutton id="comp-hund" name="tier2" bind:group={animalBound} value="Hund" labelName="Hund">  </Radiobutton>
    </div>
    <div>
        <Radiobutton id="comp-katze" name="tier2" bind:group={animalBound} value="Katze" labelName="Katze">  </Radiobutton>
    </div>
    <div>
        <Radiobutton id="comp-maus" name="tier2" bind:group={animalBound} value="Maus" labelName="Maus">  </Radiobutton>


    </div>
    </div>
    <div>
        Das gewählte Tier ist: {animalUnBound}
        <div>

            <Radiobutton
                id="compunBhund"
                type=radio
                name="tier"
                on:change={() => {animalUnBound = 'Hund'}}
                checked={animalUnBound === 'Hund'}
                labelName="Hund"
                value="Hund" />
        </div>
        <div>
            <Radiobutton
                    id="compunBkatze"
                    type=radio
                    name="tier"
                    on:change={() => {animalUnBound = 'Katze'}}
                    checked={animalUnBound === 'Katze'}
                    labelName="Katze"
                    value="Katze" />


        </div>
        <div>

                <Radiobutton
                        id="compunBmaus"
                        type=radio
                        name="tier"
                        on:change={() => {animalUnBound = 'Maus'}}
                        checked={animalUnBound === 'Maus'}
                        labelName="Maus"
                        value="Maus" />



        </div>
    </div>
</div>

<h2 id="Select">Select</h2>
<div class="flex">

    <div>
        <label for="sel1">Auswahlvalue ist {selectedValue}</label> <br>
        <select id="sel1" bind:value={selectedValue}>
            {#each selectedValues as {id, text} (id)}
                <option value={id}>{text}</option>
            {/each}
        </select>
    </div>
    <div>
        <label for="sel2">Auswahlvalue ist {selectedValueUnBound}</label> <br>
        <select id="sel2" value={selectedValueUnBound}>
            {#each selectedValues as {id, text} (id)}
                <option value={id}>{text}</option>
            {/each}
        </select>
    </div>
</div>

<h2 id="Elemente oder Komponenteninstanzen binden">Elemente oder Komponenteninstanzen binden</h2>
<p>Mit bind:this kann auf das Element, bzw. die Komponente zugegriffen werden</p>
<div class="flex">
    <div>
        <input type="text" bind:this={nativeFieldBound}><br>
        <button on:click={() => nativeFieldBound.focus()}>Fokussiere das Feld</button>
        <button on:click={() => nativeFieldBound.value = 'X/Y'}>Setze einen Wert "X/Y"</button>
    </div>
    <div>
        <pre>{elBindCode}</pre>
    </div>
</div>

<div class="flex">

    <div>
        <InputField labelName="Komponente ist gebunden" bind:this={inputFieldBound}></InputField>
        <button on:click={() => inputFieldBound.focus()}>Fokussiere das Feld</button>
        <button on:click={() => inputFieldBound.value = 'X/Y'}>Setze einen Wert "X/Y"</button>
    </div>
    <div>
        <pre> // Code in der Parent-Komponente<br>{compParentCode}</pre>
        <pre> // Code in der Child-Komponente<br>{compBindCode}</pre></div>
</div>
