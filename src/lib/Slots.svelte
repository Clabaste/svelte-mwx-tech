<script>
    import SlotComponent from "./atoms/SlotComponent.svelte";
</script>



<h2 data-anker="Slots">Slots</h2>
<SlotComponent let:hovering={isHovered}>
    <h3 slot="headline" class:hovered={isHovered}>Headline</h3>
    <p>Schubiduuuu, irgendein Content.. </p>
</SlotComponent>

<style lang="scss">
    h3 {
        &.hovered {
            background-color: darkcyan;
            color: #FFF
        }
    }
</style>
