<script setup>
import Sidebar from '../../components/Sidebar.vue'

</script>
<template>
    <div id="editar-perfil-usuario">
        <div class="editar-perfil-usuario-sidebar">
            <Sidebar
                nome="fabio" />
        </div>
        <div class="editar-perfil-usuario-body">
            <h4>editar perfil</h4>
        </div>
    </div>
</template>
<style lang="scss" scoped>

    #editar-perfil-usuario{
        display: flex;
        height: calc(100vh - 4rem);

        .editar-perfil-usuario-sidebar{
            min-width: 2rem;

        }
        .editar-perfil-usuario-body{
            width: calc(100vw - 2rem);
            padding: 1rem;

        }
    }    
</style>