<script setup>
import { reactive } from 'vue';
import { FormEstablishment } from '../../components';

const dataFormEstablishment = reactive({
    email: '',
    password: '',
    repeatPassword: ''
});
const createEstablishment = () => {
    console.log('cadastrar ', dataFormEstablishment);
}

</script>
<template>
    <div id="cad-establishment">
        <h4>Cadastrar Estabelecimento</h4>
        <FormEstablishment
            class="form-establishment q-pt-xl q-pb-xl"
            typeForm="cadEstablishment"
            v-model:emailEstablishment="dataFormEstablishment.email"
            v-model:password="dataFormEstablishment.password"
            v-model:repeatPassword="dataFormEstablishment.repeatPassword"
            @createEstablishment="createEstablishment" />
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
#cad-establishment{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
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