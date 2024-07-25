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
        <CardImageProfile
            class="q-mt-md q-mb-md"
            :imgSrc="dataFormUser.imageProfile"
            :nameUser="dataFormUser.name"
            width="20rem"
            height="20rem"
            fit="contain" />
        <h4>Editar Usuário</h4>
        <FormEditUser
            class="form-edit-user q-pt-md"
            v-model:name='dataFormUser.name'
            v-model:phone='dataFormUser.phone'
            v-model:instagram='dataFormUser.linkInstagram'
            v-model:imageProfile='imageProfile'
            @saveFormUser='saveFormUser' />
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
    height: calc(100vh - 3.5rem);

    h4{
        width: 50%;
        font-size: 1.5rem;
        color: white;

    }
    .form-edit-user{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-top: 1px solid white;

        .q-form{
            width: 100%;
            
        }
    }
}
</style>