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
        <div class="login-establishment">
            <div class="login-establishment-img">
                <q-img 
                    src="../../assets/draw/undraw_hello.svg"
                    fit="contain" />
            </div>
            <div class="login-establishment-forms">
                <FormEstablishment
                    class="form-establishment q-pt-xl q-pb-xl"
                    typeForm="loginEstablishment"
                    v-model:emailEstablishment="dataFormEstablishment.email"
                    v-model:password="dataFormEstablishment.password"
                    @loginEstablishment="loginEstablishment" />
            </div>
        </div>
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

    .login-establishment{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $darkColorSecondary;
        box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, .5);
        border-radius: 5px;
        width: 60%;
        height: 80%;

        .login-establishment-img{
            width: 50%;
            height: 100%;
            border-radius: 5px;
            background-color: $orangeColor;

            .q-img{
                height: 100%;
                width: 100%;
                
            }
        }
        .login-establishment-forms{
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