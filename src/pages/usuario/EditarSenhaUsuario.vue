<script setup>
import { getDadosUsuario } from '../../config/utils/settingSession.js'
import { onMounted, reactive, ref } from 'vue'
import Alert from '../../components/Alert.vue'
import MyInput from '../../components/UI/MyInput.vue'

const urlApi = ref('')
const token = ref('')
const isPwd1 = ref(true)
const isPwd2 = ref(true)
const isPwd3 = ref(true)
const dadosFormulario = reactive({
    pkUsuario: null,
    senhaAtual: null,
    senhaNova: null,
    senhaNovaRepetida: null

})
const getAlert = reactive({
  isAlert: false,
  type: '',
  msg: ''

})
const salvarAteracoesSenha = async () => {
    await desactivateAlert()
    if(verificaIgualdadeSenha()){
        const response = await fetch(urlApi.value+'usuario', {
            headers: { Authorization: `Bearer ${token.value}`},
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify({
                pkUsuario: dadosFormulario.pkUsuario,
                senhaAtual: dadosFormulario.senhaAtual,
                senhaNova: dadosFormulario.senhaNova
            })
        })
        const data = await response.json()
        if(data.code === 201){
            await activateAlert('positive', data.msg)
            return setTimeout(() => {location.reload()}, '3000')
    
        }
        await activateAlert('warning', data.msg)

    }
    await activateAlert('warning', 'Repetir senha corretamente')
    
}
function verificaIgualdadeSenha() {
  if (dadosFormulario.senhaNova === dadosFormulario.senhaNovaRepetida) {
    return true

  }
  return false

}
const buscaDadosUsuario = () => {
    token.value = getDadosUsuario().token
    dadosFormulario.pkUsuario = getDadosUsuario().pkUsuario

}
const activateAlert = async (type, msg) => {
  getAlert.isAlert = true
  getAlert.type = type
  getAlert.msg = msg

}
const desactivateAlert = async () => {
    getAlert.isAlert = false
    getAlert.type = ''
    getAlert.msg = ''

}
onMounted(() => {
    urlApi.value = import.meta.env.VITE_ROOT_API
    buscaDadosUsuario()

})
</script>
<template>
    <div id="editar-usuario">
        <Alert 
            v-if="getAlert.isAlert"
            :type="getAlert.type"
            :msg="getAlert.msg" />
        <div class="editar-usuario-formulario">
            <h4>Alterar senha</h4>
            <q-form @submit="salvarAteracoesSenha">
                <MyInput 
                    v-model="dadosFormulario.senha"
                    color="teal"
                    label="Senha Atual"
                    :type="isPwd1 ? 'password' : 'text'"
                    :isPwd="isPwd1"
                    :isType="1"
                    :rules="[(val) => !!val || 'Preencha o campo']"
                    @visiblePass="$event => (isPwd1 = !isPwd1)" />
                <MyInput 
                    v-model="dadosFormulario.senhaNova"
                    color="teal"
                    label="Nova Senha"
                    :type="isPwd2 ? 'password' : 'text'"
                    :isPwd="isPwd2"
                    :isType="1"
                    :rules="[(val) => !!val || 'Preencha o campo']"
                    @visiblePass="$event => (isPwd2 = !isPwd2)" />
                <MyInput 
                    v-model="dadosFormulario.senhaNovaRepetida"
                    color="teal"
                    label="Repita a Nova Senha"
                    :type="isPwd3 ? 'password' : 'text'"
                    :isPwd="isPwd3"
                    :isType="1"
                    :rules="[(val) => !!val || 'Preencha o campo']"
                    @visiblePass="$event => (isPwd3 = !isPwd3)" />
                <div>
                    <q-btn
                        color="secondary"
                        label="Salvar"
                        type="submit" />
                </div>
            </q-form>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");

    #editar-usuario{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 3.1rem);
        padding: 1rem;
        font-family: "Fredoka", sans-serif;
        background-color: $background;

        .editar-usuario-formulario{
            box-shadow: 4px 4px 0px 0px black;
            background-color: white;
            width: 50%;
            padding: 1rem 0;
            display: flex;
            flex-direction: column;
            align-items: center;

            h4{
                color: $dark;
                padding: 1rem 0;

            }
            .q-form{
                width: 100%;
                padding: .5rem;

            }
            .q-btn{
                width: 100%;
                height: 3rem;
                margin: 2rem 0;

            }
        }
    }
</style>