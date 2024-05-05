<script setup>
import { getTokenUser, getDataUser } from "../config/utils/settingSession.js";
import { ref, reactive, onMounted } from "vue";

const leftDrawerOpen = ref(false);
const visibleToggle = ref(true);
const dadosUser = reactive({
  id: null,
  nome: "anonimo",
});
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
const verificaTokenUser = () => {
  if (getTokenUser() != null) {
    visibleToggle = true;
    return location.reload();
  }
  //console.log(getTokenUser())
};
const verificaDadosUser = () => {
  if (getDataUser() != null) {
    dadosUser.id = 2;
    dadosUser.nome = Fabio;
    return location.reload();
  }
  //console.log(getDataUser())
};
const efeturarLogout = () => {
  console.log("Saiu!");
};
onMounted(() => {
  //verificaTokenUser()
  //verificaDadosUser()
  console.log("Montou menu!", dadosUser.id, dadosUser.nome);
});
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
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title> Mesa Online </q-toolbar-title>

          <q-btn-dropdown class="nav-bar-login" stretch flat label="Login">
            <q-list>
              <q-item clickable v-close-popup tabindex="0">
                <q-item-section avatar>
                  <q-avatar color="dark" text-color="white">
                    <i class="bx bx-user"></i>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <router-link to="/loginUsuario"> Usuário </router-link>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup tabindex="0">
                <q-item-section avatar>
                  <q-avatar color="dark" text-color="white">
                    <i class="bx bx-home"></i>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <router-link class="link" to="/loginEstabelecimento">
                    Estabelecimento
                  </router-link>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-toolbar>
      </q-header>

      <q-drawer
        class="bg-dark"
        v-model="leftDrawerOpen"
        side="left"
        overlay
        elevated
      >
        <div class="menu-sidebar">
          <div class="menu-sidebar-header">
            <img src="../assets/usuario/usuarioDefault.png" />
            <h4 id="sidebar-title">{{ dadosUser.nome }}</h4>
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