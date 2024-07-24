<script setup>
import { reactive, ref } from 'vue';
import { CardEstablishment } from '../../components';

const dataSearchEstablishment = reactive({
    name: ''

});
const dataEstablishments = reactive([
    {name: 'rock lanches', description: 'descrição', isOpen: true, isVacancies: true},
    {name: 'gonha lanches', description: 'descrição', isOpen: false, isVacancies: false},
    {name: 'mana lanches', description: 'descrição', isOpen: false, isVacancies: false},
    {name: 'buneco', description: 'descrição', isOpen: true, isVacancies: true}
]);
const searchEstablishment = () => {
    if(dataEstablishments != []){
        let data = orderArray(dataEstablishments);
        return data.filter(i => {
            return i.name.toLowerCase().includes(dataSearchEstablishment.name.toLocaleLowerCase());

        })
    }
    return [];

};
const orderArray = array => {
    return array.sort((a, b) => {
        return b.isOpen - a.isOpen;

    });
}
</script>
<template>
    <div id="search-establishment" class="q-pa-sm">
        <h4 class="q-mt-sm q-mb-sm">Estabelecimentos</h4>
        <div class="search-filters q-mt-md q-mb-md">
            <q-form>
                <q-input
                    square outlined
                    color="orange-9"
                    bg-color="white"
                    rounded standout
                    v-model="dataSearchEstablishment.name"
                    type="text"
                    label="Nome do estabelecimento" />
        </q-form>
        </div>
        <div class="cards-establishment">
            <CardEstablishment
                v-for="i in searchEstablishment()" :key="i"
                :id="5"
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
    height: calc(100vh - 3.5rem);

    h4{
        color: white;
        
    }
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
        }
    }
    .cards-establishment{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: .5rem;

    }
}
</style>