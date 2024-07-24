<script setup>
import { reactive } from 'vue';
import { FormUser } from '../../components';

const dataFormUser = reactive({
    email: 'contato@bol.com',
    password: '333'
});
const loginUser = () => {
    console.log('login ', dataFormUser);

}

</script>
<template>
    <div id="login-user">
        <h4>Login Usuário</h4>
        <FormUser
            class="form-user q-pt-xl q-pb-xl"
            typeForm="loginUser"
            v-model:email="dataFormUser.email"
            v-model:password="dataFormUser.password"
            @loginUser="loginUser" />
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
#login-user{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 3.1rem);
    font-family: "Fredoka", sans-serif;

    h4{
        width: 50%;
        text-align: center;
        padding: 1rem;
        color: white;
        background-color: #1c1c1c;
        border: 1px solid rgba(0, 0, 0, .5);
        border-radius: 5px;

    }
    .form-user{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #1c1c1c;
        border: 1px solid rgba(0, 0, 0, .5);
        border-radius: 5px;

        .q-form{
            width: 100%;
            
        }
    }
}
</style>