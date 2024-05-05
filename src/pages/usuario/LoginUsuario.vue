<script setup>
import { reactive, ref } from 'vue'
import { saveTokenUserStorage } from '../../config/utils/settingSession.js'

const loginOrCadastro = ref(false)
const dadosUsuario = reactive({
    email: '',
    senha: '',
    senhaRepetida: ''

})
const efetuarLoginOrCadastro = async () => {
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
  if(!loginOrCadastro.value){
      console.log('Logado!')

  }else{
    console.log('Cadastrado!')
    
  }
}
const efetuarLogin = () => {

}
const efetuarCadastro = () => {

}
const alterarForm = () => {
    loginOrCadastro.value = !loginOrCadastro.value

}
function verificaBotaoEntrar(){
    if((dadosUsuario.email != '') && (dadosUsuario.senha != '')){
        return true
    }
    return false

}
function verificaBotaoCadastrar(){
    if((dadosUsuario.email != '') && (dadosUsuario.senha != '') && (dadosUsuario.senhaRepetida != '')){
        if(dadosUsuario.senha === dadosUsuario.senhaRepetida){
            return true

        }
        return false

    }
    return false

}

</script>
<template>
    <div id="login-usuario">
        <div class="login-left">
            <div class="login-left-logo">Mesa Online</div>
            <div class="login-left-form">
                <q-form @submit="efetuarLoginOrCadastro">
                    <q-input
                        square filled
                        type="text"
                        label="Email"
                        v-model="dadosUsuario.email" />
                    <q-input
                        square filled
                        type="password"
                        label="Senha"
                        v-model="dadosUsuario.senha" />
                    <q-input
                        v-if="loginOrCadastro"
                        square filled
                        type="password"
                        label="Repita a Senha"
                        :v-model="dadosUsuario.senhaRepetida" />
                    <div>
                        <q-btn
                            color="secondary"
                            label="Entrar"
                            type="submit"
                            v-if="!loginOrCadastro" />
                        <q-btn
                            v-else
                            color="black"
                            label="Cadastrar"
                            type="submit" />
                    </div>
                </q-form>
                <div class="login-left-form-cadastrar">
                    <a v-if="!loginOrCadastro"
                        @click="alterarForm"
                        href="#">Cadastrar-se</a>
                    <a v-else
                        @click="alterarForm"
                        href="#">Voltar</a>
                </div>
            </div>
            <div class="login-left-midias">
                <a href="#">
                    <i class='bx bxl-instagram'></i>
                </a>
                <a href="#">
                    <i class='bx bxl-linkedin-square'></i>
                </a>
            </div>
        </div>
        <div class="login-right">
            <h2>Bem vindo!</h2>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');

    #login-usuario{
        background: linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .9)), url('../../assets/imagens/background_page_user.jpg') no-repeat fixed center;
        background-size: cover;
        font-family: "Fredoka", sans-serif;
        background-color: green;
        height: calc(100vh - 4rem);
        width: 100%;
        padding: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;

        .login-left{
            width: 30%;
            height: 70%;
            padding: .5rem;
            background-color: white;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .login-left-form{
                .q-form{
                    .q-input{
                        margin: 1rem 0;

                    }
                    .q-btn{
                        width: 100%;
                        height: 3rem;
                        margin: 0 0 1rem 0;
                        border-radius: 5px;
                        background-color: #1D976C;
                        border: none;

                        &:hover{
                            background-color: #1d976cce;
                        }
                    }
                }
            }
            .login-left-form-cadastrar{
                text-align: center;

                a{
                    color: #333;
                    font-size: 1rem;

                    &:hover{
                        color: #1d976cbb;
                        
                    }
                }            
            }            
            .login-left-midias{
                display: flex;
                justify-content: flex-end;

                a{
                    display: flex;
                    align-items: center;
                    margin: .3rem;
                    text-decoration: none;

                    i{
                        color: #333;
                        font-size: 1.8rem;

                        &:hover{
                            color: #1D976Cbb;

                        }
                    }
                }
            }
        }
        .login-right{
            background: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url('../../assets/imagens/background_page_user.jpg') no-repeat fixed center;
            background-size: cover;
            width: 45%;
            height: 70%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: .5rem;

            h2{
                color: white;

            }
        }        
    }
/*################################################*/
@media only screen and (max-width: 1560px) {

}
@media only screen and (max-width: 1200px) {

}
@media only screen and (max-width: 992px) {
    #login-usuario{
        .login-left{
            width: 40%;

        }
        .login-right{
            width: 50%;

        }
    }
}
@media only screen and (max-width: 720px) {
    #login-usuario{
        padding: .5rem;

        .login-left{
            width: 45%;

        }
        .login-right{
            width: 50%;

        }
    }
}
@media only screen and (max-width: 481px) {
    #login-usuario{
        flex-direction: column-reverse;

        .login-left{
            width: 100%;
            height: 75%;

        }
        .login-right{
            width: 100%;
            height: 20%;

        }
    }
}
@media only screen and (max-width: 360px) {
  
}
</style>