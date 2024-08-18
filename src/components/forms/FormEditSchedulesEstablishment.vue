<script setup>
import { onMounted, reactive, ref } from 'vue';
import { fielsRequired } from '../../utils/inputValidators.js';

const emit = defineEmits(['saveFormSchedulesEstablishment']);
const dataSchedules = defineModel('dataSchedules');
const rulesEstablishment = reactive({
    required: v => fielsRequired(v) || 'Campo obrigatório'
    
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
                    <h5>Segunda</h5>
                    <div class="form-edit-schedules-establishment-inputs q-mb-sm">
                        <div class="form-edit-schedules-establishment-inputs-morning">
                            <q-input
                                dark
                                filled
                                color="orange-9"
                                label-color="grey-2"
                                v-model="dataSchedules[0]['sun']['morning']['open']"
                                type="time"
                                label="Abertura manha"
                                :rules="[rulesEstablishment.required]" />
                            <q-input
                                dark
                                filled
                                color="orange-9"
                                label-color="grey-2"
                                v-model="dataSchedules[0]['sun']['morning']['close']"
                                type="time"
                                label="Fechamento manha"
                                :rules="[rulesEstablishment.required]" />
                        </div>
                        <div class="form-edit-schedules-establishment-inputs-afternoon">
                            <q-input
                                dark
                                filled
                                color="orange-9"
                                label-color="grey-2"
                                v-model="dataSchedules[0]['sun']['afternoon']['open']"
                                type="time"
                                label="Abertura tarde"
                                :rules="[rulesEstablishment.required]" />
                            <q-input
                                dark
                                filled
                                color="orange-9"
                                label-color="grey-2"
                                v-model="dataSchedules[0]['sun']['afternoon']['close']"
                                type="time"
                                label="Fechamento tarde"
                                :rules="[rulesEstablishment.required]" />
                        </div>
                        <div class="form-edit-schedules-establishment-inputs-night">
                            <q-input
                                dark
                                filled
                                color="orange-9"
                                label-color="grey-2"
                                v-model="dataSchedules[0]['sun']['night']['open']"
                                type="time"
                                label="Abertura noite"
                                :rules="[rulesEstablishment.required]" />
                            <q-input
                                dark
                                filled
                                color="orange-9"
                                label-color="grey-2"
                                v-model="dataSchedules[0]['sun']['night']['close']"
                                type="time"
                                label="Fechamento noite"
                                :rules="[rulesEstablishment.required]" />
                        </div>
                    </div>
                    <h5>Terça</h5>
                    <div class="form-edit-schedules-establishment-inputs q-mb-sm">

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
            display: flex;
            flex-direction: column;
            gap: .5rem;
            width: 100%;

            h5{
                color: $whiteColorPrimary;
                font-size: 1.3rem;
            }

            .form-edit-schedules-establishment-inputs{
                display: flex;
                justify-content: space-between;
                gap: .5rem;
                flex-wrap: wrap;

                .form-edit-schedules-establishment-inputs-morning,
                .form-edit-schedules-establishment-inputs-afternoon,
                .form-edit-schedules-establishment-inputs-night{
                    display: flex;
                    width: 32%;
                    gap: .3rem;

                }

            }

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