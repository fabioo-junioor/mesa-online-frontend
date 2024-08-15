<script setup>
const props = defineProps(['daysOfTheWeek', 'morningOpen', 'morningClose', 'afternoonOpen', 'afternoonClose', 'nightOpen', 'nightClose']);

</script>
<template>
    <div id="card-schedules-establishment">
        <q-card class="my-card" dark bordered>
            <q-card-section class="q-pa-xs" horizontal>
                <h4 class="q-pa-sm">{{ props.daysOfTheWeek }}</h4>
                <div>
                    <p class="q-pa-sm"><span>Manha: </span>{{ props.morningOpen }} as {{ props.morningClose }}</p>
                    <p class="q-pa-sm"><span>Tarde: </span>{{ props.afternoonOpen }} as {{ props.afternoonClose }}</p>
                    <p class="q-pa-sm"><span>Noite: </span>{{ props.nightOpen }} as {{ props.nightClose }}</p>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
#card-schedules-establishment{
    .my-card{
        box-shadow: none;

        .q-card__section{
            display: flex;
            flex-direction: column;
            background-color: $darkColorPrimary;

            h4{
                font-size: 1.5rem;
                color: $whiteColorPrimary;

            }
            p{
                margin: 0;
                color: $whiteColorPrimary;

                span{
                    font-weight: 500;
                    font-size: 1rem;
                    color: $whiteColorPrimary;
                    
                }
                
            }
        }
        
    }
}
</style>