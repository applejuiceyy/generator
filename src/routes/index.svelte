<script type="ts">
    import Namespace from "$lib/Namespace.svelte";
    import { blocks } from "$lib/data/stores";
    import Block from "$lib/Block.svelte"
    import { fly } from "svelte/transition";
    import SaverLoader from "$lib/SaverLoader.svelte";
    import Result from "$lib/Result.svelte";

    let idx = 0;
    let resultDisplay;
</script>
{#if $blocks.filter((val) => !val.showing).length > 0}
    <Block style="text-align: center;">
        {#each $blocks as block, i (block.id)}
            {#if !block.showing}
                <button style:margin="2px" on:click={()=>block.showing = true}>Show {block.name}</button>
            {/if}
        {/each}
    </Block>
{/if}

<div class="blocks">
    {#each $blocks as block, i (block.id)}
        {#if block.showing}
            <div style="display: contents" transition:fly={{y: 10, duration: 100}}>
                <Block style="min-width: 500px; overflow: hidden;">
                    <Namespace bind:editing={block.editing} bind:candidates={block.choices} bind:name={block.name} selfEditable={block.name != "root"} on:delete={()=>{
                        $blocks.splice(i, 1); $blocks = $blocks
                    }} on:hide={()=>block.showing = false}></Namespace>
                </Block>
            </div>
        {/if}
    {/each}
</div>

<div style="text-align: center;">
    <button on:click={()=>$blocks = [...$blocks, {
        name: String(++idx),
        choices: [],
        id: $blocks.length === 0? 0: Math.max(...$blocks.map((val)=>val.id)) + 1,
        editing: true,
        showing: true
    }]}>
        add block
    </button>
</div>

<Block style="padding-bottom: 15px">
    <Result bind:this={resultDisplay} blocks={$blocks}/>

    <!--<Pilled>
        Longest result: {findBiggestPath($blocks) || "infinite loop"}
        <br>
        Shortest result: {findShortestPath($blocks)}
    </Pilled>-->
</Block>



<Block>
    <SaverLoader/>
</Block>

<style>
    .blocks {
        margin-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    :global(body) {
        background-color: #444444;
    }
</style>