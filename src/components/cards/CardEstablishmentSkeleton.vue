<script setup>
</script>
<template>
  <div id="card-establishment-skeleton">
    <q-card class="my-card" dark bordered>
      <q-card-section horizontal>
        <q-img class="col-6">
          <q-skeleton dark height="100%" width="100%" />
        </q-img>
        <q-card-section>
          <div class="text-subtitle2">
            <q-skeleton dark bordered type="text" width="30%" />
            <q-skeleton dark bordered type="text" width="50%" />
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator color="white" />

      <q-card-actions>
        <div class="infos-establishment">
          <div class="q-ma-sm">
            <q-skeleton dark bordered type="QBadge" height="1.5rem" width="5rem" />
          </div>
          <div class="q-ma-sm">
            <q-skeleton dark bordered type="QBadge" height="1.5rem" width="5rem" />
          </div>
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>
<style lang="scss" scoped>
#card-establishment-skeleton{
  .my-card{
      width: 25rem;
      cursor: pointer;
      background-color: $background;
      border-left: 4px solid $grey-5;

      .q-card__section{
        width: 100%;

        .text-subtitle2{
          font-size: 1rem;
          padding: .5rem 0;
    
        }
      }  
      .q-card__actions{
          display: flex;
          justify-content: space-between;
  
          .infos-establishment{
            width: 100%;
            display: flex;
              
          }
      }
    &:hover{
      box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, .3);
  
    }
  }  
}
</style>