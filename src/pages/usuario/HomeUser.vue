<script setup>
import { onMounted, reactive } from 'vue';
import { CardReservation, CardReservationSkeleton } from '../../components';

const dataCardReservation = reactive({
  idEstablishment: '',
  nameEstablishment: '',
  dateReservation: '',
  hourReservation: '',
  numberOfPeoples: '',
  city: '',
  street: '',
  number: ''
});
const cancelReservation = (id) => {
  console.log('cancelar reserva ', id);

}
const getData = async () => {
  setTimeout(() => {
    dataCardReservation.idEstablishment = '3'
    dataCardReservation. nameEstablishment = 'rock lanches'
    dataCardReservation.dateReservation = '15-08-2024'

  }, 3000)

}
onMounted(async () => {
  await getData();

})
</script>
<template>
  <div id="home-user">
    <div class="data-user q-pa-sm">
      <div class="data-user-left q-pa-md">
        <h4 class="q-pa-md">Reservas realizadas</h4>
        <div>
          <CardReservation v-show="dataCardReservation.idEstablishment"
            v-for="i in 3" :key="i"
            :id="dataCardReservation.idEstablishment"
            :nameEstablishment="dataCardReservation.nameEstablishment"
            :date="dataCardReservation.dateReservation"
            :hour="dataCardReservation.hourReservation"
            :numberOfPeoples="dataCardReservation.numberOfPeoples"
            :city="dataCardReservation.city"
            :street="dataCardReservation.street"
            :number="dataCardReservation.number"
            @cancelReservation="cancelReservation" />
          <CardReservationSkeleton
            v-show="!dataCardReservation.idEstablishment"
            v-for="i in 2" :key="i" />
        </div>
      </div>
      <div class="data-user-right q-pa-md">
        <h4 class="q-pa-sm">Detalhes</h4>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#home-user {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 3.5rem);

  .data-user {
    display: flex;
    justify-content: center;
    gap: .7rem;
    flex-wrap: wrap;

    .data-user-left {
      width: 60%;
      background-color: $cardsDark;
      color: white;
      border: 1px solid rgba(0, 0, 0, .3);
      border-radius: 5px;

      h4{
        text-align: center;

      }
      div{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: .7rem;

      }
    }
    .data-user-right {
      width: 30%;
      background-color: $cardsDark;
      color: white;
      border: 1px solid rgba(0, 0, 0, .3);
      border-radius: 5px;

      h4{
        text-align: center;

      }
    }
  }
}
</style>