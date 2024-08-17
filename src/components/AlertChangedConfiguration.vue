<script setup>
import { onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { useStore } from 'vuex';

const store = useStore();
const $q = useQuasar()

const trigger = () => {
    $q.notify({
        type: store.getters.getAlertConfig.type,
        message: store.getters.getAlertConfig.message + '!',
        progress: true,
        position: 'top-right',
        timeout: 2000
        
    })
}
onMounted(() => {
    trigger()

})
</script>
<template>
    
</template>
<style lang="scss" scoped>

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