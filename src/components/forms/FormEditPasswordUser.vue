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
    <div id="form-edit-password-user" class="q-ma-sm q-pa-sm">
        <q-form @submit="onSubmit">
            <q-input
                class="q-mb-md"
                filled
                color="teal"
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
            </q-input>
            <q-input
                class="q-mb-md"
                filled
                color="teal"
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
            </q-input>
            <q-input
                class="q-mb-md"
                filled
                color="teal"
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
            </q-input>
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
#form-edit-password-user{
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