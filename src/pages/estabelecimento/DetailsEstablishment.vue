<script setup>
import { CardSchedules } from "../../components";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const schedulesEstablishments = [
    {
        segunda: {
            manha: ['08:00', '12:00'],
            tarde: ['14:00', '17:00'],
            noite: ['19:00', '23:00']
        },
    },
    {
        terca: {
            manha: ['09:00', '12:00'],
            tarde: ['14:00', '17:00'],
            noite: ['19:00', '23:00']
        }
    }    
]
const getSchedules = (obj, v1, v2, v3) => {
    //console.log(obj[v1][v2][v3]);
    return obj[v1][v2][v3];
}
onMounted(() => {
  //console.log(schedulesEstablishments);
});
</script>
<template>
  <div id="details-establishment">
    <div class="banner-establishment">
      <h4 class="q-ml-xl q-mb-md">teste</h4>
      <div class="socials-establishment q-mr-xl q-mb-md">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i class="bx bxl-instagram q-mr-md" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i class="bx bxl-facebook-square" />
        </a>
      </div>
    </div>
    <div class="data-establishment q-ma-sm">
      <div class="data-establishment-address">
        <h5>Localização</h5>
        <div>
          <p>Estado:</p>
          <p>Cidade:</p>
          <p>Rua:</p>
          <p>Numero:</p>
        </div>
      </div>
      <div class="data-establishment-times">
        <h5>Horários</h5>
        <div>
          <CardSchedules
            v-for="i in schedulesEstablishments"
            :key="i"
            :dayWeek="String(Object.keys(i))"
            :morningOpen="getSchedules(i, String(Object.keys(i)), 'manha', 0)"
            :morningClose="getSchedules(i, String(Object.keys(i)), 'manha', 1)"
            :afternoonOpen="getSchedules(i, String(Object.keys(i)), 'tarde', 0)"
            :afternoonClose="getSchedules(i, String(Object.keys(i)), 'tarde', 1)"
            :nightOpen="getSchedules(i, String(Object.keys(i)), 'noite', 0)"
            :nightClose="i[String(Object.keys(i))]['noite'][1]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#details-establishment {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 3.1rem);
  background-color: yellow;

  .banner-establishment {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 15rem;
    width: 100vw;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
      url("../../assets/imagens/background_page_establishment.jpg") no-repeat
        fixed center;
    background-size: cover;

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
    background-color: antiquewhite;
  }
}
</style>