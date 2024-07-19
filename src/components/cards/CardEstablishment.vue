<script setup>
const props = defineProps(['name', 'description', 'isVacancies', 'isOpen']);

</script>
<template>
  <div id="card-establishment">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img class="col-6" src="https://cdn.quasar.dev/img/parallax1.jpg">
          <div class="absolute-bottom text-subtitle2 text-center">
            <router-link :to="{name: 'detailsEstablishment', params: {id: '1'} }">
              {{ name }}
            </router-link>
          </div>
        </q-img>
        <q-card-section>
          {{ props.description }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <div class="infos-establishment">
          <div v-if="isOpen" class="q-ma-sm">
            <q-badge color="green" class="q-mr-xs" />Aberto
          </div>
          <div v-else class="q-ma-sm">
            <q-badge color="red" class="q-mr-xs" />Fechado
          </div>
          <div v-if="isVacancies && isOpen" class="q-ma-sm">
            <q-badge color="green" class="q-mr-xs" />A vagas
          </div>
          <div v-if="!isVacancies && isOpen" class="q-ma-sm">
            <q-badge color="red" class="q-mr-xs" />Não a vagas
          </div>
        </div>
        <q-btn outline color="teal">Reservar</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>
<style lang="scss" scoped>
.my-card{
    width: 25rem;

    .text-subtitle2 a{
      text-decoration: underline;
      font-size: 1rem;
      padding: .3rem;
      color: $negative;
      border-radius: 10px;

      &:hover{
        color: red;
        
      }
    }
    .q-card__actions{
        display: flex;
        justify-content: space-between;

        .infos-establishment{
            display: flex;
            
        }

    }

}
</style>