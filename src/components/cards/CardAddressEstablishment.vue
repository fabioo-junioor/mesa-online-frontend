<script setup>
const props = defineProps(['state', 'city', 'street', 'number']);

</script>
<template>
    <div id="card-address-establishment">
        <q-card class="my-card">
            <q-card-section class="q-pa-xs" horizontal>
                <p class="q-pa-sm"><span>Estado: </span>{{ props.state }}</p>
                <p class="q-pa-sm"><span>Cidade: </span>{{ props.city }}</p>
                <p class="q-pa-sm"><span>Rua: </span>{{ props.street }}</p>
                <p class="q-pa-sm"><span>Numero: </span>{{ props.number }}</p>
            </q-card-section>
        </q-card>
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
#card-address-establishment{
    .my-card{
        background-color: transparent;
        box-shadow: none;
        .q-card__section{
            display: flex;
            flex-direction: column;

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