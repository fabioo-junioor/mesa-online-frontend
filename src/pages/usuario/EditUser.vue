<script setup>
import { onMounted, reactive } from 'vue';
import { FormEditUser } from '../../components';

const dataFormUser = reactive({
    name: '',
    phone: '',
    linkInstagram: ''

});
const getDataUser = () => {
    dataFormUser.name = 'fabio';
    dataFormUser.phone = '66666666654';

}
const saveFormUser = () => {
    console.log('edição salva ', dataFormUser);

}
onMounted(() => {
    getDataUser();

})
</script>
<template>
    <div id="edit-user">
        <h4>Editar Usuário</h4>
        <FormEditUser
            class="form-edit-user q-pt-md"
            v-model:name='dataFormUser.name'
            v-model:phone='dataFormUser.phone'
            v-model:instagram="dataFormUser.linkInstagram"
            @saveFormUser='saveFormUser' />
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
#edit-user{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 3.1rem);
    font-family: "Fredoka", sans-serif;

    h4{
        width: 50%;
        font-size: 1.5rem;

    }
    .form-edit-user{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-top: 1px solid rgba(0, 0, 0, .5);

        .q-form{
            width: 100%;
            
        }
    }
}
</style>