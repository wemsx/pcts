<style scoped>
.button {
    height: 50px;
    width: 150px;
    position: relative;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid #252525;
    overflow: hidden;
    border-radius: 30px;
    color: #333;
    transition: all 0.5s ease-in-out;
}

.btn-txt {
    z-index: 1;
    font-weight: 800;
    letter-spacing: 4px;
}

.type1::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.5s ease-in-out;
    background-color: #333;
    border-radius: 30px;
    visibility: hidden;
    height: 10px;
    width: 10px;
    z-index: -1;
}

.button:hover {
    box-shadow: 1px 1px 200px #252525;
    color: #fff;
    border: none;
}

.type1:hover::after {
    visibility: visible;
    transform: scale(100) translateX(2px);
}
</style>

<template>
    <button class="button type1">
        <span class="btn-txt">
            <slot></slot>
        </span>
    </button>
</template>
