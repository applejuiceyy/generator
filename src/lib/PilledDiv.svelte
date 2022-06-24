<div class="pilled" {...$$restProps}>
    <slot/>
</div>

<style>
    .pilled{
        margin-left: 30px;
        margin-top: 30px;
        margin-bottom: 5px;
        margin-right: 5px;
        position: relative;
        border-radius: 5px;
    }

    .pilled::before{
        content: "";
        display: block;
        position: absolute;
        left: -10px;
        height: 100%;
        width: 5px;
        background-color: black;
        border-radius: 1000px;

        transition: left 0.1s, background-color 0.1s, border-radius 0.1s;
    }

    .pilled:hover::before{
        left: -5px;
        background-color: purple;
        border-radius: 1000px 0 0 1000px;
    }

    .pilled:hover{
        outline: 2px #80008033 solid;
    }
</style>