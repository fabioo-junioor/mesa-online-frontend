<script setup>
import { getDadosUsuario, getDadosPessoa, saveDadosPossoa } from '../../config/utils/settingSession.js'
import { getDadosPessoaApi } from '../../config/utils/settingApi.js'
import { onMounted, reactive, ref } from 'vue'
import Alert from '../../components/Alert.vue'
import MyInput from '../../components/UI/MyInput.vue'

const urlApi = ref('')
const token = ref('')
const dataAtual = ref(new Date())
const dadosFormulario = reactive({
    fkUsuario: null,
    nome: '',
    telefone: '',
    dataNasc: ''

})
const getAlert = reactive({
  isAlert: false,
  type: '',
  msg: ''

})
const salvarAteracoes = async () => {
    var dadosPessoaTemp = null
    await desactivateAlert()/*
    const response = await fetch(urlApi.value+'pessoa', {
        headers: { Authorization: `Bearer ${token.value}`},
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify({
            pkUsuario: dadosFormulario.fkUsuario,
            nome: dadosFormulario.nome,
            telefone: removeCaracteres(dadosFormulario.telefone)
        })
    })
    const data = await response.json()
    if(data.code == 201){
        dadosPessoaTemp = await getDadosPessoaApi(token.value, dadosFormulario.fkUsuario)
        saveDadosPossoa(dadosPessoaTemp)
        buscaDadosUsuario()
        await activateAlert('positive', data.msg)
        return

    }
    await activateAlert('warning', data.msg)*/
    console.log(dadosFormulario.dataNasc)
    
}
const buscaDadosUsuario = () => {
    dadosFormulario.fkUsuario = getDadosUsuario() ? getDadosUsuario().pkUsuario : null
    dadosFormulario.nome = getDadosPessoa() ? getDadosPessoa().nome : ''
    dadosFormulario.telefone = getDadosPessoa() ? getDadosPessoa().telefone : ''
    token.value = getDadosUsuario().token

}
const removeCaracteres = str => str.replace(/[^a-zA-Z0-9]/g, "")
const formatData = data => data = dataAtual.value.getFullYear() + '/' + (dataAtual.value.getMonth() + 1) + '/' + dataAtual.value.getDate()

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
    dataAtual.value, dadosFormulario.dataNasc  = formatData(dataAtual.value)
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
            <h4>Editar usuário</h4>
            <q-form @submit="salvarAteracoes">
                <MyInput
                    v-model="dadosFormulario.nome"
                    color="teal"
                    type="text"
                    label="Nome"
                    :rules="[(val) => !!val || 'Preencha o campo']" />
                <MyInput
                    v-model="dadosFormulario.telefone"
                    color="teal"
                    type="text"
                    mask="(##) ####-####"
                    label="Telefone"
                    :rules="[(val) => !!val || 'Preencha o campo']" />
                <MyInput
                    v-model="dadosFormulario.dataNasc"
                    color="teal"
                    label="Data Nascimento"
                    :mask="dataAtual.value"
                    :rule="['date']"
                    :isType="2" />
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