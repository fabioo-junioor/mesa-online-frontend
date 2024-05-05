<script setup>
import { reactive, ref } from "vue";

const loginOrCadastro = ref(false);
const disabledButton = ref(true);
const dadosEstabelecimento = reactive({
  email: "",
  senha: "",
  senhaRepetida: "",
});
const efetuarLogin = () => {
  console.log("Logado!");
};
const efetuarCadastro = () => {
  if (dadosEstabelecimento.senhaRepetida != dadosEstabelecimento.senha) {
    console.log("Senha diferentes");
    return;
  }
  console.log("Cadastrado!");
};
</script>
<template>
  <div id="login-estabelecimento">
    <div class="login-left">
      <div class="login-left-logo">Mesa Online</div>
      <div class="login-left-form">
        <q-form @submit="efetuarLogin">
          <q-input
            square
            filled
            type="text"
            v-model="dadosEstabelecimento.email"
            label="Email"
          />
          <q-input
            square
            filled
            type="password"
            v-model="dadosEstabelecimento.senha"
            label="Senha"
          />
          <q-input
            v-if="loginOrCadastro"
            square
            filled
            type="password"
            :v-model="dadosEstabelecimento.senhaRepetida"
            label="Repita a Senha"
          />
          <div>
            <q-btn
              color="secondary"
              label="Entrar"
              type="submit"
              v-if="!loginOrCadastro"
              :disabled="disabledButton"
            />
            <q-btn
              v-else
              label="Cadastrar"
              type="submit"
              :disabled="disabledButton"
            />
          </div>
        </q-form>
        <div class="login-left-form-cadastrar">
          <a
            v-if="!loginOrCadastro"
            @click="loginOrCadastro = !loginOrCadastro"
            href="#"
            >Cadastrar-se</a
          >
          <a v-else @click="loginOrCadastro = !loginOrCadastro" href="#"
            >Voltar</a
          >
        </div>
      </div>
      <div class="login-left-midias">
        <a href="#">
          <i class="bx bxl-linkedin-square"></i>
        </a>
      </div>
    </div>
    <div class="login-right">
      <h2>Bem vindo!</h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");

#login-estabelecimento {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url("../../assets/imagens/background_page_establishment.jpg") no-repeat
      fixed center;
  background-size: cover;
  font-family: "Fredoka", sans-serif;
  background-color: green;
  height: calc(100vh - 4rem);
  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  .login-left {
    width: 30%;
    height: 70%;
    padding: 0.5rem;
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
    .login-left-form-cadastrar {
      text-align: center;

      a {
        color: #333;
        font-size: 1rem;

        &:hover {
          color: #1d976cbb;
        }
      }
    }
    .login-left-midias {
      display: flex;
      justify-content: flex-end;

      a {
        display: flex;
        align-items: center;
        margin: 0.3rem;
        text-decoration: none;

        i {
          color: #333;
          font-size: 1.8rem;

          &:hover {
            color: #1d976cbb;
          }
        }
      }
    }
  }
  .login-right {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("../../assets/imagens/background_page_establishment.jpg") no-repeat
        fixed center;
    background-size: cover;
    width: 45%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    h2 {
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
  #login-estabelecimento {
    .login-left {
      width: 40%;
    }
    .login-right {
      width: 50%;
    }
  }
}
@media only screen and (max-width: 720px) {
  #login-estabelecimento {
    padding: 0.5rem;

    .login-left {
      width: 45%;
    }
    .login-right {
      width: 50%;
    }
  }
}
@media only screen and (max-width: 481px) {
  #login-estabelecimento {
    flex-direction: column-reverse;

    .login-left {
      width: 100%;
      height: 75%;
    }
    .login-right {
      width: 100%;
      height: 20%;
    }
  }
}
@media only screen and (max-width: 360px) {
}
</style>