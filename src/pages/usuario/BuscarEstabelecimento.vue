<script setup>
import { reactive, ref } from 'vue';
import { CardEstablishment } from '../../components';

const dataSearchEstablishment = reactive({
    name: '',
    isOpen: false,
    isVacancies: false

});
const dataEstablishments = reactive([
    {name: 'rock lanches', description: 'descrição', isOpen: true, isVacancies: true},
    {name: 'gonha lanches', description: 'descrição', isOpen: true, isVacancies: false},
    {name: 'mana lanches', description: 'descrição', isOpen: false, isVacancies: false},
    {name: 'buneco', description: 'descrição', isOpen: true, isVacancies: true}
]);
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
                v-for="i in dataEstablishments" :key="i" 
                :name="i.name"
                :description="i.description"
                :isOpen="i.isOpen"
                :isVacancies="i.isVacancies" />
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