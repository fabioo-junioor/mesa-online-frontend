<script setup>
import NavBar from './components/NavBar.vue'

/*
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
*/
</script>

<template>
  <div id="app">
    <NavBar />
  </div>
</template>

<style lang="scss" scoped>
  #app{
    min-width: 100vw;
    min-height: 100vh;

  }
</style>
