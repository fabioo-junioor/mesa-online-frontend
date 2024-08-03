<script setup>
</script>
<template>
  <div id="card-reservation-skeleton">
    <q-card class="my-card" dark bordered>
      <q-card-section horizontal>
        <q-img class="col-3">
            <q-skeleton dark height="100%" width="100%" />
        </q-img>
        <q-card-section>
          <div class="text-subtitle2">
            <div class="infos-reservation-address q-mb-xs">
              <p><q-skeleton dark bordered type="text" width="10%" /></p>
            </div>
            <div class="infos-reservation-address q-mb-xs">
              <p><q-skeleton dark bordered type="text" width="20%" /></p>
            </div>
            <div class="infos-reservation-address q-mb-xs">
              <p><q-skeleton dark bordered type="text" width="30%" /></p>
            </div>
            <q-separator class="q-mt-sm q-mb-sm" color="grey-9" />
            <div class="infos-reservation-date-time">
              <q-skeleton dark bordered type="text" width="100%" />
            </div>
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator color="white" />

      <q-card-actions>
        <div class="reservation-actions q-ma-xs">
          <q-skeleton dark bordered type="QBtn" />
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>
<style lang="scss" scoped>
#card-reservation-skeleton{
  .my-card{
    width: 100%;
    background-color: transparent;
    border-left: 4px solid $grey-5;

    .q-card__section{
      width: 100%;

      .text-subtitle2{
        width: 100%;

        .infos-reservation-address{
          display: flex;
          justify-content: flex-start;
          padding: .1rem;

          p{
            margin: .2rem;
            width: 100%;

          }
        }
        .infos-reservation-date-time{
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 1rem;

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