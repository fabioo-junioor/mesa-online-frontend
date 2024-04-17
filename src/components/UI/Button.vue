<script setup>
defineProps(['type'])

</script>
<template>
    <div id="botao">
        <b-button
            @click="$emit('efetuarLogin')">{{type}}</b-button>
    </div>
</template>
<style lang="scss" scoped>
    #botao{
        button{
            width: 100%;
            height: 3rem;
            margin: 0 0 1rem 0;
            border-radius: 5px;
            background-color: #1D976C;
            border: none;

            &:hover{
                background-color: #1d976cce;
            }
        }
    }
</style>