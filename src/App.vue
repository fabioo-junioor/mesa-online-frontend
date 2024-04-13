<script setup>
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
    <form>
      <input type="text" v-model="dadosUsuario.email" placeholder="email" />
      <input type="password" v-model="dadosUsuario.senha" placeholder="senha" />
    </form>
      <button @click="efetuarLogin">Logar</button>
      <button @click="auth">Autenticar</button>
  </div>
</template>

<style scoped>
</style>
