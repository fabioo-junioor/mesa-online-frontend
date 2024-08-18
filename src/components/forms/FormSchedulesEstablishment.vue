<script setup>
import { onMounted, reactive, ref } from 'vue';
import { fielsRequired, phoneValidator } from '../../utils/inputValidators.js';

const emit = defineEmits(['saveFormSchedulesEstablishment']);
const dataSchedules = defineModel('dataSchedules');
const rulesEstablishment = reactive({
    required: v => fielsRequired(v) || 'Campo obrigatório',
    phone: v => phoneValidator(v) || 'Numero incorreto'
    
});
const onSubmit = () => {
    emit('saveFormSchedulesEstablishment');

}

</script>
<template>
    <div id="form-edit-schedules-establishment">
        <q-form @submit="onSubmit">
            <div class="form-edit-schedules-establishment">
                <div class="form-edit-schedules-establishment-weeks">
                    <div class="form-edit-schedules-establishment-inputs">
                        <h5>Segunda</h5>

                    </div>
                    <div class="form-edit-schedules-establishment-inputs">
                        <h5>Terça</h5>

                    </div>
                </div>
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

#form-edit-schedules-establishment{
    font-family: "Fredoka", sans-serif;

    .q-form{
        width: 100%;

        .form-edit-schedules-establishment-weeks{
            background-color: red;
            display: flex;
            flex-direction: column;
            gap: .5rem;
            width: 100%;

            .q-input{
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