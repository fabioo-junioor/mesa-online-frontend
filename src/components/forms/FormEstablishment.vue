<script setup>
import { onMounted, reactive, ref } from 'vue';
import { fielsRequired, emailValidator } from '../../utils/inputValidators.js';

const emit = defineEmits(['loginEstablishment', 'createEstablishment']);
const props = defineProps(['typeForm']);
const isPwd1 = ref(true);
const isPwd2 = ref(true);
const typeFormEstablishment = ref(true);
const dataFormEstablishment = reactive({
    email: '',
    password: '',
    repeatPassword: '',
    rules: {
        required: v => fielsRequired(v) || 'Campo obrigatório',
        email: v => emailValidator(v) || 'Email inválido',
        equals: v => (v === dataFormEstablishment.password) || 'Senhas diferentes'

    }
})
const onSubmit = () => {
    const { email, password } = {...dataFormEstablishment};
    if(props.typeForm == 'loginEstablishment'){
        emit('loginEstablishment', {email, password});
        return;

    }
    emit('createEstablishment', {email, password});
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
                class="q-mb-md"
                filled
                color="teal"
                v-model="dataFormEstablishment.email"
                type="text"
                label="Seu e-mail:"
                lazy-rules
                :rules="[dataFormEstablishment.rules.email]" />
            <q-input
                class="q-mb-md"
                filled
                color="teal"
                v-model="dataFormEstablishment.password"
                :type="isPwd1 ? 'password' : 'text'"
                label="Sua senha:"
                lazy-rules
                :rules="[dataFormEstablishment.rules.required]">
                <template v-slot:append>
                    <q-icon :name="isPwd1 ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd1 = !isPwd1" />
                </template>
            </q-input>
            <q-input
                v-if="!typeFormEstablishment"
                class="q-mb-md"
                filled
                color="teal"
                v-model="dataFormEstablishment.repeatPassword"
                :type="isPwd2 ? 'password' : 'text'"
                label="Repita a senha:"
                lazy-rules
                :rules="[dataFormEstablishment.rules.required, dataFormEstablishment.rules.equals]">
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
                type="submit"
                color="teal" />
            <q-btn
                v-else
                class="q-mb-md"
                label="Cadastrar-se"
                type="submit"
                color="teal" />
            <div class="links-type-form-establishment q-pa-sm">
                <a v-if="typeFormEstablishment" href="#">
                    <router-link to="/cadastroEstabelecimento">Não tem uma conta?</router-link>
                </a>
                <a v-else href="#">
                    <router-link to="/loginEstabelecimento">Já tem uma conta?</router-link>
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

        }
        .links-type-form-establishment{
            width: 100%;
            text-align: center;
            
            a{
                text-decoration: underline;
                color: rgb(77, 77, 77);
                font-size: .9rem;
                
                &:hover{
                    color: black;
                }
            }
        }
    }
}
</style>