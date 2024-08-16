<script setup>
const props = defineProps(['title', 'value', 'icon', 'color']);

</script>
<template>
  <div id="card-info">
    <q-card bordered :class="'my-card bg-' + props.color">
      <q-card-section class="card-info">
        <div class="text-h4">{{ props.value }}</div>
        <div class="text-p">{{ props.title }}</div>
      </q-card-section>

      <q-separator vertical color="white" inset />

      <q-card-section class="card-icon q-ma-sm">
        <i :class="props.icon" />
      </q-card-section>
    </q-card>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");

#card-info{
    .my-card{
        display: flex;
        box-shadow: none;

        .card-info{
            width: 85%;
            color: $whiteColorPrimary;

        }
        .card-icon{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 15%;
            
            i{
                font-size: 3rem;
                color: $whiteColorPrimary;

            }
        }
    }
}
/*################################################*/
@media only screen and (max-width: 1560px) {
}
@media only screen and (max-width: 1200px) {
}
@media only screen and (max-width: 992px) {
}
@media only screen and (max-width: 720px) {
}
@media only screen and (max-width: 481px) {
}
@media only screen and (max-width: 360px) {
}
</style>