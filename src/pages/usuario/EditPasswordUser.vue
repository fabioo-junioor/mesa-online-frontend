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
    <div id="edit-password-user" class="q-pa-sm">
        <h4>Alterar Senha</h4>
        <FormEditPasswordUser
            class="form-edit-password-user q-pt-md"
            v-model:oldPassword='dataFormEditPasswordUser.oldPassword'
            v-model:newPassword='dataFormEditPasswordUser.newPassword'
            v-model:repeatNewPassword="dataFormEditPasswordUser.repeatNewPassword"
            @saveFormUser='saveFormUser' />
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
#edit-password-user{
    font-family: "Fredoka", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 3.5rem);

    h4{
        width: 50%;
        font-size: 1.5rem;
        color: white;

    }
    .form-edit-password-user{
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
/* Breakpoints - response*/
@media only screen and (max-width: 1560px) {
}
@media only screen and (max-width: 1200px) {
}
@media only screen and (max-width: 960px) {
    #edit-password-user{
        h4{
            width: 70%;
            
        }
        .form-edit-password-user{
            width: 70%;

        }
    }
}
@media only screen and (max-width: 768px) {
    #edit-password-user{
        h4{
            width: 100%;

        }
        .form-edit-password-user{
            width: 100%;
            
        }
    }
}
@media only screen and (max-width: 480px) {
}
@media only screen and (max-width: 320px) {
}
</style>