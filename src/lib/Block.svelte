<div {...$$restProps} class="block">
    <slot></slot>
</div>

<style>
    .block {
        border: 5px black solid;
        border-radius: 5px;

        box-shadow: inset #00000033 0 -15px 30px 0;
        margin: 5px;

        background-color: white;
    }
</style>