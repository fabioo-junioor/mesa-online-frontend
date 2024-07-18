<script setup>
const props = defineProps(['name', 'description', 'isVacancies', 'isOpen']);

</script>
<template>
  <div id="card-establishment">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img class="col-6" src="https://cdn.quasar.dev/img/parallax1.jpg">
            <div class="absolute-bottom text-subtitle2 text-center">{{ name }}</div>
        </q-img>
        <q-card-section>
          {{ props.description }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <div class="infos-establishment">
            <span v-if="isOpen" class="q-ma-sm" style="color: green;">Aberto</span>
            <span v-else class="q-ma-sm" style="color: red;">Fechado</span>

            <span v-if="isVacancies && isOpen" class="q-ma-sm">A vagas</span>
            <span v-if="!isVacancies && isOpen" class="q-ma-sm">Não a vagas</span>
        </div>
        <q-btn outline color="teal">Reservar</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>
<style lang="scss" scoped>
.my-card{
    width: 25rem;

    .q-card__actions{
        display: flex;
        justify-content: space-between;

        .infos-establishment{
            span{
                font-weight: 500;
                
            }
        }

    }

}
</style>