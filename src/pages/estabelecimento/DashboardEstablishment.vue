<script setup>
import { reactive } from 'vue';
import { CardInfo, MonthReservations } from '../../components';

const dataCardInfo = reactive([
    {title: 'Reservas do mês', value: '300', icon: 'bx bx-line-chart', color: 'red-9'},
    {title: 'Reservas do dia', value: '20', icon: 'bx bx-user-check', color: 'blue-9'},
    {title: 'Novos usuários no mês', value: '10', icon: 'bx bx-user-plus', color: 'orange-9'},
    {title: 'Total usuários', value: '1500', icon: 'bx bx-group', color: 'green-9'}
]);
const dataChart1 = reactive({
    title: 'Usuários no ano',
    legend: 'Total de usuários',
    txtColor: 'grey-9',
    bgColor: 'grey-2',
    dataChart: [40, 15, 4, 55, 7, 40, 15, 4, 55, 7, 10, 80],
    icon: 'bx bx-group'
});
</script>
<template>
    <div id="dashboard-establishment" class="q-pa-sm">
        <div class="dashboard-header q-mb-md">
            <CardInfo
                class="dashboard-header-info"
                v-for="i in dataCardInfo" :key="i"
                :title="i.title"
                :value="i.value"
                :icon="i.icon"
                :color="i.color" />
        </div>
        <div class="dashboard-charts">
            <MonthReservations
                class="dashboard-charts-chart"
                :title="dataChart1.title"
                :legend="dataChart1.legend"
                :txtColor="dataChart1.txtColor"
                :bgColor="dataChart1.bgColor"
                :dataChart="dataChart1.dataChart"
                :icon="dataChart1.icon" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");

#dashboard-establishment{
    display: flex;
    flex-direction: column;

    .dashboard-header{
        display: flex;
        justify-content: center;
        gap: .5rem;
        flex-wrap: wrap;

        .dashboard-header-info{
            width: 24%;

        }

    }
    .dashboard-charts{
        display: flex;
        justify-content: center;
        gap: .5rem;
        flex-wrap: wrap;

        .dashboard-charts-chart{
            width: 45%;
        }
    }
}

/*################################################*/
@media only screen and (max-width: 1560px) {
}
@media only screen and (max-width: 1200px) {
}
@media only screen and (max-width: 992px) {
}
@media only screen and (max-width: 720px) {
}
@media only screen and (max-width: 481px) {
}
@media only screen and (max-width: 360px) {
}
</style>