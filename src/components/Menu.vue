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
                        <b-nav-item>
                            <router-link to="/">Inicio</router-link>
                        </b-nav-item>
                            <b-nav-item>
                                <router-link to="#">Sobre</router-link>
                            </b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                </div>
                <div class="menu-usuario">
                    <b-navbar-nav>
                        <b-nav-item-dropdown>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>Login</em>
                        </template>
                        <b-dropdown-item>
                            <router-link to="/loginUsuario">Usuário</router-link>
                        </b-dropdown-item>
                        <b-dropdown-item>Estabelecimento</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                    <b-navbar-nav>
                        <b-nav-item>
                            <router-link to="#">Cadastrar-se</router-link>
                        </b-nav-item>
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
        min-height: 4rem;
        display: flex;
        padding: .2rem 2rem;
        background: #1D976C;
        background: -webkit-linear-gradient(to right, #93F9B9, #1D976C);
        background: linear-gradient(to right, #93F9B9, #1D976C);

        font-family: "Fredoka", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "wdth" 100;
        
        a{
            text-decoration: none;
            color: black;

        }
        .navbar{
            padding: 0;
            width: 100%;

            .navbar-brand{
                text-align: center;

            }            
            #nav-collapse{
                height: 100%;
                display: flex;
                justify-content: space-between;
                padding: 0 0 0 1rem;

                .menu-links{
                    height: 100%;
                    display: flex;
                    align-items: center;

                    .navbar-nav{
                        height: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;

                        .nav-item{
                            height: 100%;
                            display: flex;
                            align-items: center;

                            a{
                                padding: 1rem .5rem;
                                border-radius: 5px;
                                background-color: rgba(255, 255, 255, .5);
                                
                                &:hover{
                                    background-color: rgba(255, 255, 255, 1);
                                    border-radius: 5px;
                                }
                                
                            }
                        }
                    }
                }
                .menu-usuario{
                    height: 100%;
                    display: flex;
                    align-items: center;

                    .navbar-nav{
                        height: 100%;
                        display: flex;
                        align-items: center;

                    }
                    .navbar-nav:nth-child(2){
                        .nav-item{
                            a{
                                padding: 1rem;
                                background-color: rgba(255, 255, 255, .8);
                                border-radius: 5px;
                                
                                &:hover{
                                    background-color: rgba(255, 255, 255, 1);
                                    border-radius: 5px;

                                }
                            }
                        }
                    }
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
    #menu{
        padding: 0 .2rem;

        .navbar{
            #nav-collapse{
                height: auto;
                flex-direction: column;
                padding: 0;

                .menu-links{
                    width: 100%;
                    height: auto;
                    flex-direction: column;
                    align-items: flex-start;
                    
                    .navbar-nav{
                        width: 100%;
                        height: auto;
                        flex-direction: column;
                        align-items: flex-start;

                        .nav-item{
                            width: 100%;
                            height: auto;
                            margin: .5rem 0;
                            flex-direction: column;
                            align-items: flex-start;

                            a{
                                padding: .5rem 1rem;

                            }
                        }
                    }
                }
                .menu-usuario{
                    width: 100%;
                    flex-direction: column;
                    align-items: flex-start;

                    .navbar-nav{
                        width: 100%;
                        padding: 0 0 0 .2rem;
                        align-items: flex-start;

                        .nav-item{
                            width: 100%;

                        }
                    }
                    .navbar-nav:nth-child(2){
                        .nav-item{
                            margin: .2rem 0;
                            
                            a{
                                padding: .5rem 1rem;

                            }
                        }
                    }
                }
            }
        }
    }    
}
@media only screen and (max-width: 481px) {

}
@media only screen and (max-width: 360px) {
  
}
</style>