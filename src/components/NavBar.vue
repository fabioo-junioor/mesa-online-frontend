<script setup>
import { getDadosUsuario, deleteDadosUsuario } from '../services/localStorage/settingSession.js';
import { ref, reactive, onMounted } from 'vue';

const leftDrawerOpen = ref(false);
const visibleToggle = ref(false);
const dadosPessoa = reactive({
  nome: "Anônimo",
  telefone: ''

});
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;

}
const verificaDadosUsuario = () => {
  if(getDadosUsuario()) {
    visibleToggle.value = true;
    return;

  }
}
const efeturarLogout = () => {
  deleteDadosUsuario();
  return location.reload();

}
onMounted(() => {
  verificaDadosUsuario();

})
</script>
<template>
  <div id="nav-bar">
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-dark text-white">
        <q-toolbar>
          <q-btn
            v-if="visibleToggle"
            dense
            flat
            round
            icon="menu"
            @click="toggleLeftDrawer" />

          <router-link to="/">
            <q-toolbar-title> Mesa Online </q-toolbar-title>
          </router-link>

          <div v-if="!visibleToggle" class="nav-bar-login-state">
            <q-btn-dropdown class="nav-bar-login" stretch flat label="Login">
              <q-list>
                <q-item clickable v-close-popup tabindex="0">
                  <q-item-section avatar>
                    <q-avatar color="dark" text-color="white">
                      <i class="bx bx-user"></i>
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <router-link to="/loginUsuario">Usuário</router-link>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup tabindex="0">
                  <q-item-section avatar>
                    <q-avatar color="dark" text-color="white">
                      <i class="bx bx-home"></i>
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <router-link to="/loginEstabelecimento">Estabelecimento</router-link>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown class="nav-bar-cadastrar" stretch flat label="Cadastrar">
              <q-list>
                <q-item clickable v-close-popup tabindex="0">
                  <q-item-section avatar>
                    <q-avatar color="dark" text-color="white">
                      <i class="bx bx-user"></i>
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <router-link to="/cadastroUsuario">Usuário</router-link>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup tabindex="0">
                  <q-item-section avatar>
                    <q-avatar color="dark" text-color="white">
                      <i class="bx bx-home"></i>
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <router-link to="/cadastroEstabelecimento">Estabelecimento</router-link>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div v-else class="nav-bar-login-state">
            <q-btn outline
              class="nav-bar-login-state-btn-sair"
              style="color: #negative"
              label="Sair"
              @click="efeturarLogout" />
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        class="bg-dark"
        v-model="leftDrawerOpen"
        side="left"
        overlay
        elevated>
        <div class="menu-sidebar">
          <div class="menu-sidebar-header">
            <img src="../assets/usuario/usuarioDefault.png" />
            <h4 id="sidebar-title">{{ dadosPessoa.nome }}</h4>
          </div>
          <div class="menu-sidebar-links">
            <i class="bx bx-home"></i>
            <router-link to="/homeUsuario">Inicio</router-link>
          </div>
          <div class="menu-sidebar-links">
            <i class="bx bx-search-alt"></i>
            <router-link to="/buscarEstabelecimento">Buscar</router-link>
          </div>
          <div class="menu-sidebar-links">
            <i class="bx bx-edit-alt"></i>
            <router-link to="/editarUsuario">Editar Perfil</router-link>
          </div>
          <div class="menu-sidebar-links">
            <i class="bx bxs-key"></i>
            <router-link to="/editarSenhaUsuario">Alterar Senha</router-link>
          </div>
        </div>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");

#nav-bar {
  font-family: "Fredoka", sans-serif;

  .q-toolbar{
    display: flex;
    justify-content: space-between;
    
    a{
      text-decoration: none;
      color: rgba(255, 255, 255, .8);

      &:hover{
        color: white;

      }
    }
  }
  .nav-bar-login-state{
    display: flex;
    height: 3rem;

    .nav-bar-cadastrar{
      background-color: $botaoVerde;

    }
  }
  .menu-sidebar {
    padding: 0.2rem;

    .menu-sidebar-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 0 2rem 0;
      border: 1px solid white;
      border-radius: 5px;
      background-color: rgb(20, 20, 30);

      img {
        max-height: 10rem;

      }
      #sidebar-title {
        padding: 0.3rem;
        margin: 0.1rem;
        font-size: 1.3rem;
        font-weight: 500;
        color: white;
      }
    }
    .menu-sidebar-links {
      display: flex;
      align-items: center;
      margin: 1rem 0;
      border: 1px solid white;
      border-radius: 5px;
      width: 100%;
      background-color: rgb(20, 20, 30);

      i {
        color: white;
        font-size: 1.5rem;
        padding: 0 0.5rem;
      }
      a {
        text-decoration: none;
        color: white;
        font-size: 1.1rem;
        width: 100%;
        padding: 0.5rem 0;
        cursor: pointer;
      }
    }
    .menu-sidebar-links:hover,
    .menu-sidebar-links:hover a,
    .menu-sidebar-links:hover i {
      background-color: white;
      color: rgb(20, 20, 30);
    }
  }
}

/*################################################*/
@media only screen and (max-width: 1560px) {
}
@media only screen and (max-width: 1200px) {
}
@media only screen and (max-width: 992px) {
}
@media only screen and (max-width: 720px) {
}
@media only screen and (max-width: 481px) {
}
@media only screen and (max-width: 360px) {
}
</style>