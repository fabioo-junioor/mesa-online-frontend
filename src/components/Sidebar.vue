<script setup>

</script>
<template>
    <div id="sidebar">
        <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
        <b-sidebar id="sidebar-1" title="Sidebar" shadow visible hide>
            <div class="px-3 py-2">
                <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
            </div>
        </b-sidebar>
    </div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');
    #sidebar{
        background-color: red;

        #sidebar-1{
            

            .b-sidebar-body{
                background-color: blueviolet !important;

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