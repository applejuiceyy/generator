<script type="ts">
import { onDestroy } from "svelte";

import { deserialize, isSerializedBlocks, serialize } from "./data/serialize";
    import { blocks } from "./data/stores";

    let value = "";

    function save() {
        value = JSON.stringify($blocks);
    }

    function load() {
        let parsed;
        try {
            parsed = JSON.parse(value);
        }
        catch(e) {
            alert("what")
        }

        if(isSerializedBlocks(parsed)) {
            $blocks = deserialize(parsed);
        }
        else
        {
            alert("This makes no sense")
        }
    }

    onDestroy(blocks.subscribe((val) => value = JSON.stringify(serialize(val))))
</script>

<div class="buttons">
    <button on:click={save}>Save</button>
    <button on:click={load}>Load</button>
</div>

<textarea class="sl" bind:value={value}/>

<style>
    .buttons {
        display: flex;

    }

    .buttons>*{
        flex-grow: 1;
    }

    .sl {
        font-family: monospace;
        display: block;
        resize: none;
        width: 100%;
        box-sizing: border-box;
    }
</style>