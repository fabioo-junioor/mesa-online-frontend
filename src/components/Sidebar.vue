<script setup>
defineProps(['nome'])

</script>
<template>
  <div id="sidebar">
    <div>
      <b-sidebar id="sidebar-variant" aria-labelledby="sidebar-title" bg-variant="dark">
        <div class="px-3 py-2">
          <div class="sidebar-header">
            <img src="../assets/usuario/usuarioDefault.png" />
            <h4 id="sidebar-title">{{ nome }}</h4>
          </div>
          <div class="sidebar-links">
            <i class='bx bx-home'></i>
            <router-link to="/homeUsuario">Inicio</router-link>
          </div>
          <div class="sidebar-links">
            <i class='bx bx-search-alt'></i>
            <router-link to="/buscarEstabelecimento">Buscar</router-link>
          </div>
          <div class="sidebar-links">
            <i class='bx bx-edit-alt'></i>
            <router-link to="/editarUsuario">Editar Perfil</router-link>
          </div>
          <div class="sidebar-links">
            <i class='bx bx-log-out'></i>
            <a @click="$emit('efeturarLogout')">Sair</a>
          </div>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");

  #sidebar {
    font-family: "Fredoka", sans-serif;

    .b-sidebar-body{      
      .sidebar-header{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 0 2rem 0;
        border: 1px solid white;
        border-radius: 5px;
        background-color: rgb(20, 20, 30);

        img{
          max-height: 10rem;

        }
        #sidebar-title{
          padding: .3rem;
          margin: .1rem;
          font-size: 1.3rem;
          font-weight: 500;
          color: white;

        }
      }
      .sidebar-links{
        display: flex;
        align-items: center;
        margin: 1rem 0;
        border: 1px solid white;
        border-radius: 5px;
        width: 100%;
        background-color: rgb(20, 20, 30);

        i{
          color: white;
          font-size: 1.5rem;
          padding: 0 .5rem;

        }  
        a{
          text-decoration: none;
          color: white;
          font-size: 1.1rem;
          width: 100%;
          padding: .5rem 0;
          cursor: pointer;
  
        }
      }
      .sidebar-links:hover,
      .sidebar-links:hover a,
      .sidebar-links:hover i{
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