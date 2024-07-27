<script setup>
import { useRouter } from 'vue-router';

const props = defineProps(['id', 'name', 'description', 'isVacancies', 'isOpen']);
const router = useRouter();
const redirectDetails = () => {
  router.push({name: 'detailsEstablishment', params: {id: props.id}});

}
</script>
<template>
  <div id="card-establishment">
    <q-card class="my-card" @click="redirectDetails">
      <q-card-section horizontal>
        <q-img class="col-6" src="https://cdn.quasar.dev/img/parallax1.jpg">
          <div class="absolute-bottom text-subtitle2 text-center">
              {{ name }}
          </div>
        </q-img>
        <q-card-section>
          <div class="text-subtitle2">
            {{ props.description }}
          </div>
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
      </q-card-actions>
    </q-card>
  </div>
</template>
<style lang="scss" scoped>
#card-establishment{
  .my-card{
      width: 25rem;
      cursor: pointer;
      background-color: $background;
      border: 1px solid rgba(0, 0, 0, .6);
      border-left: 4px solid $colorOrange;
  
      .q-separator{
        border: .1rem solid $colorOrange;
        background-color: $colorOrange;
  
      }
      .text-subtitle2{
        font-size: 1rem;
        padding: .5rem 0;
        color: white;
  
      }
      .q-card__actions{
          display: flex;
          justify-content: space-between;
  
          .infos-establishment{
              display: flex;
              color: white;
              
          }
      }
    &:hover{
      border: 1px solid black;
      border-left: 4px solid $colorOrange;
      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, .5);
  
    }
  }  
}
</style>