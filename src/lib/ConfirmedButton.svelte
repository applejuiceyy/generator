<script>
import { createEventDispatcher } from "svelte";


    export let text = "Delete";

    let dispatcher = createEventDispatcher();

    let active = true;
    let confirming = false;
    let timeout = null;

    function makeConfirmationActive() {
        active = true;

        timeout = setTimeout(resetButton, 3000)
    }

    function resetButton() {
        confirming = false;
        active = true;
        clearTimeout(timeout)
    }

    function handleClick() {
        if(confirming) {
            dispatcher("click")
        }
        else
        {
            confirming = true;
            active = false;
            timeout = setTimeout(makeConfirmationActive, 300);
        }
    }
</script>

<button on:click={handleClick} disabled={!active} on:mouseleave={resetButton}>
    {confirming? "Really " + text + "?": text}
</button>