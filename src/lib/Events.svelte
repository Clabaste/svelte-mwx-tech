<script>
import Ankerlinks from "./navis/Ankerlinks.svelte";
import InputField from './forms/InputField.svelte'
import {createEventDispatcher} from "svelte";

const dispatchCode = `  const dispatch = createEventDispatcher();
  const handleOnInput = (e) => {
    touched = false;

    value = e.target.value;
    dispatch('input', {
    target: e.target,
    value: value
  };`
const forwardCodeApp = `function eventForward () {
    alert('event Forwarded')
  }
  <Events  on:blur={eventForward}/>`
const forwardCodeEvent = ` <InputField
    labelName="Beispiel"
    on:blur>
 </InputField>`




/*const dispatch = createEventDispatcher();

function sayHello() {
    dispatch('message', {
        text: 'Hello!'
    });
}*/
</script>


<Ankerlinks ankers={['Einfache Events', 'Events aus Komponenten (dispatch)', 'Event forwarding']}></Ankerlinks>
<h1>Events</h1>
<h2 id="Einfache Events">Events von HTML-Elementen</h2>
<p>Events werden mithilfe von "on:" plus dem gewünschten Event gesetzt</p>
<pre>on:click</pre>
<p>Es gibt verschiedene, nützliche Modifier, die mit einer Pipe definiert werden</p>

<p>Default Event wird unterdrückt:</p>
<pre>on:click|preventDefault</pre>
<p>Event wird nur einmalig ausgeführt:</p>
<pre>on:click|once</pre>
<p>Event target muss das Element selbst sein:</p>
<pre>on:click|self</pre>
<p>Eine komplette Liste findet Ihr <a href="https://svelte.dev/tutorial/event-modifiers">hier</a></p>
<h2 id="Events aus Komponenten (dispatch)">Events aus Komponenten (dispatch)</h2>
<p>
    Oft benutzt man wiederverwendbare Komponententen; in diesen muss der originale Event als CustomEvent nach oben gereicht / dispatched werden.
    Der Wert ist dann im CustomEvent unter "detail" zu finden.
</p>
<p>
    Das Beispiel loggt den e.detail aus. Die Komponente ruft eine Methode "handleOnInput" auf. In dieser Methode werden target und
    value in einem Objekt dispatched. Mehr dazu gibt es <a href="https://svelte.dev/tutorial/component-events">hier</a>
</p>

<div class="flex">
    <div><InputField labelName="Beispiel" on:input={(e) => console.info('on input', e.detail)}></InputField></div>
    <div><pre>{dispatchCode}</pre></div>

</div>

<h2 id="Event forwarding">Event forwarding</h2>
<p>
    Vielleicht wollen wir eine Funtion ansprechen, die in einer Komponente liegt, die nicht der direkte Parten ist, zum Beispiel in
    der <code>&lt;App&gt;</code>


</p>
<p>Zur Verdeutlichung: Unser Aufbau ist:</p>
<pre>
    -App.svelte
        --Events.svelte
            ---Input.svelte
</pre>
<p>Es  also aus <code>&lt;InputField&gt;</code> eine Funktion in <code>&lt;App&gt;</code> gecalled werden. Wir benutzen dazu
    den onBlur Event.
</p>
<div><InputField labelName="Beispiel" on:blur></InputField></div>
<div class="flex">

    <div>
        App.svelte
        <div><pre>{forwardCodeApp}</pre></div>

    </div>
    <div>
        Events.svelte
        <div><pre>{forwardCodeEvent}</pre></div>

    </div>
    <div>
        InoutField.svelte
        <div><pre>{dispatchCode}</pre></div>

    </div>
</div>


