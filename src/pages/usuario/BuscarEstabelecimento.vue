<script setup>
import { reactive, ref } from 'vue';
import { CardEstablishment } from '../../components';

const dataSearchEstablishment = reactive({
    name: '',
    isOpen: false,
    isVacancies: false

});
const dataCardEstablishment = reactive({
    name: 'Rock',
    description: 'descriçao',
    isOpen: true,
    isVacancies: true

});
const searchEstablishment = () => {
    console.log(dataSearchEstablishment);
    
}
</script>
<template>
    <div id="search-establishment">
        <h4 class="q-mt-sm q-mb-sm">Estabelecimentos</h4>
        <div class="search-filters q-mt-md q-mb-md">
            <q-form @submit="searchEstablishment">
                <q-input
                    square outlined
                    color="teal"
                    v-model="dataSearchEstablishment.name"
                    type="text"
                    label="Nome do estabelecimento" />
                <div class="q-ma-xs">
                    <q-checkbox
                        rigth-label
                        v-model="dataSearchEstablishment.isOpen"
                        checked-icon="task_alt" 
                        unchecked-icon="highlight_off"
                        label="Aberto" />
                </div>
                <div class="q-ma-xs">
                    <q-checkbox
                        rigth-label
                        v-model="dataSearchEstablishment.isVacancies"
                        checked-icon="task_alt" 
                        unchecked-icon="highlight_off"
                        label="Com vagas" />
                </div>
                <q-btn
                    label="Buscar"
                    type="submit"
                    color="teal" />
        </q-form>
        </div>
        <div class="cards-establishment">
            <CardEstablishment
                :name="dataCardEstablishment.name"
                :description="dataCardEstablishment.description"
                :isVacancies="dataCardEstablishment.isVacancies"
                :isOpen="dataCardEstablishment.isOpen"
                v-for="i in 10" :key="i" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
#search-establishment{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 3.1rem);
    padding: 1rem;

    .search-filters{
        width: 100%;

        .q-form{
            display: flex;
            justify-content: center;
            width: 100%;
            gap: .3rem;

            .q-field{
                min-width: 15rem;
                min-height: 3.5rem;
                
            }
            .q-btn{
                min-height: 3.5rem;
                
            }
        }
    }
    .cards-establishment{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: .2rem;

    }
}
</style>