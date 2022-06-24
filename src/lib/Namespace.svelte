<script type="ts">
    import { createEventDispatcher } from "svelte";

    import ConfirmedButton from "./ConfirmedButton.svelte";
import type { Choice } from "./data/stores";
    import EditableField from "./EditableField.svelte";
import Pilled from "./PilledDiv.svelte"

    export let candidates: Choice[];
    export let name: string;
    export let editing: boolean = false;
    export let selfEditable = true;

    let dispatcher = createEventDispatcher();
</script>

<span class="block-name">
    {#if selfEditable}
        <EditableField bind:value={name} bind:editing={editing} />
        <ConfirmedButton on:click={()=>{dispatcher("delete")}} text="Delete"/>
    {:else}
        {name}
    {/if}

    <button on:click={()=>dispatcher("hide")}>Hide</button>
</span>

<div class="block-choices">
    <Pilled>
        {#each candidates as value, i (value.id)}
            <div class="candidate">
            <EditableField bind:value={candidates[i].content} bind:editing={candidates[i].editing} />
            <ConfirmedButton on:click={()=>{candidates.splice(i, 1); candidates = candidates}} text="Delete"/>
            </div>
        {/each}
        <button on:click={() => {
            candidates = [...candidates, {content: "", editing: true, id: candidates.length === 0? 0: Math.max(...candidates.map((val)=>val.id)) + 1}];
        }}>
            Add
        </button>
    </Pilled>
</div>

<style>
    .block-name {
        padding: 10px;
        background-color: gray;
        border-radius: 0 0 5px 0;

        box-shadow: inset #00000077 0 -15px 30px 0;
        color: white;
        font-weight: bold;

        display: block;
        width: max-content
    }

    .candidate {
        background-color: #ff000022;
        border: 2px red solid;
        margin: 2px;
        padding: 1px;
    }
</style>