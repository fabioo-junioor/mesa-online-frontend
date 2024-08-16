<script setup>
import { reactive, ref } from 'vue';
import { fielsRequired } from '../../utils/inputValidators.js';

const emit = defineEmits(['saveFormUser']);
const oldPassword = defineModel('oldPassword');
const newPassword = defineModel('newPassword');
const repeatNewPassword = defineModel('repeatNewPassword');
const isPwd1 = ref(true);
const isPwd2 = ref(true);
const isPwd3 = ref(true);
const rulesUser = reactive({
    required: v => fielsRequired(v) || 'Campo obrigatório'
    
});
const onSubmit = () => {
    emit('saveFormUser');

}

</script>
<template>
    <div id="form-edit-password-user">
        <q-form @submit="onSubmit">
            <div class="form-edit-establishment-inputs">
                <q-input
                    dark
                    class="q-mb-md"
                    color="orange-9"
                    v-model="oldPassword"
                    :type="isPwd1 ? 'password' : 'text'"
                    label="Sua senha antiga:"
                    lazy-rules
                    :rules="[rulesUser.required]">
                    <template v-slot:append>
                        <q-icon :name="isPwd1 ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd1 = !isPwd1" />
                    </template>
                    <template v-slot:prepend>
                        <i class='bx bxs-edit-alt form-edit-input-icons q-ma-xs'></i>
                    </template>
                </q-input>
            </div>
            <div class="form-edit-establishment-inputs">
                <q-input
                    dark
                    class="q-mb-md"
                    color="orange-9"
                    v-model="newPassword"
                    :type="isPwd2 ? 'password' : 'text'"
                    label="Sua nova senha:"
                    lazy-rules
                    :rules="[rulesUser.required]">
                    <template v-slot:append>
                        <q-icon :name="isPwd2 ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd2 = !isPwd2" />
                    </template>
                    <template v-slot:prepend>
                        <i class='bx bxs-edit form-edit-input-icons q-ma-xs'></i>
                    </template>
                </q-input>
            </div>
            <div class="form-edit-establishment-inputs">
                <q-input
                    dark
                    class="q-mb-md"
                    color="orange-9"
                    v-model="repeatNewPassword"
                    :type="isPwd3 ? 'password' : 'text'"
                    label="Repita sua nova senha:"
                    lazy-rules
                    :rules="[rulesUser.required, v => (v === newPassword) || 'Senhas diferentes']">
                    <template v-slot:append>
                        <q-icon :name="isPwd3 ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd3 = !isPwd3" />
                    </template>
                    <template v-slot:prepend>
                        <i class='bx bxs-edit form-edit-input-icons q-ma-xs'></i>
                    </template>
                </q-input>
            </div>
            <q-btn
                class="q-mb-md q-mt-md"
                label="Salvar"
                type="submit" />
        </q-form>
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
#form-edit-password-user{
    font-family: "Fredoka", sans-serif;

    .q-form{
        width: 100%;

        .form-edit-establishment-inputs{
            display: flex;
            align-items: flex-start;

            .form-edit-input-icons{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 2rem;
                color: $orangeColor;

            }
            .q-input{
                width: 100%;

            }
        }
        .q-btn{
            height: 3rem;
            width: 100%;
            color: $whiteColorPrimary;
            background-color: $orangeColor;

        }
    }
}
</style>