<script setup>
defineProps(['label', 'type', 'getInputLogin'])

</script>
<template>
    <div id="input">
        <label for="input-1">{{label}}</label>
            <b-form-input
                @input="$emit('getInputLogin', $event)"
                :type="type"
                id="input-1"
                :placeholder="label"
                required></b-form-input>
    </div>
</template>
<style lang="scss" scoped>
    #input{
        margin: 0 0 1rem 0;
        
        label{
            color: #333;
            
        }
        #input-1{
            border-radius: 5px;
            height: 3rem;
            border-bottom: 2px solid #333;

            &::placeholder{
                color: #333;

            }
        }

    }
</style>