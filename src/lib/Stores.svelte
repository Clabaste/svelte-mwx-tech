<script>
    import {dataStore} from '../stores/data'
    import theme from '../stores/theme'
    import {time} from '../stores/time'
    import {endOfYear} from '../stores/endOfYear'
    import Ankerlinks from "./navis/Ankerlinks.svelte";
    import InputField from "./forms/InputField.svelte";
    
    const changeDataInStore = async() => { 
        const res = await fetch('https://www.swapi.tech/api/people?page=5&limit=3');
        const {message, results, error} = await res.json();
        if (message==='ok') {
            dataStore.update((data) => {
            return [
                    ...data,
                    ...results
                ]
            })
        } else {
            throw new Error(error);
        }
    }
    const switchTheme = () => {
        $theme === 'light' ? theme.set('dark') : theme.set('light')
    }
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
</script>
<Ankerlinks></Ankerlinks>
<h1>Stores</h1>
<p>Mithilfe von Stores werden in der Regel Daten gespeichert, die über mehrere voneinander 
    unabhängige Komponenten oder Seiten benutzt werden werden.</p>
<h2 data-anker="Writable Store">Writable Store</h2>
<p>Wie der Name schon sagt, Writable Stores lassen sich von überall aus ändern.</p>

<h3>Theme ist "{$theme}""</h3>
    <button on:click={switchTheme}>Switch Theme</button>
    <hr>
    <h3>Storedaten werden auf der Seite "Data" initial befüllt</h3>
    <pre>{JSON.stringify($dataStore, null, 2)}</pre>
    {#if $dataStore.length > 0}
    <InputField bind:value={$dataStore[0].name} labelName="Ändere den Namen des ersten Eintrags mittels 'bind:value'" />

    <button on:click={changeDataInStore}>Update Datensatz</button>
    
    {/if}
    
    <h2 data-anker="Readable Store">Readable Store</h2>
    <p>Readable Store lassen sich nicht ändern und werden darum für Informationen benutzt, die man nicht durch eine Eingabe oder Ähnliches ändern möchte, zum Beispiel, 
        bei Datum, Geolocation, Mausposition ect.:</p>
    <p>Heute ist {$time.toLocaleDateString('de-DE', options)} um {$time.toLocaleTimeString('de-DE')}</p>



    <h2 data-anker="Derived Store">Derived Store</h2>
    <p>Derived Stores beziehen sich auf Daten aus einem anderen Store</p>
    <p>     Noch <strong >{$endOfYear}</strong> bis zum Ende des Jahres </p>
        
    