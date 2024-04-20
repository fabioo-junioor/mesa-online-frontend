<script setup>
import Sidebar from '../../components/Sidebar.vue'

import { reactive, ref } from 'vue'

const sidebar = reactive({
    sd: false
})

const showSidebar = () => {
    console.log(sidebar.sd)

}

</script>
<template>
    <div id="home-usuario">
        <div class="home-usuario-sidebar">
            <Sidebar
                nome="fabio" />
        </div>
        <div class="home-usuario-body">
            <h4>home usuario</h4>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #home-usuario{
        display: flex;
        min-height: calc(100vh - 4rem);

        .home-usuario-sidebar{
            min-width: 2rem;

        }
        .home-usuario-body{
            width: calc(100vw - 2rem);
            padding: 1rem;

        }
    }
</style>