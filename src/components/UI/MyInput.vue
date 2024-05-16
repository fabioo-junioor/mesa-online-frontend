<script setup>
const model = defineModel()
const props = defineProps(['type', 'label', 'color', 'rules', 'mask', 'isPwd', 'isType'])
const emit = defineEmits(['visiblePass'])

const meuLocal = {
    days: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split('_'),
    daysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort: 'Ja_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: true,
    pluralDay: 'dias'
}

</script>
<template>
    <div class="my-input">
        <q-input square filled
            :color="props.color"
            :type="props.type"
            :label="props.label"
            v-model="model"
            :mask="props.mask"
            :rules="props.rules">
            <template v-slot:append>
                <div v-if="props.isType === 1">
                    <q-icon
                        :name="props.isPwd ? 'visibility_off' : 'visibility'"
                        @click="emit('visiblePass')" />
                </div>
                <div v-if="props.isType === 2">
                    <q-icon name="event" class="cursor-poiter">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-date v-model="model" :color="props.color" :locale="meuLocal">
                                <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                            </q-date>
                        </q-popup-proxy>
                    </q-icon>
                </div>
            </template>
        </q-input>
    </div>    
</template>
<style lang="scss" scoped>
    .my-input{
        .q-input {
            margin: 1rem 0;

        }
    }
</style>