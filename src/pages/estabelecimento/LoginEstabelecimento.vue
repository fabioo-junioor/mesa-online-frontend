<script setup>
import { FormEstablishment } from '../../components';

const loginEstablishment = (values) => {
    let dataFormEstablishment = values;
    console.log('login ', dataFormEstablishment);

}

</script>
<template>
    <div id="login-establishment">
        <h4>Login Estabelecimento</h4>
        <FormEstablishment
            class="form-establishment q-pt-xl q-pb-xl"
            typeForm="loginEstablishment"
            @loginEstablishment="loginEstablishment" />
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
#login-establishment{
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
        width: 60%;
        text-align: center;
        padding: 1rem;
        background-color: white;
        box-shadow: 3px 3px 0px 0px #1d976cce;
        border-radius: 5px;

    }
    .form-establishment{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60%;
        background-color: white;
        box-shadow: 4px 4px 0px 0px #1d976cce;
        border-radius: 5px;

        .q-form{
            width: 100%;
            
        }
    }
}
</style>