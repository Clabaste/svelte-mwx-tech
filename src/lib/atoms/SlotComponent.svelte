<script>
    let hovering = false;
    function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>
<div class="slot-card"  on:mouseenter={enter} on:mouseleave={leave}>
    <slot name="headline"  hovering={hovering}>
</slot>
<slot>
    Slot Default content
</slot>
{#if $$slots.headline}
    <p class="green">Ein "headline" Slot wurde gesetzt</p>
    {:else }
    <p class="red">Kein "headline" Slot wurde gesetzt</p>
{/if}
{#if $$slots.default}
    <p class="green">Ein Default Slot wurde gesetzt.</p>
    {:else }
    <p class="red">Kein  Default Slot wurde gesetzt.</p>    
{/if}
</div>
<style lang="scss">
    .slot-card {
        border: 2px dashed #CCC
    }
    .red {
        color: #ff0000
    }
    .green {
        color: green
    }
</style>
