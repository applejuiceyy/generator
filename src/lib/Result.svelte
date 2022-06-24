<script type="ts">
import { onDestroy } from "svelte";
import { fly } from "svelte/transition";
import type { Blocks } from "./data/stores";


    export let blocks: Blocks;
    
    let value = "@root";
    let rage = 1;
    let error = null;
    let running = true;

    function stepCompile() {
        let regex = /@([a-zA-Z0-9-]+)/

        let result = regex.exec(value);
        
        if(result != null) {
            let name = result[1];

            let block = blocks.findIndex((val) => val.name === name);

            if(block == -1)
            {
                error = "Namespace " + name + " does not exist";
            }
            else
            {
                let candidates = blocks[block].choices;

                if(candidates.length == 0)
                {
                    error = "Namespace " + name + " has no choices";

                }
                else
                {
                    let chosen = candidates[Math.floor(Math.random() * candidates.length)];
                    
                    value = value.substring(0, result.index) + chosen.content + value.substring(result.index + name.length + 1);
                    return true;
                }
            }
        }

        return false;
    }

    function stepCompileMany() {
        for(let i = 0; i < rage; i++) {
            if(!stepCompile()) {
                running = false;
                return;
            }
        }

        rage += 0.6;

        rage = Math.min(100, rage);
        timeout = setTimeout(stepCompileMany, 1);
    }

    let timeout = setTimeout(stepCompileMany, 1);

    onDestroy(()=>{
        clearTimeout(timeout);
    })

    let splitted = [];

    $: {
        if(value.length > 500) {
            splitted = [value];
        }
        else
        {
            let result;
            let regex = /@([a-zA-Z0-9-]+)/g
            let last = 0;

            splitted = [];

            while ((result = regex.exec(value)) !== null) {
                splitted.push(value.substring(last, result.index));
                splitted.push(result[1]);
                last = result[0].length + result.index;
            }

            splitted.push(value.substring(last));
            splitted = splitted;
        }
    }

    let keyIdx = 0;
</script>

<button on:click={async ()=>{rage = 1; keyIdx++; value = "@root"; running = true; clearTimeout(timeout); timeout = setTimeout(stepCompileMany, 1); error = null}} style="width: 100%;">
    Reroll
</button>

<div class="compile-screen">
    {#key keyIdx}
        <div class="anchored" in:fly={{y:20}} out:fly={{y:-20}}>
            <span style="margin: 10px; display: block;">
                {#each splitted as chunk, i (i)}
                    {#if (i % 2) == 0}
                        <span>{chunk}</span>
                    {:else}
                        <span class="to-replace">{chunk}</span>
                    {/if}
                {/each}
            </span>
            
            {#if error != null}
                <div class="compile-error">{error}</div>
            {/if}
        </div>
    {/key}
</div>


<style>
    .compile-error {
        padding: 3px;
        margin-top: 4px;
        background-color: #ff000044;
        border: 1px #ff0000 solid;
        font-family: monospace;
    }

    .to-replace {
        background-color: purple;
        padding: 2px;
        border-radius: 5px;
        color: white;
        display: inline-block;
    }

    .to-replace::before {
        content: "@"
    }

    .compile-screen {
        position: relative;
        height: 50vh;
        margin: 30px;
        border: 2px black solid;
        border-radius: 5px;
        padding: 5px;
        background-color: #aaa;
        overflow: hidden;
    }

    .anchored {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
</style>