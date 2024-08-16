<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';
const props = defineProps(['title', 'legend', 'txtColor', 'bgColor', 'dataChart', 'icon']);

const config = {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
                label: props.legend || 'Legenda',
                data: props.dataChart,
                borderWidth: 2,
                borderColor: props.txtColor,
                backgroundColor: props.txtColor
        }]
    }
}
const options = {
    responsive: true,
    plugins: {
        legend: {
            labels: {
                color: "blue"
            }
        }
    }
}
onMounted(() => {
    const ctx = document.getElementById('myChart1');
    new Chart(ctx, config, options);

})
</script>
<template>
  <div id="month-reservations">
    <div :class="'month-reservations q-pa-md bg-' + props.bgColor ">
        <h5 :class="'q-pb-md text-' + props.txtColor">
            <i :class="props.icon + ' text-' + props.txtColor" />
            <q-separator class="q-ml-xs q-mr-xs" vertical size="1px" :color="props.txtColor" />
            {{ props. title }}
        </h5>
        <canvas id="myChart1"></canvas>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");

#month-reservations{
    .month-reservations{
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, .5);

        h5{
            display: flex;
            align-items: center;

            i{
                font-size: 2rem;

            }
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