<script setup>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { FormReserveEstablishment } from '../../components';
import { getDateToday, getHoursToday, compareDate, daysOfTheWeek, verifyEstablishmentIsOpen } from '../../utils/dateTimeFormatters.js';

const route = useRoute();
const schedulesEstablishment = reactive([
  {
    sun: {
      manha: { abertura: '10:00', fechamento: '14:00' },
      tarde: { abertura: '17:00', fechamento: '19:00' },
      noite: { abertura: '19:00', fechamento: '22:00' }
    }
  },
  {
    mon: {
      manha: { abertura: '08:00', fechamento: '12:00' },
      tarde: { abertura: '14:00', fechamento: '17:00' },
      noite: { abertura: '19:00', fechamento: '23:00' }
    }
  }
]);
const addressEstablishment = reactive({
  state: 'Rio grande do sul',
  city: 'Santa maria',
  street: 'Fernando ferrari',
  number: '2666'
});
const formReserveEstablishment = reactive({
    numberOfPeople: null,
    date: null,
    time: null,
    observation: '',
    totalOccupancy: 0,
    occupancyNow: 0,
    isOpen: false,
    isVacancies: false,
    isDefineSchedules: false
});
const calculateOccupancyPercentage = () => {
  return formReserveEstablishment.occupancyNow/formReserveEstablishment.totalOccupancy;

};
const formatTotalOccupancy = () => {
  return (calculateOccupancyPercentage() * 100).toFixed(2) + '%';

};
const reserveEstablishment = () => {
  if(!compareDate(formReserveEstablishment.date)){
    console.log('data invalida!');
    return;

  }
  console.log('data valida!');
  return;

}
const getInfoEstablishment = () => {
  formReserveEstablishment.date = getDateToday();
  formReserveEstablishment.time = getHoursToday();
  formReserveEstablishment.totalOccupancy = 1000;
  formReserveEstablishment.occupancyNow = 250;
  formReserveEstablishment.isOpen = verifyEstablishmentIsOpen(schedulesEstablishment);
  formReserveEstablishment.isVacancies = false;
  formReserveEstablishment.isDefineSchedules = (schedulesEstablishment.length === 0);

}
onMounted(() => {
  getInfoEstablishment();

});
</script>
<template>
  <div id="details-establishment">
    <div class="banner-establishment q-mb-md">
      <div class="status-establishment q-ml-xl q-mb-sm">
        <div v-if="formReserveEstablishment.isOpen" class="q-ma-sm">
          <q-badge color="green" class="q-pa-sm">
            <i class='bx bxs-smile'></i>
            <q-separator vertical color="white" class="q-ml-xs q-mr-xs" />
            Aberto!
          </q-badge>
        </div>
        <div v-else class="q-ma-sm">
          <q-badge color="red" class="q-pa-sm">
            <i class='bx bxs-sad'></i>
            <q-separator vertical color="white" class="q-ml-xs q-mr-xs" />
            Fechado!
          </q-badge>
        </div>
        <!--
        <div v-if="formReserveEstablishment.isOpen && formReserveEstablishment.isVacancies" class="q-ma-sm">
          <q-badge color="green" class="q-pa-sm">
            <i class='bx bxs-smile'></i>
            A vagas
          </q-badge>
        </div>
        <div v-if="formReserveEstablishment.isOpen && !formReserveEstablishment.isVacancies" class="q-ma-sm">
          <q-badge color="red" class="q-pa-sm">
            <i class='bx bxs-sad'></i>
            Não a vagas
          </q-badge>
        </div>
        -->
      </div>
      <h4 class="q-mb-md">Rock lanches</h4>
      <div class="socials-establishment q-mr-xl q-mb-md">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i class="bx bxl-instagram q-mr-md" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i class="bx bxl-facebook-square" />
        </a>
      </div>
    </div>
    <div class="data-establishment q-pa-sm">
      <div class="data-establishment-left q-pa-md">
        <h4 class="q-pa-xs q-mb-md">Realizar reserva</h4>
        <div>
          <FormReserveEstablishment
            v-model:numberOfPeople="formReserveEstablishment.numberOfPeople"
            v-model:date="formReserveEstablishment.date"
            v-model:time="formReserveEstablishment.time"
            v-model:observation="formReserveEstablishment.observation"
            :isDefineSchedules="formReserveEstablishment.isDefineSchedules"
            @reserveEstablishment="reserveEstablishment" />
        </div>
      </div>
      <div class="data-establishment-right">
        <div class="data-establishment-details q-pa-sm">
          <h4 class="q-pa-xs q-mb-md">Detalhes</h4>
          <q-separator class="q-mt-sm q-mb-md" color="grey-8" />
          <div class="data-progress-ocupation">
            <q-linear-progress dark rounded size="30px" :value="calculateOccupancyPercentage()" color="orange-9">
              <div class="absolute-full flex flex-center">
                <q-badge color="white" text-color="black" :label="formatTotalOccupancy()" />
              </div>
            </q-linear-progress>
            <q-badge outline color="orange-9" :label="formReserveEstablishment.occupancyNow+'/'+formReserveEstablishment.totalOccupancy" />
          </div>
        </div>
        <div class="data-establishment-address q-pa-sm">
          <h4 class="q-pa-xs q-mb-md">Endereço</h4>
          <q-separator class="q-mt-sm q-mb-md" color="grey-8" />
          <div>
            <p><span>Estado: </span>{{ addressEstablishment.state }}</p>
            <p><span>Cidade: </span>{{ addressEstablishment.city }}</p>
            <p><span>Rua: </span>{{ addressEstablishment.street }}</p>
            <p><span>Numero: </span>{{ addressEstablishment.number }}</p>
          </div>
        </div>
        <div class="data-establishment-schedules q-pa-sm">
          <h4 class="q-pa-xs q-mb-md">Horários</h4>
          <q-separator class="q-mt-sm q-mb-md" color="grey-8" />
          <div class="data-schedules q-pa-xs q-ma-xs">
            <div class="bg-grey-8 q-pa-sm" 
              v-for="i in schedulesEstablishment" :key="i">
              <h5 class="q-pl-sm">{{ daysOfTheWeek(String(Object.keys(i))) }}</h5>
              <div class="data-schedules-shifts q-pa-sm">
                <p><span>Manha: </span>{{ i[String(Object.keys(i))]['manha']['abertura'] }} as {{ i[String(Object.keys(i))]['manha']['fechamento'] }}</p>
                <p><span>Tarde: </span>{{ i[String(Object.keys(i))]['tarde']['abertura'] }} as {{ i[String(Object.keys(i))]['tarde']['fechamento'] }}</p>
                <p><span>Noite: </span>{{ i[String(Object.keys(i))]['noite']['abertura'] }} as {{ i[String(Object.keys(i))]['noite']['fechamento'] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#details-establishment {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 3.5rem);

  .banner-establishment {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    min-height: 15rem;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
      url("../../assets/imagens/background_page_establishment.jpg") no-repeat
        fixed center;
    background-size: cover;
    border-radius: 0 0 50px 50px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, .7);
    border-bottom: 1px solid $iconOrange;

    .status-establishment{
      display: flex;

      .q-badge{
        i{
          font-size: 1rem;
          margin: .1rem;

        }
      }
    }
    h4 {
      color: white;
      text-decoration: underline;

    }
    .socials-establishment {
      i {
        color: white;
        font-size: 2rem;

        &:hover {
          color: $iconWhiteHover;

        }
      }
    }
  }
  .data-establishment {
    display: flex;
    justify-content: center;
    gap: .7rem;

    .data-establishment-left{
      width: 60%;
      background-color: $cardsDark;
      border: 1px solid rgba(0, 0, 0, .3);
      border-radius: 5px;

      h4{
        text-align: center;
        color: white;
        font-size: 2rem;

      }
    }
    .data-establishment-right{
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: .7rem;

      .data-establishment-details{
        border-radius: 5px;
        background-color: $cardsDark;
        border: 1px solid rgba(0, 0, 0, .3);
        color: white;

        h4{
          text-align: center;
          font-size: 1.5rem;

        }
        .data-progress-ocupation{
          display: flex;
          gap: 5px;

        }
      }
      .data-establishment-address{
        border-radius: 5px;
        background-color: $cardsDark;
        border: 1px solid rgba(0, 0, 0, .3);
        color: white;

        h4{
          text-align: center;
          font-size: 1.5rem;

        }
      }
      .data-establishment-schedules{
        border-radius: 5px;
        background-color: $cardsDark;
        border: 1px solid rgba(0, 0, 0, .3);
        color: white;

        h4{
          text-align: center;
          font-size: 1.5rem;

        }
        .data-schedules{
          display: flex;
          gap: .5rem;
          flex-wrap: wrap;

          h5{
            font-size: 1.2rem;

          }
          p{
            margin: 0;

          }
          .data-schedules-shifts{
            span{
              font-weight: 500;
              font-size: 1rem;

            }          
          }
        }
        .data-schedules > div{
          border-radius: 5px;

        }
      }
    }
  }
}
</style>