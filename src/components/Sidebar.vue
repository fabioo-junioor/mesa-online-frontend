<script setup>
defineProps(['nome'])

</script>
<template>
  <div id="sidebar">
    <div>
      <b-sidebar id="sidebar-variant" aria-labelledby="sidebar-title" bg-variant="dark">
        <div class="px-3 py-2">
          <div class="sidebar-header">
            <i class='bx bx-user-circle'></i>
            <h4 id="sidebar-title">{{ nome }}</h4>
          </div>
          <div class="sidebar-links">
            <i class='bx bx-home'></i>
            <router-link to="/homeUsuario">Inicio</router-link>
          </div>
          <div class="sidebar-links">
            <i class='bx bx-edit-alt'></i>
            <router-link to="/editarUsuario">Editar Perfil</router-link>
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
        align-items: center;
        margin: 0 0 2rem 0;
        border-bottom: 1px solid white;

        i{
          color: white;
          font-size: 1.6rem;
          padding: .3rem;
          border-right: 1px solid white;

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
        padding: 0 0 .5rem .4rem;

        i{
          color: white;
          font-size: 1.3rem;
          padding: 0 .5rem 0 0;

        }  
        a{
          text-decoration: none;
          color: white;
          font-size: 1.1rem;
          min-width: 50%;
  
        }
        &:hover{
          border-bottom: 1px solid white;
          min-width: 50%;

        }
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