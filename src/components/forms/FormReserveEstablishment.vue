<script setup>
import { reactive, ref } from 'vue';
import { fielsRequired } from '../../utils/inputValidators.js';

const emit = defineEmits(['reserveEstablishment']);
const props = defineProps(['isDefineSchedules', 'isLogin']);
const numberOfPeople = defineModel('numberOfPeople');
const date = defineModel('date');
const time = defineModel('time');
const observation = defineModel('observation');
const rulesReserve = reactive({
    required: v => ((v != null) && (fielsRequired(v))) || 'Campo obrigatório'

});
const myLocale = reactive({
    days: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split('_'),
    daysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    firstDayOfWeek: 0,
    format24h: true,
    pluralDay: 'dias'
});
const onSubmit = () => {
    emit('reserveEstablishment');
    return;
    
};
</script>
<template>
    <div id="form-reserve-establishment" class="q-ma-sm q-pa-sm">
        <q-form @submit="onSubmit">
            <q-input
                dark
                standout
                class="q-mb-md"
                color="orange-9"
                v-model="numberOfPeople"
                type="number"
                label="Quantidade de pessoas?"
                lazy-rules
                :rules="[rulesReserve.required]" />
            <div class="form-reserve-date-time q-mb-md">
                <div>
                    <q-badge
                        outline
                        class="q-pa-sm q-mb-xs" 
                        color="orange-9">Dia: {{ date }}</q-badge>
                    <q-date 
                        dark
                        bordered
                        v-model="date" 
                        color="orange-9"
                        text-color="white"
                        mask="DD-MM-YYYY"
                        :locale="myLocale" />
                </div>
                <div>
                    <q-badge 
                        outline
                        class="q-pa-sm q-mb-xs"
                        color="orange-9">Horário: {{ time }}</q-badge>
                    <q-time
                        dark
                        bordered
                        format24h
                        now-btn
                        v-model="time" 
                        color="orange-9"
                        text-color="white"
                        mask="HH:mm" />
                </div>
            </div>
            <q-input
                dark
                class="q-mb-xl"
                v-model="observation"
                clearable
                standout
                type="textarea"
                color="orange-9"
                label="Observações:" />
            <q-btn
                v-if="props.isLogin"
                :disable="!props.isDefineSchedules"
                outline
                color="orange-9"
                class="q-mb-md"
                label="Reservar"
                type="submit">
                <q-tooltip 
                    v-if="!props.isDefineSchedules"
                    class="bg-orange text-black"
                    :offset="[10, 10]"
                    transition-show="flip-right"
                    transition-hide="flip-left">O estabelecimento não definiu seus horários!</q-tooltip>
            </q-btn>
            <q-btn
                v-else
                disable
                outline
                color="orange-9"
                class="q-mb-md"
                label="Reservar">
                <q-tooltip 
                    class="bg-orange text-black"
                    :offset="[10, 10]"
                    transition-show="flip-right"
                    transition-hide="flip-left">Efetue um cadastro!</q-tooltip>
            </q-btn>
        </q-form>
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
#form-reserve-establishment{
    font-family: "Fredoka", sans-serif;

    .q-form{
        width: 100%;

        .form-reserve-date-time{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.5rem;

            div{
                display: flex;
                flex-direction: column;

                .q-badge{
                    font-size: 1rem;

                }
                .q-date, .q-time{
                    box-shadow: none;

                }
            }
        }
        .q-btn{
            height: 3rem;
            width: 100%;
            color: white;
            background-color: $orangeColor;

        }
    }
}
/* Breakpoints - response*/
@media only screen and (max-width: 1560px) {
}
@media only screen and (max-width: 1200px) {
}
@media only screen and (max-width: 960px) {
}
@media only screen and (max-width: 768px) {
    #form-reserve-establishment{
        margin: 0;

    }
}
@media only screen and (max-width: 480px) {
    #form-reserve-establishment{
        .form-reserve-date-time{
            div{
                width: 100%;

                .q-date{
                    width: 100%;
                    
                }
                .q-time{
                    width: 100%;

                }
            }
        }
    }
}
@media only screen and (max-width: 320px) {
}
</style>