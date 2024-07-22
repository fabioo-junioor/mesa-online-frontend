<script setup>
import { reactive } from 'vue';
import { FormUser } from '../../components';

const dataFormUser = reactive({
    email: 'contato@gmail.com',
    password: '123',
    repeatPassword: '',
});
const createUser = () => {
    console.log('cadastrar ', dataFormUser);
}

</script>
<template>
    <div id="cad-user">
        <h4>Cadastrar Usuário</h4>
        <FormUser
            class="form-user q-pt-xl q-pb-xl"
            typeForm="cadUser"
            v-model:email="dataFormUser.email"
            v-model:password="dataFormUser.password"
            v-model:repeatPassword="dataFormUser.repeatPassword"
            @createUser="createUser" />
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
#cad-user{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
        url("../../assets/imagens/background_page_user.jpg") no-repeat fixed center;
    background-size: cover;
    height: calc(100vh - 3.1rem);
    font-family: "Fredoka", sans-serif;

    h4{
        width: 50%;
        text-align: center;
        padding: 1rem;
        background-color: white;
        box-shadow: 3px 3px 0px 0px #1d976cce;
        border-radius: 5px;

    }
    .form-user{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        box-shadow: 4px 4px 0px 0px #1d976cce;
        border-radius: 5px;

        .q-form{
            width: 100%;
            
        }
    }
}
</style>