<template>
    <div class="alert">
        <div class="content">
            <slot />
        </div>
        <div class="footer">
            <p>This is a Vue component!</p>
        </div>
    </div>
</template>

<style scoped>
.alert {
    background-color: rgb(4 47 46);
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: 600;
    border-radius: 12px;
    text-align: center;
    overflow: hidden;
    user-select: none;
}

.content
.footer {
    padding-left: 4px;
    padding-right: 4px;
    width: 100%;
}

.content {
    color: #fff;
    background-color: #0f766e;
}

.footer {
    color: #fff;
    background-color: #042f2e;
    font-size: 12px;
    line-height: 1;
}
</style>
