<script setup>
import { onMounted, reactive } from 'vue';
import { fielsRequired, phoneValidator } from '../../utils/inputValidators.js';

const emit = defineEmits(['saveFormUser']);
const nameUser = defineModel('name');
const phoneUser = defineModel('phone');
const linkInstagram = defineModel('instagram');
const rulesUser = reactive({
    required: v => fielsRequired(v) || 'Campo obrigatório',
    phone: v => phoneValidator(v) || 'Numero incorreto'
    
});
const onSubmit = () => {
    emit('saveFormUser');

}

</script>
<template>
    <div id="form-edit-user">
        <q-form @submit="onSubmit">
            <div class="form-edit-user-inputs">
                <i class='bx bxs-user q-ml-xs q-mr-xs'></i>
                <q-input
                    class="q-mb-md"
                    filled
                    color="teal"
                    bg-color="white"
                    v-model="nameUser"
                    type="text"
                    label="Seu nome:"
                    lazy-rules
                    :rules="[rulesUser.required]" />
            </div>
            <div class="form-edit-user-inputs">
                <i class='bx bxs-phone q-ml-xs q-mr-xs'></i>
                <q-input
                    class="q-mb-md"
                    filled
                    color="teal"
                    bg-color="white"
                    v-model="phoneUser"
                    type="tel"
                    label="Seu telefone:"
                    lazy-rules
                    mask="(##) ####-#####"
                    :rules="[rulesUser.phone]" />
            </div>
            <div class="form-edit-user-inputs">
                <i class='bx bxl-instagram-alt q-ml-xs q-mr-xs'></i>
                <q-input
                    class="q-mb-md"
                    filled
                    color="teal"
                    bg-color="white"
                    v-model="linkInstagram"
                    type="text"
                    label="Link do instagram:"
                    lazy-rules />
            </div>
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

        .form-edit-user-inputs{
            display: flex;
            align-items: flex-start;

            i{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 10%;
                height: 3.5rem;
                font-size: 1.8rem;
                border-radius: 5px;
                background-color: white;
                color: $dark;

            }
            .q-input{
                width: 90%;

            }
        }
        .q-btn{
            height: 3rem;
            width: 100%;

        }
    }
}
</style>