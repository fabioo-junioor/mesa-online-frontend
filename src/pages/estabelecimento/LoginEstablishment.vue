<script setup>
import { reactive } from 'vue';
import { FormEstablishment } from '../../components';

const dataFormEstablishment = reactive({
    email: '',
    password: ''
});
const loginEstablishment = () => {
    console.log('login ', dataFormEstablishment);

}

</script>
<template>
    <div id="login-establishment">
        <h4>Login Estabelecimento</h4>
        <FormEstablishment
            class="form-establishment q-pt-xl q-pb-xl"
            typeForm="loginEstablishment"
            v-model:emailEstablishment="dataFormEstablishment.email"
            v-model:password="dataFormEstablishment.password"
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
    height: calc(100vh - 3.1rem);
    font-family: "Fredoka", sans-serif;

    h4{
        width: 50%;
        text-align: center;
        padding: 1rem;
        color: white;
        background-color: $backgroundForms;
        border: 1px solid rgba(0, 0, 0, .5);
        border-radius: 5px;

    }
    .form-establishment{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: $backgroundForms;
        border: 1px solid rgba(0, 0, 0, .5);
        border-radius: 5px;

        .q-form{
            width: 100%;
            
        }
    }
}
</style>