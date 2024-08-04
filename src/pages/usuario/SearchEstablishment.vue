<script setup>
import { onMounted, reactive, ref } from 'vue';
import { CardEstablishment, CardEstablishmentSkeleton } from '../../components';

const dataSearchEstablishment = reactive({
    name: ''

});
const dataEstablishments = reactive([]);
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
const getData = async () => {
    let establishments = [
        {id_public: 1, name: 'rock lanches', description: 'descrição', isOpen: true, isVacancies: true},
        {id_public: 2, name: 'gonha lanches', description: 'descrição', isOpen: false, isVacancies: false},
        {id_public: 3, name: 'mana lanches', description: 'descrição', isOpen: false, isVacancies: false}
    ];
    setTimeout(() => {
        dataEstablishments.push(...establishments)
        
  }, 3000)
}
onMounted( async () => {
    await getData();

})
</script>
<template>
    <div id="search-establishment" class="q-pa-sm">
        <h4 class="q-mt-sm q-mb-sm">Estabelecimentos</h4>
        <div class="search-filters q-mt-md q-mb-md">
            <q-form>
                <q-input 
                    :disable="!dataEstablishments.length"
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
                v-show="dataEstablishments.length"
                v-for="i in searchEstablishment()" :key="i"
                :id="i.id_public"
                :name="i.name"
                :description="i.description"
                :isOpen="i.isOpen"
                :isVacancies="i.isVacancies" />
            <CardEstablishmentSkeleton
                v-show="!dataEstablishments.length"
                v-for="i in 3" :key="i" />
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
        gap: 1rem;

    }
}
</style>