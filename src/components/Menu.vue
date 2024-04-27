<script setup>
import { getTokenUser, getDataUser } from '../config/utils/settingSession.js'
import Sidebar from '../components/Sidebar.vue'
import { onMounted, reactive, ref } from "vue";

const visibleToggle = ref(false)
const dadosUser = reactive({
    id: null,
    nome: 'anonimo'
})

const verificaTokenUser = () => {
    if(getTokenUser() != null){
        visibleToggle = true
        return location.reload()

    }
    //console.log(getTokenUser())
}
const verificaDadosUser = () => {
    if(getDataUser() != null){
        dadosUser.id = 2
        dadosUser.nome = Fabio
        return location.reload()

    }
    //console.log(getDataUser())
}
onMounted(() => {
    verificaTokenUser()
    verificaDadosUser()
    console.log('Montou menu!', dadosUser.id, dadosUser.nome)

})

</script>
<template>
    <div id="menu">
        <b-navbar toggleable="lg">
            <b-navbar-brand href="#">Mesa Online</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <div class="menu-links" v-if="visibleToggle">
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
                <div class="menu-toggle-sidebar" v-else>
                    <b-button v-b-toggle.sidebar-variant>
                        <i class='bx bx-menu'></i>
                    </b-button>
                    <Sidebar :nome="dadosUser.nome" />
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
                        <b-dropdown-item>
                            <router-link to="/loginEstabelecimento">Estabelecimento</router-link>
                        </b-dropdown-item>
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
        background: #232526;

        font-family: "Fredoka", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "wdth" 100;
        
        .navbar{
            padding: 0;
            width: 100%;
            height: auto;

            .navbar-brand{
                text-align: center;
                color: white;

            }
            .navbar-toggler{
                background-color: white;
                
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
                                text-decoration: none;
                                color: white;
                                font-size: 1.2rem;
                                padding: 1rem .5rem;
                                
                                &:hover{
                                    border-bottom: 2px solid white;

                                }                                
                            }
                        }
                    }
                }
                .menu-toggle-sidebar{
                    .btn{
                        background-color: transparent;
                        border: 1px solid white;
                        padding: .2rem;

                        i{
                            color: white;
                            font-size: 2rem;

                        }
                        &:hover{
                            background-color: white;

                            i{
                                color: #232526;
                            }
                        }
                    }
                }
                .menu-usuario{
                    height: 100%;
                    display: flex;
                    align-items: center;

                    .navbar-nav:nth-child(1){
                        height: 100%;
                        display: flex;
                        align-items: center;

                        .nav-item{
                            a{
                                color: black;
                                text-decoration: none;
                                width: 100%;
                                
                                em{
                                    color: white;

                                    &:hover{
                                        border-bottom: 1px solid white;
                                    }
                                }
                                &:hover{
                                    border-bottom: 1px solid #232526;

                                }
                            }
                        }
                    }
                    .navbar-nav:nth-child(2){
                        .nav-item{
                            a{
                                text-decoration: none;
                                color: white;
                                font-size: 1.1rem;
                                padding: 1rem;
                                border-radius: 5px;
                                border: 1px solid white;
                                
                                &:hover{
                                    background-color: white;
                                    border-radius: 5px;
                                    border: 1px solid white;
                                    color: #232526;

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
@media only screen and (max-width: 720px) {
}
@media only screen and (max-width: 481px) {

}
@media only screen and (max-width: 360px) {
  
}
</style>