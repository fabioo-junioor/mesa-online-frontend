<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import { useRoute } from 'vue-router'
import { saveTokenUser } from "../../config/utils/settingSession.js";

const loginOrCadastro = ref(true)
const inputRef = ref(null)
const router = useRoute()
const dadosEstabelecimento = reactive({
  email: null,
  senha: null,
  senhaRepetida: null

});
const efetuarLoginOrCadastro = async () => {
  if (loginOrCadastro.value) {
    efetuarLogin();
  } else {
    if (verificaIgualdadeSenha()) {
      efetuarCadastro();
      return

    }
    console.log("Senhas diferentes!")

  }
};
const efetuarLogin = () => {
  console.log("Logado!")

  /*
    try{
        const response = await fetch(`http://localhost:8000/loginUsuario`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(dadosUsuario)
        })
        const data = await response.json()

        if(data){
            console.log(data)
            //saveTokenUserStorage(data)

        }
  }catch(e){
    console.log('Error', e)

  }*/
};
const efetuarCadastro = () => {
  console.log("Cadastro!")

};
const alterarFormulario = () => {
  loginOrCadastro.value = !loginOrCadastro.value
  inputRef.value.resetValidation()
  
}
function verificaIgualdadeSenha() {
  if (dadosEstabelecimento.senha === dadosEstabelecimento.senhaRepetida) {
    return true

  }
  return false

}
watch(() => parseInt(router.params.cadE), (newCad, oldCad) => {
  loginOrCadastro.value = (newCad === 1) ? false : true

})
onMounted(() => {
  loginOrCadastro.value = (parseInt(router.params.cadE) === 1) ? false : true

})
</script>
<template>
  <div id="login-estabelecimento">
    <div class="login-estabelecimento-body">
        <div v-if="loginOrCadastro" class="login-estabelecimento-body-logo">Efetuar Login</div>
        <div v-else class="login-estabelecimento-body-logo">Cadastrar Estabelecimento</div>
        <div class="login-estabelecimento-body-form">
            <q-form @submit="efetuarLoginOrCadastro">
                <q-input
                square
                filled
                ref="inputRef"
                type="text"
                label="Email"
                v-model="dadosEstabelecimento.email"
                :rules="[(val) => !!val || 'Preencha o campo']" />
                <q-input
                square
                filled
                ref="inputRef"
                type="password"
                label="Senha"
                v-model="dadosEstabelecimento.senha"
                :rules="[(val) => !!val || 'Preencha o campo']" />
                <q-input
                v-if="!loginOrCadastro"
                square
                filled
                ref="inputRef"
                type="password"
                label="Repita a Senha"
                v-model="dadosEstabelecimento.senhaRepetida"
                :rules="[(val) => !!val || 'Preencha o campo']" />
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
            <div class="login-estabelecimento-body-form-cadastrar">
                <a v-if="loginOrCadastro" @click="alterarFormulario" href="#"
                >Cadastrar-se</a>
                <a v-else @click="alterarFormulario" href="#">Voltar</a>
            </div>
        </div>
        <div class="login-estabelecimento-body-midias">
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

#login-estabelecimento {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url("../../assets/imagens/background_page_establishment.jpg") no-repeat fixed center;
  background-size: cover;
  font-family: "Fredoka", sans-serif;
  height: calc(100vh - 3.1rem);
  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  .login-estabelecimento-body{
    width: 30%;
    height: 80%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 4px 4px 0px 0px #1d976cce;

    .login-estabelecimento-body-logo{
        font-size: 2rem;
        padding: 1rem 0 0 0;
        text-align: center;
        
    }
    .login-estabelecimento-body-form{
        width: 95%;

        .q-input {
            margin: 1rem 0;

        }
        .q-btn {
            width: 100%;
            height: 3rem;
            margin: 0 0 1rem 0;
            border-radius: 5px;

        }
        .login-estabelecimento-body-form-cadastrar{
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
    .login-estabelecimento-body-midias{
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
  #login-estabelecimento{
    .login-estabelecimento-body{
      width: 50%;

    }
  }
}
@media only screen and (max-width: 992px) {
  #login-estabelecimento{
    .login-estabelecimento-body{
      width: 60%;
      
    }
  }
}
@media only screen and (max-width: 720px) {
  #login-estabelecimento{
    .login-estabelecimento-body{
      width: 90%;
      
    }
  }
}
@media only screen and (max-width: 481px) {
  #login-estabelecimento{
    .login-estabelecimento-body{
      width: 100%;
      
    }
  }
}
@media only screen and (max-width: 360px) {
}
</style>