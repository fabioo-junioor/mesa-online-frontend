<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { FormEditEstablishment, FormEditSchedulesEstablishment, CardImageProfile } from '../../components';
import imagemProfileDefault from '../../assets/usuario/usuarioDefault.png';

const store = useStore();
const imageProfile = ref(null);
const dataFormEstablishment = reactive({
    name: '',
    phone: '',
    linkInstagram: '',
    linkFacebook: '',
    imageProfile: null

});
const dataFormSchedulesEstablishment = reactive([
    {
      sun: {
        morning: { open: '', close: '' },
        afternoon: { open: '', close: '' },
        night: { open: '', close: '' }
      }
    }
]);
const getDataEstablishment = () => {
    dataFormEstablishment.name = 'rock';
    dataFormEstablishment.phone = '66666666651';
    dataFormEstablishment.imageProfile = 'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/vue_js_logo-512.png'

}
const saveFormEstablishment = () => {
    console.log('edição salva ', dataFormEstablishment);
    store.commit('setAlertConfig', {message: 'Alteração realizada', type:'positive'});
    return;
}
const saveFormSchedulesEstablishment = () => {
    console.log('edição salva ', dataFormSchedulesEstablishment);
    store.commit('setAlertConfig', {message: 'Alteração nos horários realizado', type:'positive'});
    return;
}
onMounted(() => {
    getDataEstablishment();
    dataFormEstablishment.imageProfile = (dataFormEstablishment.imageProfile !== null) ? dataFormEstablishment.imageProfile :  imagemProfileDefault;

})
</script>
<template>
    <div id="edit-establishment" class="q-pa-sm">
        <div class="edit-establishment q-pa-md q-ma-md">
            <CardImageProfile
                class="q-mt-md q-mb-xl"
                :imgSrc="dataFormEstablishment.imageProfile"
                :nameUser="dataFormEstablishment.name"
                width="20rem"
                height="20rem"
                fit="contain" />
            <h4 class="q-mb-lg">Editar Estabelecimento</h4>
            <FormEditEstablishment
                class="form-edit-establishment q-mb-xl"
                v-model:name='dataFormEstablishment.name'
                v-model:phone='dataFormEstablishment.phone'
                v-model:instagram='dataFormEstablishment.linkInstagram'
                v-model:facebook='dataFormEstablishment.linkFacebook'
                v-model:imageProfile='imageProfile'
                @saveFormEstablishment='saveFormEstablishment' />
            <h4 class="q-mb-lg">Editar Horários</h4>
            <FormEditSchedulesEstablishment
                class="form-edit-schedules-establishment q-mb-lg"
                v-model:dataSchedules="dataFormSchedulesEstablishment"
                @saveFormSchedulesEstablishment="saveFormSchedulesEstablishment" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");

#edit-establishment{
    font-family: "Fredoka", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 3.5rem);

    .edit-establishment{
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
        .form-edit-establishment{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
    
            .q-form{
                width: 100%;
                
            }
        }
        .form-edit-schedules-establishment{
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
    #edit-establishment{
        h4{
            width: 70%;
            
        }
        .form-edit-establishment{
            width: 70%;

        }
    }
}
@media only screen and (max-width: 768px) {
    #edit-establishment{
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