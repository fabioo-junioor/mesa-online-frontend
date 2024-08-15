<script setup>
</script>
<template>
    <div id="card-schedules-establishment-skeleton">
        <q-card class="my-card" dark bordered>
            <q-card-section class="q-pa-xs" horizontal>
                <h4 class="q-pa-sm"><q-skeleton width="50%" type="text" /></h4>
                <div>
                    <p class="q-pa-sm"><q-skeleton type="text" /></p>
                    <p class="q-pa-sm"><q-skeleton type="text" /></p>
                    <p class="q-pa-sm"><q-skeleton type="text" /></p>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>
<style lang="scss" scoped>
#card-schedules-establishment-skeleton{
    width: 11rem;
    
    .my-card{
        box-shadow: none;

        .q-card__section{
            display: flex;
            flex-direction: column;
            background-color: $darkColorPrimary;

            p{
                margin: 0;

                span{
                    font-weight: 500;
                    font-size: 1rem;
                    
                }
                
            }
        }
        
    }
}
</style>