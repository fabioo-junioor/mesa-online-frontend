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
        <div class="cad-establishment">
            <div class="cad-establishment-img">
                <q-img 
                    src="../../assets/draw/undraw_hello.svg"
                    fit="contain" />
            </div>
            <div class="cad-establishment-forms">
                <FormEstablishment
                    class="form-establishment q-pt-xl q-pb-xl"
                    typeForm="cadEstablishment"
                    v-model:emailEstablishment="dataFormEstablishment.email"
                    v-model:password="dataFormEstablishment.password"
                    v-model:repeatPassword="dataFormEstablishment.repeatPassword"
                    @createEstablishment="createEstablishment" />
            </div>
        </div>
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

    .cad-establishment{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $darkColorSecondary;
        box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, .5);
        border-radius: 5px;
        width: 60%;
        height: 80%;

        .cad-establishment-img{
            width: 50%;
            height: 100%;
            border-radius: 5px;
            background-color: $orangeColor;

            .q-img{
                height: 100%;
                width: 100%;
                
            }
        }
        .cad-establishment-forms{
            display: flex;
            justify-content: center;
            width: 50%;
            height: 100%;

            .form-establishment{
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
        
                .q-form{
                    width: 100%;
                    
                }
            }
        }
    }
}
</style>