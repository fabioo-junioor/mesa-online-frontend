<script setup>
import { reactive } from 'vue';
import { CardInfo, CardUserReservation, MonthReservations, WeekReservations } from '../../components';

const dataCardInfo = reactive([
    {title: 'Reservas do mês', value: '300', icon: 'bx bx-line-chart', color: 'red-9'},
    {title: 'Reservas do dia', value: '20', icon: 'bx bx-user-check', color: 'blue-9'},
    {title: 'Novos usuários no mês', value: '10', icon: 'bx bx-user-plus', color: 'orange-9'},
    {title: 'Total usuários', value: '1500', icon: 'bx bx-group', color: 'green-9'}
]);
const dataChartMonth = reactive({
    title: 'Reservas no ano',
    legend: 'Total de usuários',
    txtColor: '#eeeeee',
    dataChart: [40, 0, 4, 55, 7, 40, 15, 70, 5, 13, 100, 2],
    icon: 'bx bx-line-chart'
});
const dataChartWeek = reactive({
    title: 'Reservas na semana',
    legend: 'Total de usuários',
    txtColor: '#eeeeee',
    dataChart: [40, 15, 4, 55, 7, 40, 15],
    icon: 'bx bx-line-chart'
});
const dataUserReservation = reactive([
    {
        img: 'https://cdn.quasar.dev/img/avatar.png',
        name: 'João Paulo II',
        date: '25-10-2024 10:00',
        totalPeoples: 7,
        status: 'Ativo'
    },
    {
        img: 'https://cdn.quasar.dev/img/avatar.png',
        name: 'Maria',
        date: '20-08-2024 20:00',
        totalPeoples: 15,
        status: 'Cancelado'
    }
]);
</script>
<template>
    <div id="dashboard-establishment" class="q-pa-sm">
        <div class="dashboard-header">
            <CardInfo
                class="dashboard-header-info q-pt-sm q-pb-sm"
                v-for="i in dataCardInfo" :key="i"
                :title="i.title"
                :value="i.value"
                :icon="i.icon"
                :color="i.color" />
        </div>
        <div class="dashboard-charts q-pt-md q-pb-md">
            <MonthReservations
                class='dashboard-charts-chart'
                :title='dataChartMonth.title'
                :legend='dataChartMonth.legend'
                :txtColor='dataChartMonth.txtColor'
                :dataChart='dataChartMonth.dataChart'
                :icon='dataChartMonth.icon' />
            <WeekReservations
                class='dashboard-charts-chart'
                :title='dataChartWeek.title'
                :legend='dataChartWeek.legend'
                :txtColor='dataChartWeek.txtColor'
                :dataChart='dataChartWeek.dataChart'
                :icon='dataChartWeek.icon' />
        </div>
        <div class="dashboard-list-users-reservation q-pt-md q-pb-md">
           <h4 class="q-pa-md">Ultimas reservas</h4>
           <CardUserReservation
                class="dashboard-list-user q-pa-md"
                :dataUserReservation='dataUserReservation' />
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");

#dashboard-establishment{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    min-height: calc(100vh - 3.5rem);

    .dashboard-header{
        display: flex;
        justify-content: center;
        width: 99%;
        gap: .5rem;
        flex-wrap: wrap;

        .dashboard-header-info{
            width: 23%;

        }
    }
    .dashboard-charts{
        display: flex;
        justify-content: center;
        width: 98%;
        gap: 1rem;
        flex-wrap: wrap;
        background-color: $darkColorSecondary;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, .3);

        .dashboard-charts-chart{
            width: 40%;

        }
    }
    .dashboard-list-users-reservation{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        width: 98%;
        background-color: $darkColorSecondary;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, .3);

        h4{
            color: $whiteColorPrimary;

        }
        .dashboard-list-user{
            width: 100%;
            
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