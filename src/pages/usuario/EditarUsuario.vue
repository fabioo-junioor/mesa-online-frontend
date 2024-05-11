<script setup>
import { reactive } from 'vue'

const dadosFormulario = reactive({
    nome: '',
    telefone: ''

})
</script>
<template>
    <div id="editar-usuario">
        <div class="editar-usuario-formulario">
            <h4>Editar usuário</h4>
            <q-form @submit="efetuarLoginOrCadastro">
                <q-input
                square
                filled
                ref="inputRef"
                type="text"
                label="Nome"
                v-model="dadosFormulario.nome"
                :rules="[(val) => !!val || 'Preencha o campo']" />
                <q-input
                square
                filled
                ref="inputRef"
                type="text"
                label="Telefone"
                v-model="dadosFormulario.telefone"
                :rules="[(val) => !!val || 'Preencha o campo']" />
                <div>
                    <q-btn
                        color="secondary"
                        label="Entrar"
                        type="submit" />
                </div>
            </q-form>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");

    #editar-usuario{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 3.1rem);
        padding: 1rem;
        font-family: "Fredoka", sans-serif;
        background-color: $background;

        .editar-usuario-formulario{
            box-shadow: 4px 4px 0px 0px black;
            background-color: white;
            width: 50%;
            padding: 1rem 0;
            display: flex;
            flex-direction: column;
            align-items: center;

            h4{
                color: $dark;
                padding: 1rem 0;

            }
            .q-form{
                width: 100%;
                padding: .5rem;

            }
            .q-btn{
                width: 100%;
                height: 3rem;
                margin: 2rem 0;

            }
        }
    }
</style>