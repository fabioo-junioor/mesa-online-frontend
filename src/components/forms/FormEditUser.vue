<script setup>
import { onMounted, reactive } from 'vue';
import { fielsRequired, phoneValidator } from '../../utils/inputValidators.js';

const emit = defineEmits(['saveFormUser']);
const nameUser = defineModel('name');
const phoneUser = defineModel('phone');
const rulesUser = reactive({
    required: v => fielsRequired(v) || 'Campo obrigatório',
    phone: v => phoneValidator(v) || 'Numero incorreto'
    
});
const onSubmit = () => {
    emit('saveFormUser');

}

</script>
<template>
    <div id="form-edit-user" class="q-ma-sm q-pa-sm">
        <q-form @submit="onSubmit">
            <q-input
                class="q-mb-md"
                filled
                color="teal"
                v-model="nameUser"
                type="text"
                label="Seu nome:"
                lazy-rules
                :rules="[rulesUser.required]" />
            <q-input
                class="q-mb-md"
                filled
                color="teal"
                v-model="phoneUser"
                type="tel"
                label="Seu telefone:"
                lazy-rules
                mask="(##) ####-#####"
                :rules="[rulesUser.phone]" />
            <q-btn
                class="q-mb-md"
                label="Salvar"
                type="submit"
                color="teal" />
        </q-form>
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
#form-edit-user{
    font-family: "Fredoka", sans-serif;

    .q-form{
        width: 100%;

        .q-btn{
            height: 3rem;
            width: 100%;

        }
    }
}
</style>