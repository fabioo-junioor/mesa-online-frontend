<script setup>
</script>
<template>
    <div id="menu">
        <b-navbar toggleable="lg">
            <b-navbar-brand href="#">Mesa Online</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <div class="menu-links">
                <b-navbar-nav>
                    <b-nav-item>Inicio</b-nav-item>
                    <b-nav-item>Sobre</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
            </div>
            <div class="menu-usuario">
                <b-navbar-nav>
                    <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>Login</em>
                    </template>
                    <b-dropdown-item>Usuário</b-dropdown-item>
                    <b-dropdown-item>Estabelecimento</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item>Cadastre-se</b-nav-item>
                </b-navbar-nav>
            </div>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');

    #menu{
        width: 100vw;
        height: 4rem;
        display: flex;
        align-items: center;
        background: #1D976C;
        background: -webkit-linear-gradient(to right, #93F9B9, #1D976C);
        background: linear-gradient(to right, #93F9B9, #1D976C);

        font-family: "Fredoka", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "wdth" 100;

        .navbar{
            width: 100%;
            padding: 0;

            .navbar-brand{
                text-align: center;
                padding-left: .5rem;

            }            
            #nav-collapse{
                padding: .5rem 1rem;
                display: flex;
                justify-content: space-between;

                .menu-links{
                    .nav-link{
                        color: red !important;
                    }
                }

                .menu-usuario{
                    display: flex;

                }
            }
        }
    }
</style>