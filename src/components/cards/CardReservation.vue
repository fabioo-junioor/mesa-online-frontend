<script setup>
const props = defineProps(['id', 'nameEstablishment', 'date', 'hour', 'numberOfPeoples', 'city', 'street', 'number']);
const emit = defineEmits(['cancelReservation']);

const onSubmit = () => {
  emit('cancelReservation', props.id);

}
</script>
<template>
  <div id="card-reservation">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img class="col-3" src="https://cdn.quasar.dev/img/parallax1.jpg">
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ props.nameEstablishment }}
          </div>
        </q-img>
        <q-card-section>
          <div class="text-subtitle2">
            <div class="infos-reservation-address q-mb-xs">
              <i class='bx bxs-location-plus'></i>
              <p>Cidade: {{ props.city }}</p>
            </div>
            <div class="infos-reservation-address q-mb-xs">
              <i class='bx bxs-car'></i>
              <p>Rua: {{ props.street }}</p>
            </div>
            <div class="infos-reservation-address q-mb-xs">
              <i class='bx bx-check-double'></i>
              <p>Numero: {{ props.number }}</p>
            </div>
            <q-separator class="q-mt-sm q-mb-sm" color="grey-9" />
            <div class="infos-reservation-date-time">
              <q-badge color="grey-9">
                <i class='bx bxs-calendar'></i>
                Dia: {{ props.date }}
              </q-badge>
              <q-badge color="grey-9">
                <i class='bx bxs-time'></i>
                Horário: {{ props.hour }}
              </q-badge>
              <q-badge color="grey-9">
                <i class='bx bxs-group'></i>
                Pessoas: {{ props.numberOfPeoples }}
              </q-badge>
            </div>
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator color="orange-9" />

      <q-card-actions>
        <div class="reservation-actions q-ma-xs">
          <q-btn @click="onSubmit" color="orange-9" label="Cancelar reserva" />
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>
<style lang="scss" scoped>
#card-reservation{
  .my-card{
    width: 100%;
    background-color: transparent;
    border: 1px solid $colorOrange;
    border-left: 4px solid $colorOrange;

    .q-card__section{
      width: 100%;

      .text-subtitle2{
        width: 100%;

        .infos-reservation-address{
          display: flex;
          justify-content: flex-start;
          padding: .1rem;

          i{
            margin: .2rem;
            padding: .2rem;
            font-size: 1rem;
            color: $iconOrange;
            border-right: 1px solid $iconOrange;

          }
          p{
            margin: .2rem;

          }
        }
        .infos-reservation-date-time{
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 1rem;

          .q-badge{
            padding: .3rem;
            font-size: .8rem;

            i{
              font-size: .9rem;
              margin-right: 5px;

            }
          }
        }
      }
    }
    .reservation-actions{
      width: 100%;
      display: flex;
      justify-content: flex-end;

    }
  }
}
</style>