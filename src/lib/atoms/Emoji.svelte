<script>
    import {onDestroy} from "svelte";

    export let name = ''
    const emojis = {
        Strand: "🏖️",
        Wasserfall: "💦 ",
        Weg: "🛣️"
    }
    const emoji = emojis[name];
    onDestroy(() => {
        console.log('thing destroyed: ' + name)
    });
</script>
{emoji}