<script setup>
import { onMounted, reactive, ref } from 'vue'
import Alert from '../../components/Alert.vue';
import MyInput from '../../components/UI/MyInput.vue';

const dataAtual = ref(new Date());
const dadosFormulario = reactive({
    nome: '',
    telefone: '',
    dataNasc: ''

});
const getAlert = reactive({
  isAlert: false,
  type: '',
  msg: ''

});
const salvarAteracoes = async () => {
    console.log(dadosFormulario);

}
const buscaDadosPessoa = async () => {

}
const removeCaracteres = str => str.replace(/[^a-zA-Z0-9]/g, "");
const formatData = data => data = dataAtual.value.getFullYear() + '/' + (dataAtual.value.getMonth() + 1) + '/' + dataAtual.value.getDate();

const activateAlert = async (type, msg) => {
  getAlert.isAlert = true;
  getAlert.type = type;
  getAlert.msg = msg;

}
const desactivateAlert = async () => {
  getAlert.isAlert = false;
  getAlert.type = '';
  getAlert.msg = '';

}
onMounted(() => {
    dataAtual.value, dadosFormulario.dataNasc  = formatData(dataAtual.value);

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