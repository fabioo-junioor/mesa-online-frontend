<script setup>
import { getDadosUsuario, deleteDadosUsuario } from '../services/localStorage/settingSession.js';
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { CardImageProfile, AlertChangedConfiguration, AlertInfoUser } from '../components';
import imagemProfileDefault from '../assets/usuario/usuarioDefault.png';

const router = useRouter();
const store = useStore();
const leftDrawerOpen = ref(false);
const visibleToggle = ref(true);
const typeUser = ref(true);
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

    store.commit('setAlertInfoUser', {message: 'Bem vindo ' + dataUser.name, avatar:'https://cdn.quasar.dev/img/boy-avatar.png'});
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
    <q-layout view="lHh LpR lFf">
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
        dark
        style="background-color: #222831;"
        class="q-pa-md"
        v-model="leftDrawerOpen"
        bordered>
        <div class="menu-sidebar">
          <div class="menu-sidebar-header">
            <CardImageProfile
              :imgSrc="dataUser.imageProfile"
              :nameUser="dataUser.name"
              width="15rem"
              height="14rem"
              fit="contain" />
          </div>
          <div class="type-user" v-if="typeUser">
            <div class="menu-sidebar-links">
              <i class="bx bx-home"></i>
              <router-link to="/user/homeUser">Inicio</router-link>
            </div>
            <div class="menu-sidebar-links">
              <i class="bx bx-search-alt"></i>
              <router-link to="/user/searchEstablishment">Buscar</router-link>
            </div>
            <div class="menu-sidebar-links">
              <i class="bx bx-edit-alt"></i>
              <router-link to="/user/editUser">Editar Perfil</router-link>
            </div>
            <div class="menu-sidebar-links">
              <i class="bx bxs-key"></i>
              <router-link to="/user/editPasswordUser">Alterar Senha</router-link>
            </div>
          </div>
          <div class="type-user" v-else>
            <div class="menu-sidebar-links">
              <i class="bx bx-home"></i>
              <router-link to="/establishment/homeEstablishment">Inicio</router-link>
            </div>
            <div class="menu-sidebar-links">
              <i class='bx bxs-dashboard'></i>
              <router-link to="/establishment/dashboardEstablishment">Dashboard</router-link>
            </div>
          </div>
        </div>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
      <AlertChangedConfiguration 
        v-if="store.getters.getAlertConfig.isAlert" />
      <AlertInfoUser
        v-if="store.getters.getAlertInfoUser.isAlert" />
    </q-layout>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");

#nav-bar {
  font-family: "Fredoka", sans-serif;

  .q-header{
    background-color: $darkColorSecondary;
    height: 3.5rem;
    display: flex;
    align-items: center;
    
    .q-toolbar{
      display: flex;
      justify-content: space-between;
      
      a{
        text-decoration: none;
        color: $orangeColor;

        &:hover{
          color: $whiteColorPrimary;

        }
      }
      .nav-bar-toggle{
        color: $orangeColor;
        font-size: 1rem;
        border: 1px solid $orangeColor;

      }
    }
    .nav-bar-login-state{
      display: flex;
      height: 3rem;

      .nav-bar-cadastrar{
        background-color: $orangeColor;

      }
      .nav-bar-login-state-btn-sair{
        color: $orangeColor;
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
      background-color: $darkColorPrimary;
      border: 1px solid rgba(0, 0, 0, .5);
      border-radius: 5px;
      width: 100%;

      i {
        color: $orangeColor;
        font-size: 1.5rem;
        padding: 0 0.5rem;

      }
      a {
        text-decoration: none;
        color: $whiteColorPrimary;
        font-size: 1.1rem;
        width: 100%;
        padding: 0.5rem 0;
        cursor: pointer;

      }
    }
    .menu-sidebar-links:hover,
    .menu-sidebar-links:hover a,
    .menu-sidebar-links:hover i {
      background-color: $whiteColorPrimary;
      color: black;
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