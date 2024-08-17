<script setup>
import { ref } from 'vue';

const props = defineProps(['dataUserReservation']);
const filter = ref('');
const columns = [
    { name: 'img', label: 'Foto', align: 'left', field: 'img', headerStyle: "font-size: 1rem" },
    { name: 'name', label: 'Nome usuário', field: 'name', sortable: true, headerStyle: "font-size: 1rem" },
    { name: 'date', label: 'Data reserva', field: 'date', sortable: true, headerStyle: "font-size: 1rem"},
    { name: 'totalPeoples', label: 'Total de pessoas', field: 'totalPeoples', sortable: true, headerStyle: "font-size: 1rem"},
    { name: 'status', label: 'Status da reserva', field: 'status', sortable: true, headerStyle: "font-size: 1rem"}
];
</script>
<template>
  <div id="card-user-reservation">
    <q-table
        dark
        bordered
        color="grey-1"
        card-class="text-grey-1"
        :columns="columns"
        :rows="props.dataUserReservation"
        :filter="filter"
        no-data-label="Sem agendamento!"
        row-key="name">
        <template v-slot:top-right>
            <q-input
                dark
                dense
                color="grey-7"
                v-model="filter"
                placeholder="Buscar">
                <template v-slot:append>
                    <q-icon name="search" />
                </template>
            </q-input>
        </template>
        <template v-slot:body="props">
            <q-tr :props="props">
                <q-td key="img" :props="props">
                    <q-avatar>
                        <img :src="props.row.img" />
                    </q-avatar>
                </q-td>
                <q-td key="name" :props="props">
                    {{ props.row.name }}
                </q-td>
                <q-td key="date" :props="props">
                    {{ props.row.date }}
                </q-td>
                <q-td key="totalPeoples" :props="props">
                    {{ props.row.totalPeoples }}
                </q-td>
                <q-td key="status" :props="props">
                    <q-badge
                        class="q-pa-sm" 
                        outline
                        :color="props.row.status == 'Ativo' ? 'green' : 'red'">
                        {{ props.row.status }}
                    </q-badge>
                </q-td>
            </q-tr>
        </template>
    </q-table>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");

#card-user-reservation{
    .q-table__container{
        background-color: #222831;
        box-shadow: none;

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