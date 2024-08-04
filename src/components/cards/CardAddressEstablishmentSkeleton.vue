<script setup>
</script>
<template>
    <div id="card-address-establishment-skeleton">
        <q-card class="my-card">
            <q-card-section class="q-pa-xs" horizontal>
                <p class="q-pa-sm"><q-skeleton dark bordered width="50%" height="2rem" type="text" /></p>
                <p class="q-pa-sm"><q-skeleton dark bordered width="60%" height="2rem" type="text" /></p>
                <p class="q-pa-sm"><q-skeleton dark bordered width="70%" height="2rem" type="text" /></p>
                <p class="q-pa-sm"><q-skeleton dark bordered width="80%" height="2rem" type="text" /></p>
            </q-card-section>
        </q-card>
    </div>
</template>
<style lang="scss" scoped>
#card-address-establishment-skeleton{
    .my-card{
        background-color: transparent;
        box-shadow: none;
        
        .q-card__section{
            display: flex;
            flex-direction: column;

            p{
                margin: 0;
                
            }
        }        
    }
}
</style>