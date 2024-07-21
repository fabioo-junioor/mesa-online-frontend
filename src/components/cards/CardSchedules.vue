<script setup>
const props = defineProps(['dayWeek', 'morningOpen', 'morningClose', 'afternoonOpen', 'afternoonClose', 'nightOpen', 'nightClose']);

</script>
<template>
  <div id="card-schedules">
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h5">{{ props.dayWeek }}</div>
        <div class="shifts q-ma-sm">
            <div class="shift q-ma-md">
                <div class="text-subtitle2 q-pa-xs">Manha</div>
                <div class="text-subtitle2 q-pa-xs">{{ props.morningOpen }} as {{ props.morningClose }}</div>
            </div>
            <div class="shift q-ma-md">
                <div class="text-subtitle2 q-pa-xs">Tarde</div>
                <div class="text-subtitle2 q-pa-xs">{{ props.afternoonOpen }} as {{ props.afternoonClose }}</div>
            </div>
            <div class="shift q-ma-md">
                <div class="text-subtitle2 q-pa-xs">Noite</div>
                <div class="text-subtitle2 q-pa-xs">{{ props.nightOpen }} as {{ props.nightClose }}</div>
            </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<style lang="scss" scoped>
#card-schedules{
    .shifts{
        display: flex;
        flex-direction: column;

        .shift{
            display: flex;
            flex-direction: column;

        }

    }
}
</style>