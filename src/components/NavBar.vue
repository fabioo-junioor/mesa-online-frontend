<script setup>
import { getDadosUsuario, deleteDadosUsuario } from '../services/localStorage/settingSession.js';
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { CardImageProfile } from '../components';
import imagemProfileDefault from '../assets/usuario/usuarioDefault.png';

const router = useRouter();
const leftDrawerOpen = ref(true);
const visibleToggle = ref(true);
const dataUser = reactive({
  name: "Anônimo",
  phone: '',
  imageProfile: null

});
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;

}
const verificaDadosUsuario = () => {
  if(getDadosUsuario()) {
    visibleToggle.value = true;
    leftDrawerOpen.value = true;
    return;

  }
}
const efeturarLogout = () => {
  deleteDadosUsuario();
  return location.reload();

}
const loginUser = () => {
  router.push({name: 'loginUser'});
}
const cadUser = () => {
  router.push({name: 'cadUser'});
}
const loginEstablishment = () => {
  router.push({name: 'loginEstablishment'});
}
const cadEstablishment = () => {
  router.push({name: 'cadEstablishment'});
}
onMounted(() => {
  verificaDadosUsuario();
  dataUser.imageProfile = (dataUser.imageProfile !== null) ? 'teste' :  imagemProfileDefault;

})
</script>
<template>
  <div id="nav-bar">
    <q-layout view="hHh lpR lFf">
      <q-header bordered class="text-white">
        <q-toolbar>
          <q-btn
            v-if="visibleToggle"
            class="nav-bar-toggle"
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
                <q-item @click="loginUser" clickable v-close-popup tabindex="0">
                  <q-item-section avatar>
                    <q-avatar color="dark" text-color="white">
                      <i class="bx bx-user"></i>
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>Usuário</q-item-section>
                </q-item>
                <q-item @click="loginEstablishment" clickable v-close-popup tabindex="0">
                  <q-item-section avatar>
                    <q-avatar color="dark" text-color="white">
                      <i class="bx bx-home"></i>
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>Estabelecimento</q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown class="nav-bar-cadastrar" stretch flat label="Cadastrar">
              <q-list>
                <q-item @click="cadUser" clickable v-close-popup tabindex="0">
                  <q-item-section avatar>
                    <q-avatar color="dark" text-color="white">
                      <i class="bx bx-user"></i>
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>Usuário</q-item-section>
                </q-item>
                <q-item @click="cadEstablishment" clickable v-close-popup tabindex="0">
                  <q-item-section avatar>
                    <q-avatar color="dark" text-color="white">
                      <i class="bx bx-home"></i>
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>Estabelecimento</q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div v-else class="nav-bar-login-state">
            <q-btn outline
              class="nav-bar-login-state-btn-sair"
              label="Sair"
              @click="efeturarLogout" />
          </div>
        </q-toolbar>
      </q-header>
      <q-drawer
        style="background-color: #1c1c1c;"
        class="q-pa-md"
        v-model="leftDrawerOpen"
        side="left"
        overlay
        elevated>
        <div class="menu-sidebar">
          <div class="menu-sidebar-header">
            <CardImageProfile
              :imgSrc="dataUser.imageProfile"
              :nameUser="dataUser.name"
              width="15rem"
              height="14rem"
              fit="contain" />
          </div>
          <div class="menu-sidebar-links">
            <i class="bx bx-home"></i>
            <router-link to="/homeUsuario">Inicio</router-link>
          </div>
          <div class="menu-sidebar-links">
            <i class="bx bx-search-alt"></i>
            <router-link to="/searchEstablishment">Buscar</router-link>
          </div>
          <div class="menu-sidebar-links">
            <i class="bx bx-edit-alt"></i>
            <router-link to="/editUser">Editar Perfil</router-link>
          </div>
          <div class="menu-sidebar-links">
            <i class="bx bxs-key"></i>
            <router-link to="/editPasswordUser">Alterar Senha</router-link>
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

  .q-header{
    background-color: $navbar;
    height: 3.5rem;
    display: flex;
    align-items: center;
    
    .q-toolbar{
      display: flex;
      justify-content: space-between;
      
      a{
        text-decoration: none;
        color: $textOrange;

        &:hover{
          color: white;

        }
      }
      .nav-bar-toggle{
        color: $buttonOrange;
        font-size: 1rem;
        border: 1px solid $buttonOrange;

      }
    }
    .nav-bar-login-state{
      display: flex;
      height: 3rem;

      .nav-bar-cadastrar{
        background-color: $buttonOrange;

      }
      .nav-bar-login-state-btn-sair{
        color: $buttonOrange;
      }
    }
  }
  .menu-sidebar {
    .menu-sidebar-header {
      display: flex;
      flex-direction: column;
      align-items: center;

    }
    .menu-sidebar-links {
      display: flex;
      align-items: center;
      margin: 1rem 0;
      background-color: $background;
      border: 1px solid rgba(0, 0, 0, .5);
      border-radius: 5px;
      width: 100%;

      i {
        color: $iconOrange;
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
      color: $background;
      border-radius: 5px;

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