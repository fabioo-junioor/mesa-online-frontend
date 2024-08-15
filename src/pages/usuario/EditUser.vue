<script setup>
import { onMounted, reactive, ref } from 'vue';
import { FormEditUser, CardImageProfile } from '../../components';
import imagemProfileDefault from '../../assets/usuario/usuarioDefault.png';

const imageProfile = ref(null);
const dataFormUser = reactive({
    name: '',
    phone: '',
    linkInstagram: '',
    imageProfile: null

});
const getDataUser = () => {
    dataFormUser.name = 'fabio';
    dataFormUser.phone = '66666666651';
    dataFormUser.imageProfile = 'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/vue_js_logo-512.png'

}
const saveFormUser = () => {
    console.log('edição salva ', dataFormUser);

}
onMounted(() => {
    getDataUser();
    dataFormUser.imageProfile = (dataFormUser.imageProfile !== null) ? dataFormUser.imageProfile :  imagemProfileDefault;

})
</script>
<template>
    <div id="edit-user" class="q-pa-sm">
        <div class="edit-user q-pa-md q-ma-md">
            <CardImageProfile
                class="q-mt-md q-mb-md"
                :imgSrc="dataFormUser.imageProfile"
                :nameUser="dataFormUser.name"
                width="20rem"
                height="20rem"
                fit="contain" />
            <h4 class="q-mt-md q-mb-sm">Editar Usuário</h4>
            <FormEditUser
                class="form-edit-user q-pt-md"
                v-model:name='dataFormUser.name'
                v-model:phone='dataFormUser.phone'
                v-model:instagram='dataFormUser.linkInstagram'
                v-model:imageProfile='imageProfile'
                @saveFormUser='saveFormUser' />
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
#edit-user{
    font-family: "Fredoka", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 3.5rem);

    .edit-user{
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, .5);
        box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, .5);

        h4{
            width: 100%;
            font-size: 1.8rem;
            color: $whiteColorPrimary;
            border-bottom: 1px solid $whiteColorPrimary;
    
        }
        .form-edit-user{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
    
            .q-form{
                width: 100%;
                
            }
        }
    }
}
/* Breakpoints - response*/
@media only screen and (max-width: 1560px) {
}
@media only screen and (max-width: 1200px) {
}
@media only screen and (max-width: 960px) {
    #edit-user{
        h4{
            width: 70%;
            
        }
        .form-edit-user{
            width: 70%;

        }
    }
}
@media only screen and (max-width: 768px) {
    #edit-user{
        h4{
            width: 100%;

        }    
        .form-edit-user{
            width: 100%;

        }
    }
}
@media only screen and (max-width: 480px) {
}
@media only screen and (max-width: 320px) {
}
</style>