<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import { useRoute } from 'vue-router'
import { saveDadosPossoa, saveDadosUsuario } from "../../config/utils/settingSession.js";
import { getDadosPessoaApi } from "../../config/utils/settingApi.js";
import Alert from '../../components/Alert.vue'
import MyInput from '../../components/UI/MyInput.vue'

const route = useRoute()
const loginOrCadastro = ref(true)
const urlApi = ref('')
const isPwd1 = ref(true)
const isPwd2 = ref(true)
const getAlert = reactive({
  isAlert: false,
  type: '',
  msg: ''

})
const dadosUsuario = reactive({
  email: null,
  senha: null,
  senhaRepetida: null

});
const efetuarLoginOrCadastro = async () => {
  await desactivateAlert()
  if (loginOrCadastro.value) {
    efetuarLogin()

  } else {
    if (verificaIgualdadeSenha()) {
      efetuarCadastro()
      return

    }
    await activateAlert('warning', 'Senhas diferentes!')
  }
};
const efetuarLogin = async () => {
  let dadosPessoaTemp = null
  const response = await fetch(urlApi.value+'loginUsuario', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        email: dadosUsuario.email,
        senha: dadosUsuario.senha
      })
  })
  const data = await response.json()
  if(data.msg == 'success'){
      saveDadosUsuario(data)
      dadosPessoaTemp = await getDadosPessoaApi(data.token, data.pkUsuario)
      saveDadosPossoa(dadosPessoaTemp)
      activateAlert('positive', 'Sucesso, aguarde')
      return setTimeout(() => {location.reload()}, '3000')

  }
  activateAlert('warning', data.msg)

};
const efetuarCadastro = async () => {
  const response = await fetch(urlApi.value+'usuario', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        email: dadosUsuario.email,
        senha: dadosUsuario.senha
      })
  })
  const data = await response.json()
  if(data.code == 201){
    await activateAlert('positive', data.msg)
    return setTimeout(() => {alterarFormulario()}, '3000')

  }
  await activateAlert('negative', data.msg)

}
const alterarFormulario = () => {
  loginOrCadastro.value = !loginOrCadastro.value
  
}
function verificaIgualdadeSenha() {
  if (dadosUsuario.senha === dadosUsuario.senhaRepetida) {
    return true

  }
  return false

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
watch(() => parseInt(route.params.cadU), (newCad, oldCad) => {
  loginOrCadastro.value = (newCad === 1) ? false : true

})
onMounted(() => {
  loginOrCadastro.value = (parseInt(route.params.cadU)) === 1 ? false : true
  urlApi.value = import.meta.env.VITE_ROOT_API

})
</script>
<template>
  <div id="login-usuario">
    <Alert 
      v-if="getAlert.isAlert"
      :type="getAlert.type"
      :msg="getAlert.msg" />
    <div class="login-usuario-body">
        <div v-if="loginOrCadastro" class="login-usuario-body-logo">Efetuar Login</div>
        <div v-else class="login-usuario-body-logo">Cadastrar Usuário</div>
        <div class="login-usuario-body-form">
            <q-form @submit="efetuarLoginOrCadastro">
                <MyInput 
                  v-model="dadosUsuario.email"
                  color="teal"
                  type="email"
                  label="Email"
                  :rules="[(val) => !!val || 'Preencha o campo']" />
                <MyInput 
                  v-model="dadosUsuario.senha"
                  color="teal"
                  label="Senha"
                  :type="isPwd1 ? 'password' : 'text'"
                  :isPwd="isPwd1"
                  :isType="1"
                  :rules="[(val) => !!val || 'Preencha o campo']"
                  @visiblePass="$event => (isPwd1 = !isPwd1)" />
                <MyInput 
                  v-if="!loginOrCadastro"
                  v-model="dadosUsuario.senhaRepetida"
                  color="teal"
                  label="Repita a senha"
                  :type="isPwd2 ? 'password' : 'text'"
                  :isPwd="isPwd2"
                  :isType="1"
                  :rules="[(val) => !!val || 'Preencha o campo']"
                  @visiblePass="$event => (isPwd2 = !isPwd2)" />
                <div>
                    <q-btn
                        v-if="loginOrCadastro"
                        color="secondary"
                        label="Entrar"
                        type="submit" />
                    <q-btn 
                        v-else 
                        color="black" 
                        label="Cadastrar" 
                        type="submit" />
                </div>
            </q-form>
            <div class="login-usuario-body-form-cadastrar">
                <a v-if="loginOrCadastro" @click="alterarFormulario" href="#"
                >Cadastrar-se</a>
                <a v-else @click="alterarFormulario" href="#">Voltar</a>
            </div>
        </div>
        <div class="login-usuario-body-midias">
            <a href="#">
                <i class="bx bxl-instagram"></i>
            </a>
            <a href="#">
                <i class="bx bxl-linkedin-square"></i>
            </a>
        </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");

#login-usuario {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url("../../assets/imagens/background_page_user.jpg") no-repeat fixed center;
  background-size: cover;
  font-family: "Fredoka", sans-serif;
  height: calc(100vh - 3.1rem);
  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  .login-usuario-body{
    width: 30%;
    height: 80%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 4px 4px 0px 0px #1d976cce;

    .login-usuario-body-logo{
        font-size: 2rem;
        padding: 1rem 0 0 0;
        text-align: center;
        
    }
    .login-usuario-body-form{
        width: 95%;

        .q-btn {
            width: 100%;
            height: 3rem;
            margin: 0 0 1rem 0;
            border-radius: 5px;

        }
        .login-usuario-body-form-cadastrar{
            text-align: center;
        
            a {
              color: $negative;
              font-size: 1rem;
        
              &:hover {
                color: $botaoVerde;

              }
            }
        }
    }
    .login-usuario-body-midias{
        display: flex;

        a {
          display: flex;
          align-items: center;
          margin: 0.3rem;
          text-decoration: none;
    
          i {
            color: $iconsCinza;
            font-size: 2rem;
    
            &:hover {
              color: $botaoVerde;
              
            }
          }
        }
      }
    }
  }
/*################################################*/
@media only screen and (max-width: 1560px) {
}
@media only screen and (max-width: 1200px) {
  #login-usuario{
    .login-usuario-body{
      width: 50%;

    }
  }
}
@media only screen and (max-width: 992px) {
  #login-usuario{
    .login-usuario-body{
      width: 60%;
      
    }
  }
}
@media only screen and (max-width: 720px) {
  #login-usuario{
    .login-usuario-body{
      width: 90%;
      
    }
  }
}
@media only screen and (max-width: 481px) {
  #login-usuario{
    .login-usuario-body{
      width: 100%;
      
    }
  }
}
@media only screen and (max-width: 360px) {
}
</style>