<script setup>
import { reactive } from 'vue';
import { CardEstablishment } from '../../components';

const dataCardEstablishment = reactive({
    name: 'Rock',
    description: 'descriçao',
    isOpen: true,
    isVacancies: true
});
</script>
<template>
    <div id="search-establishment">
        <h4 class="q-mt-sm q-mb-sm">Estabelecimentos</h4>
        <div class="search-filters q-mt-sm q-mb-sm">

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
        height: 2rem;
        width: 100%;
        background-color: red;

    }
    .cards-establishment{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: .2rem;
    }

}
</style>