<script setup>
import { CardReservation } from '../../components';

const cancelReservation = (id) => {
  console.log('cancelar reserva ', id);

}
</script>
<template>
  <div id="home-user">
    <div class="data-user q-pa-sm">
      <div class="data-user-left q-pa-md">
        <h4 class="q-pa-md">Reservas realizadas</h4>
        <div>
          <CardReservation v-for="i in 3" :key="i"
            :id="i"
            nameEstablishment="Rock lanches"
            date="30-07-2024"
            time="20:00"
            numberOfPeoples="5"
            city="santa maria"
            street="avenida ferrari"
            number="2541"
            @cancelReservation="cancelReservation" />
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