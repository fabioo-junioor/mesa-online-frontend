<script setup>
import { onMounted, reactive, ref } from 'vue';
import { fielsRequired, emailValidator } from '../../utils/inputValidators.js';

const emit = defineEmits(['loginEstablishment', 'cadEstablishment']);
const props = defineProps(['typeForm']);
const emailEstablishment = defineModel('email');
const passwordEstablishment = defineModel('password');
const repeatPasswordEstablishment = defineModel('repeatPassword');
const isPwd1 = ref(true);
const isPwd2 = ref(true);
const typeFormEstablishment = ref(true);
const rulesEstablishment = reactive({
    required: v => fielsRequired(v) || 'Campo obrigatório',
    email: v => emailValidator(v) || 'Email inválido'

});
const onSubmit = () => {
    if(props.typeForm == 'loginEstablishment'){
        emit('loginEstablishment');
        return;

    }
    emit('cadEstablishment');
    return;
    
}
onMounted(() => {
    typeFormEstablishment.value = (props.typeForm == 'loginEstablishment') || false;

})
</script>
<template>
    <div id="form-establishment" class="q-ma-sm q-pa-sm">
        <q-form @submit="onSubmit">
            <q-input
                dark
                class="q-mb-md"
                color="orange-9"
                v-model="emailEstablishment"
                type="text"
                label="Seu e-mail:"
                lazy-rules
                :rules="[rulesEstablishment.email]" />
            <q-input
                dark
                class="q-mb-md"
                color="orange-9"
                v-model="passwordEstablishment"
                :type="isPwd1 ? 'password' : 'text'"
                label="Sua senha:"
                lazy-rules
                :rules="[rulesEstablishment.required]">
                <template v-slot:append>
                    <q-icon :name="isPwd1 ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd1 = !isPwd1" />
                </template>
            </q-input>
            <q-input
                dark
                v-if="!typeFormEstablishment"
                class="q-mb-md"
                color="orange-9"
                v-model="repeatPasswordEstablishment"
                :type="isPwd2 ? 'password' : 'text'"
                label="Repita a senha:"
                lazy-rules
                :rules="[rulesEstablishment.required, v => (v === passwordEstablishment) || 'Senhas diferentes']">
                <template v-slot:append>
                    <q-icon :name="isPwd2 ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd2 = !isPwd2" />
                </template>
            </q-input>
            <q-btn
                v-if="typeFormEstablishment"
                class="q-mb-md"
                label="Entrar"
                type="submit" />
            <q-btn
                v-else
                class="q-mb-md"
                label="Cadastrar-se"
                type="submit" />
            <div class="links-type-form-establishment q-pa-sm">
                <a v-if="typeFormEstablishment" href="#">
                    <router-link to="/cadEstablishment">Não tem uma conta?</router-link>
                </a>
                <a v-else href="#">
                    <router-link to="/loginEstablishment">Já tem uma conta?</router-link>
                </a>
            </div>
        </q-form>
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
#form-establishment{
    font-family: "Fredoka", sans-serif;

    .q-form{
        width: 100%;

        .q-btn{
            height: 3rem;
            width: 100%;
            color: $whiteColorPrimary;
            background-color: $orangeColor;

        }
        .links-type-form-establishment{
            width: 100%;
            text-align: center;
            
            a{
                text-decoration: underline;
                color: $whiteColorPrimary;
                font-size: .9rem;
                
                &:hover{
                    color: $orangeColor;
                }
            }
        }
    }
}
</style>