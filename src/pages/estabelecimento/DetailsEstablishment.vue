<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

</script>
<template>
    <div id="details-establishment">
        <div class="banner-establishment">
            <h4 class="q-ml-xl q-mb-md">teste</h4>
            <div class="socials-establishment q-mr-xl q-mb-md">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class='bx bxl-instagram q-mr-md' />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class='bx bxl-facebook-square' />
                </a>
            </div>
        </div>
        <div class="data-establishment q-ma-sm">
            {{ route.params.id }}
        </div>
    </div>
</template>
<style lang="scss" scoped>
#details-establishment{
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 3.1rem);
    background-color: yellow;

    .banner-establishment{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: 15rem;
        width: 100vw;
        background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .7)),
            url("../../assets/imagens/background_page_establishment.jpg") no-repeat fixed center;
        background-size: cover;

        h4{
            color: white;
            text-decoration: underline;

        }
        .socials-establishment{
            i{
                color: white;
                font-size: 2rem;

                &:hover{
                    color: $iconWhiteHover;

                }
            }
        }
    }
    .data-establishment{
        background-color: antiquewhite;

    }
}
</style>