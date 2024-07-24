<script setup>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const schedulesEstablishments = reactive([
  {
    segunda: {
      manha: { abertura: '08:00', fechamento: '12:00' },
      tarde: { abertura: '14:00', fechamento: '17:00' },
      noite: { abertura: '19:00', fechamento: '23:00' }
    }
  },
  {
    terça: {
      manha: { abertura: '08:00', fechamento: '12:00' },
      tarde: { abertura: '14:00', fechamento: '17:00' },
      noite: { abertura: '19:00', fechamento: '23:00' }
    }
  }
]);
const formatString = string => string.charAt(0).toUpperCase() + string.substring(1);

onMounted(() => {
  
});
</script>
<template>
  <div id="details-establishment">
    <div class="banner-establishment q-mb-md">
      <h4 class="q-ml-xl q-mb-md">Rock lanches</h4>
      <div class="socials-establishment q-mr-xl q-mb-md">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i class="bx bxl-instagram q-mr-md" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i class="bx bxl-facebook-square" />
        </a>
      </div>
    </div>
    <div class="data-establishment q-pa-sm">
      <div class="data-establishment-left q-pa-md">
        <h4 class="q-pa-sm">Realizar reserva</h4>
      </div>
      <div class="data-establishment-right q-pa-md">
        <div class="data-establishment-address q-pa-sm">
          <h4 class="q-pa-sm">Endereço</h4>
          <div>
            <p><span>Estado:</span> Rio grande</p>
            <p><span>Cidade:</span> Santa Maria</p>
            <p><span>Rua:</span> rua 1</p>
          </div>
        </div>
        <div class="data-establishment-schedules q-pa-sm">
          <h4 class="q-pa-sm">Horários</h4>
          <div v-for="i in schedulesEstablishments" :key="i"
            class="data-schedules">
            <h5 class="q-pl-sm">{{ formatString(String(Object.keys(i))) }}</h5>
            <div class="data-schedules-shifts q-pa-sm">
              <p><span>Manha:</span> {{ i[String(Object.keys(i))]['manha']['abertura'] }} as {{ i[String(Object.keys(i))]['manha']['fechamento'] }}</p>
              <p><span>Tarde:</span> {{ i[String(Object.keys(i))]['tarde']['abertura'] }} as {{ i[String(Object.keys(i))]['tarde']['fechamento'] }}</p>
              <p><span>Noite:</span> {{ i[String(Object.keys(i))]['noite']['abertura'] }} as {{ i[String(Object.keys(i))]['noite']['fechamento'] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#details-establishment {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 3.5rem);

  .banner-establishment {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    min-height: 15rem;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
      url("../../assets/imagens/background_page_establishment.jpg") no-repeat
        fixed center;
    background-size: cover;
    border-radius: 0 0 50px 50px;
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, .7);

    h4 {
      color: white;
      text-decoration: underline;

    }
    .socials-establishment {
      i {
        color: white;
        font-size: 2rem;

        &:hover {
          color: $iconWhiteHover;
        }
      }
    }
  }
  .data-establishment {
    display: flex;
    justify-content: center;

    .data-establishment-left{
      width: 60%;
      background-color: $cardsDark;
      border: 1px solid rgba(0, 0, 0, .3);
      border-radius: 5px;

      h4{
        text-align: center;
        color: white;

      }
    }
    .data-establishment-right{
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: .7rem;

      .data-establishment-address{
        border-radius: 5px;
        background-color: $cardsDark;
        border: 1px solid rgba(0, 0, 0, .3);
        color: white;

        h4{
          text-align: center;

        }
      }
      .data-establishment-schedules{
        border-radius: 5px;
        background-color: $cardsDark;
        border: 1px solid rgba(0, 0, 0, .3);
        color: white;

        h4{
          text-align: center;

        }
        .data-schedules{
          h5{
            font-size: 1.5rem;
            border-bottom: 1px solid white;

          }
          p{
            margin: 0;

          }
          .data-schedules-shifts{
            span{
              font-weight: 500;
              font-size: 1rem;

            }          
          }
        }
      }
    }
  }
}
</style>