<script setup>
import { onMounted } from 'vue'
import { useQuasar } from 'quasar'

const props = defineProps({
    type: String,
    msg: String
})

const $q = useQuasar()

const trigger = () => {
    $q.notify({
        type: props.type,
        message: props.msg
    })
}
onMounted(() => {
    trigger()

})
</script>
<template>
    
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");


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