<script setup>
import Menu from './components/Menu.vue'
import Inicio from './pages/Inicio.vue'
import { onMounted, reactive } from "vue"

const dadosUsuario = reactive({
  email: '',
  senha: ''

})
const efetuarLogin = async () => {
  try{
    const response = await fetch(`http://localhost:8000/login`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(dadosUsuario)
    })
    const data = await response.json()

    if(data){
      console.log(data)
      localStorage.setItem('token', data)

    }
  }catch(e){
    console.log('Error', e)

  }
}
const auth = async () =>{
  try{
    const authSession = 'Bearer '+localStorage.getItem('token')
    const response = await fetch(`http://localhost:8000/usuario`, {
      method: 'GET',
      headers: {"Authorization": authSession}
    })
    const data = await response.json()
    console.log(data)

  }catch(e){
    console.log(e)

  }
}
onMounted(async () => {

})
</script>

<template>
  <div id="app">
    <Menu />
  </div>
</template>

<style scoped>
</style>
