<script setup>
import { onMounted, reactive, ref } from 'vue';
import { fielsRequired, phoneValidator } from '../../utils/inputValidators.js';

const emit = defineEmits(['saveFormEstablishment']);
const nameEstablishment = defineModel('name');
const phoneEstablishment = defineModel('phone');
const linkInstagram = defineModel('instagram');
const linkFacebook = defineModel('facebook');
const imageProfile = defineModel('imageProfile');
const rulesEstablishment = reactive({
    required: v => fielsRequired(v) || 'Campo obrigatório',
    phone: v => phoneValidator(v) || 'Numero incorreto'
    
});
const onSubmit = () => {
    emit('saveFormEstablishment');

}

</script>
<template>
    <div id="form-edit-establishment">
        <q-form @submit="onSubmit">
            <div class="form-edit-establishment-inputs">
                <q-file
                    dark
                    class="q-mb-md"
                    v-model="imageProfile"
                    label="Adicionar nova imagem"
                    color="orange-9"
                    max-files="1">
                        <template v-if="imageProfile" v-slot:append>
                            <q-icon name="cancel" 
                                @click.stop.prevent="imageProfile = null"
                                class="cursor-pointer" />
                        </template>
                        <template v-slot:prepend>
                            <i class='bx bxs-image-add q-ma-xs'></i>
                        </template>
                    </q-file>
            </div>
            <div class="form-edit-establishment-inputs">
                <q-input
                    dark
                    class="q-mb-md"
                    color="orange-9"
                    v-model="nameEstablishment"
                    type="text"
                    label="Nome do estabelecimento:"
                    lazy-rules
                    :rules="[rulesEstablishment.required]">
                    <template v-slot:prepend>
                        <i class='bx bxs-user q-ma-xs'></i>
                    </template>
                </q-input>
            </div>
            <div class="form-edit-establishment-inputs">
                <q-input
                    dark
                    class="q-mb-md"
                    color="orange-9"
                    v-model="phoneEstablishment"
                    type="tel"
                    label="Telefone:"
                    lazy-rules
                    mask="(##) ####-#####"
                    :rules="[rulesEstablishment.phone]">
                    <template v-slot:prepend>
                        <i class='bx bxs-phone q-ma-xs'></i>
                    </template>    
                </q-input>
            </div>
            <div class="form-edit-establishment-inputs">
                <q-input
                    dark
                    class="q-mb-md"
                    color="orange-9"
                    v-model="linkInstagram"
                    type="url"
                    label="Link do instagram:"
                    lazy-rules>
                    <template v-slot:prepend>
                        <i class='bx bxl-instagram-alt q-ma-xs'></i>
                    </template>
                </q-input>
            </div>
            <div class="form-edit-establishment-inputs">
                <q-input
                    dark
                    class="q-mb-md"
                    color="orange-9"
                    v-model="linkFacebook"
                    type="url"
                    label="Link do facebook:"
                    lazy-rules>
                    <template v-slot:prepend>
                        <i class='bx bxl-facebook-square q-ma-xs'></i>
                    </template>
                </q-input>
            </div>
            <q-btn
                class="q-mb-md q-mt-md"
                label="Salvar"
                type="submit" />
        </q-form>
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");

#form-edit-establishment{
    font-family: "Fredoka", sans-serif;

    .q-form{
        width: 100%;

        .form-edit-establishment-inputs{
            display: flex;
            align-items: flex-start;

            i{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 2rem;
                color: $orangeColor;

            }
            .q-input, .q-file{
                width: 100%;

            }
        }
        .q-btn{
            height: 3rem;
            width: 100%;
            color: $whiteColorPrimary;
            background-color: $orangeColor;

        }
    }
}
</style>