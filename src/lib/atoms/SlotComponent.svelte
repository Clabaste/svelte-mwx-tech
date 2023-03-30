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
<div class="slot-card__content">
    <slot>
        Slot Default content
    </slot>
</div>

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
        border: 2px dashed #CCC;
        &__content {
            background-color: aliceblue;
            padding: 20px
        }
    }
    .red {
        color: #ff0000
    }
    .green {
        color: green
    }

</style>
