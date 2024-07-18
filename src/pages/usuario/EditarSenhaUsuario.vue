<script setup>
import { reactive } from 'vue';
import { FormEditPasswordUser } from '../../components';

const dataFormEditPasswordUser = reactive({
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: ''

});
const saveFormUser = () => {
    console.log('edição salva ', dataFormEditPasswordUser);

};
</script>
<template>
    <div id="edit-password-user">
        <h4>Editar Usuário</h4>
        <FormEditPasswordUser
            class="form-edit-password-user q-pt-xl q-pb-xl"
            v-model:oldPassword='dataFormEditPasswordUser.oldPassword'
            v-model:newPassword='dataFormEditPasswordUser.newPassword'
            v-model:repeatNewPassword="dataFormEditPasswordUser.repeatNewPassword"
            @saveFormUser='saveFormUser' />
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
#edit-password-user{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 3.1rem);
    font-family: "Fredoka", sans-serif;

    h4{
        width: 60%;
        text-align: center;
        padding: 1rem;
        background-color: white;
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, .2);
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 5px;

    }
    .form-edit-password-user{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60%;
        background-color: white;
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, .2);
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 5px;

        .q-form{
            width: 100%;
            
        }
    }
}
</style>