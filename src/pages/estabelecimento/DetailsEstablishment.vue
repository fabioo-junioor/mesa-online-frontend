<script setup>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { FormReserveEstablishment, CardSchedulesEstablishment, CardAddressEstablishment, CardSchedulesEstablishmentSkeleton, CardAddressEstablishmentSkeleton } from '../../components';
import { getDateToday, getHoursToday, compareDate, daysOfTheWeek, verifyEstablishmentIsOpen } from '../../utils/dateTimeFormatters.js';

const route = useRoute();
const formReserveEstablishment = reactive({
    numberOfPeople: null,
    date: null,
    time: null,
    observation: ''
});
const schedulesEstablishment = reactive([]);
const addressEstablishment = reactive({
  state: '',
  city: '',
  street: '',
  number: ''
});
const detailsEstablishment = reactive({
  linkInstagram: '',
  linkFacebook: '',
  totalOccupancy: 0,
  occupancyNow: 0
});
const validatorsDisable = reactive({
  isOpen: false,
  isDefineSchedules: false,
  isLogin: false
});
const getSchedulesEstablishment = async () => {
  let schedules = [
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
    },
    {
      sat: {
        manha: { abertura: '08:00', fechamento: '11:00' },
        tarde: { abertura: '13:00', fechamento: '14:00' },
        noite: { abertura: '19:00', fechamento: '23:00' }
      }
    }
  ];
  setTimeout(() => {
    schedulesEstablishment.push(...schedules);
    validatorsDisable.isDefineSchedules = (schedulesEstablishment.length === 0) ? false : true;
    validatorsDisable.isOpen = verifyEstablishmentIsOpen(schedulesEstablishment);
    validatorsDisable.isLogin = true;

  }, 3000);
};
const getFormReserveEstablishment = async () => {
  formReserveEstablishment.date = getDateToday();
  formReserveEstablishment.time = getHoursToday();

};
const getDetailsEstablishment = async () => {
  setTimeout(() => {
    detailsEstablishment.linkInstagram = '#';
    detailsEstablishment.linkFacebook = '#';
    detailsEstablishment.totalOccupancy = 1000;
    detailsEstablishment.occupancyNow = 200;

  }, 3000);  
};
const getAddressEstablishment = async () => {
  setTimeout(() => {
    addressEstablishment.state = 'Rio grande do sul';
    addressEstablishment.city = 'Santa maria';
    addressEstablishment.street = 'Fernando ferrari';
    addressEstablishment.number = '5565';

  }, 3000);
};
const calculateOccupancyPercentage = () => {
  return detailsEstablishment.occupancyNow/detailsEstablishment.totalOccupancy;

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
  console.log(formReserveEstablishment);
  return;

};
onMounted( async () => {
  await getFormReserveEstablishment();
  await getAddressEstablishment();
  await getSchedulesEstablishment();
  await getDetailsEstablishment();

});
</script>
<template>
  <div id="details-establishment">
    <div class="banner-establishment q-mb-md">
      <div class="status-establishment q-ml-xl q-mb-sm">
        <div v-if="validatorsDisable.isOpen" class="q-ma-sm">
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
      </div>
      <h4 class="q-mb-xs">Rock lanches</h4>
      <div class="socials-establishment q-mr-xl q-mb-md">
        <a :href="detailsEstablishment.linkInstagram" target="_blank" rel="noopener noreferrer">
          <i class="bx bxl-instagram q-mr-md" />
        </a>
        <a :href="detailsEstablishment.linkFacebook" target="_blank" rel="noopener noreferrer">
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
            :isDefineSchedules="validatorsDisable.isDefineSchedules"
            :isLogin="validatorsDisable.isLogin"
            @reserveEstablishment="reserveEstablishment" />
        </div>
      </div>
      <div class="data-establishment-right">
        <div class="data-establishment-details q-pa-sm">
          <h4 class="q-pa-xs q-mb-sm">Detalhes</h4>
          <q-separator class="q-mt-sm q-mb-md" color="grey-8" />
          <div class="data-progress-ocupation">
            <q-linear-progress dark rounded stripe 
              size="30px"
              :indeterminate="!detailsEstablishment.occupancyNow" 
              :value="calculateOccupancyPercentage()" color="orange-9">
              <div class="absolute-full flex flex-center"
                v-if="detailsEstablishment.occupancyNow">
                <q-badge color="white" text-color="black" :label="formatTotalOccupancy()" />
              </div>
            </q-linear-progress>
            <q-badge outline color="orange-9" :label="detailsEstablishment.occupancyNow+'/'+detailsEstablishment.totalOccupancy" />
          </div>
        </div>
        <div class="data-establishment-address q-pa-sm">
          <h4 class="q-pa-xs q-mb-sm">Endereço</h4>
          <q-separator class="q-mt-sm q-mb-md" color="grey-8" />
          <div class="date-address">
            <CardAddressEstablishment
              v-show="addressEstablishment.state"
              :state="addressEstablishment.state"
              :city="addressEstablishment.city"
              :street="addressEstablishment.street"
              :number="addressEstablishment.number" />
            <CardAddressEstablishmentSkeleton
              v-show="!addressEstablishment.state" />
          </div>
        </div>
        <div class="data-establishment-schedules q-pa-sm">
          <h4 class="q-pa-xs q-mb-sm">Horários</h4>
          <q-separator class="q-mt-sm q-mb-md" color="grey-8" />
          <div class="data-schedules">
            <CardSchedulesEstablishment
              v-show="schedulesEstablishment.length"
              v-for="i in schedulesEstablishment" :key="i"
              :daysOfTheWeek="daysOfTheWeek(String(Object.keys(i)))"
              :morningOpen="i[String(Object.keys(i))]['manha']['abertura']"
              :morningClose="i[String(Object.keys(i))]['manha']['fechamento']"
              :afternoonOpen="i[String(Object.keys(i))]['tarde']['abertura']"
              :afternoonClose="i[String(Object.keys(i))]['tarde']['fechamento']"
              :nightOpen="i[String(Object.keys(i))]['noite']['abertura']"
              :nightClose="i[String(Object.keys(i))]['noite']['fechamento']" />
            <CardSchedulesEstablishmentSkeleton
              v-show="!schedulesEstablishment.length"
              v-for="i in 7" :key="i" />
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
    border-bottom: 1px solid $orangeColor;

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
      color: $whiteColorPrimary;

    }
    .socials-establishment {
      i {
        color: $whiteColorPrimary;
        font-size: 2rem;

        &:hover {
          color: $greyHover;

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
      background-color: $darkColorSecondary;
      border: 1px solid rgba(0, 0, 0, .3);
      border-radius: 5px;

      h4{
        text-align: center;
        color: $whiteColorPrimary;
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
        background-color: $darkColorSecondary;
        border: 1px solid rgba(0, 0, 0, .3);
        color: $whiteColorPrimary;

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
        background-color: $darkColorSecondary;
        border: 1px solid rgba(0, 0, 0, .3);
        color: $whiteColorPrimary;

        h4{
          font-size: 1.5rem;
          text-align: center;

        }
      }
      .data-establishment-schedules{
        border-radius: 5px;
        background-color: $darkColorSecondary;
        border: 1px solid rgba(0, 0, 0, .3);
        color: $whiteColorPrimary;

        h4{
          font-size: 1.5rem;
          text-align: center;

        }
        .data-schedules{
          display: flex;
          justify-content: center;
          gap: .3rem;
          flex-wrap: wrap;

        }
      }
    }
  }
}
/* Breakpoints - response*/
@media only screen and (max-width: 1560px) {
}
@media only screen and (max-width: 1200px) {
}
@media only screen and (max-width: 960px) {
}
@media only screen and (max-width: 768px) {
  #details-establishment{
    .banner-establishment{
      border-radius: 0;

      .status-establishment{
        margin: 0 0 .3rem .1rem;

      }
      h4{
        margin: 0 0 .3rem 0;
        font-size: 1.5rem;

      }
      .socials-establishment{
        margin: 0 .1rem .3rem 0;

        i{
          margin: .1rem;

        }
      }
    }
    .data-establishment{
      flex-direction: column-reverse;

      .data-establishment-left{
        width: 100%;
        padding: 0;

      }
      .data-establishment-right{
        width: 100%;

      }
    }
  }
}
@media only screen and (max-width: 480px) {
}
@media only screen and (max-width: 320px) {
}
</style>