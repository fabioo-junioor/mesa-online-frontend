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
        <div class="edit-password-user q-pa-md q-ma-md">
            <h4 class="q-mb-sm">Alterar Senha</h4>
            <FormEditPasswordUser
                class="form-edit-password-user q-pt-md"
                v-model:oldPassword='dataFormEditPasswordUser.oldPassword'
                v-model:newPassword='dataFormEditPasswordUser.newPassword'
                v-model:repeatNewPassword="dataFormEditPasswordUser.repeatNewPassword"
                @saveFormUser='saveFormUser' />
        </div>
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

    .edit-password-user{
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
        .form-edit-password-user{
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