<script setup>
import { onMounted } from "vue";

const props = defineProps(['imgSrc', 'nameUser', 'width', 'height', 'fit']);

onMounted(() => {
    //console.log(props.imgSrc, props.nameUser);
})
</script>
<template>
    <div id="card-image-profile">
        <q-card class="my-card">
            <q-card-section horizontal>
                <q-img
                    class="col-6"
                    :src="props.imgSrc"
                    :width="props.width"
                    :height="props.height"
                    :fit="props.fit"
                    spinner-color="orange-9">
                    <div class="absolute-bottom text-subtitle2 text-center">
                        {{ props.nameUser }}
                    </div>
                </q-img>
            </q-card-section>
        </q-card>
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
#card-image-profile{
    .my-card{
        .q-img{
            border: 2px solid $iconOrange;
            box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, .6);
            border-radius: 5px;

            .absolute-bottom{
                background-color: rgba(0, 0, 0, .7);

            }
        }
    }
}
</style>