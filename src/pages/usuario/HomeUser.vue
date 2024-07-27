<script setup>
import { CardReservation } from '../../components';

</script>
<template>
  <div id="home-user">
    <div class="data-user q-pa-sm">
      <div class="data-user-left q-pa-md">
        <h4 class="q-pa-sm">Reservas realizadas</h4>
        <CardReservation />
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

    .data-user-left {
      width: 50%;
      background-color: $cardsDark;
      color: white;
      border: 1px solid rgba(0, 0, 0, .3);
      border-radius: 5px;

      h4{
        text-align: center;

      }
    }
    .data-user-right {
      width: 40%;
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