<script>
    import { tick } from "svelte";
import ConfirmedButton from "./ConfirmedButton.svelte";

    export let editing = false;
    export let value = "";

    let editValue = "";

    let input;

    async function turnOnEditing() {
        editValue = value;
        editing = true;
    }

    export function cancel() {
        editing = false;
    }

    function save() {
        value = editValue;
        cancel();
    }

    $: {
        if(editing) {
            tick().then(()=>{
                input.focus();
                input.select();
            })
        }
    }
</script>

{#if editing}
    <input bind:this={input} bind:value={editValue} on:keydown={(ev)=>(ev.key == "Enter") && save()}>
    <button on:click={save}>Confirm</button>
    <ConfirmedButton on:click={cancel} text="Cancel" />
{:else}
    <span class="clickable" on:click={turnOnEditing}>{value}</span>
    <button on:click={turnOnEditing}>Edit</button>
{/if}

<style>
    .clickable {
        cursor: pointer;
    }
</style>