const urlApi = import.meta.env.VITE_ROOT_API

async function getDadosUsuarioApi(){

}
async function getDadosPessoaApi(token, id){
    const response = await fetch(urlApi+`pessoa/${id}`, {
        headers: { Authorization: `Bearer ${token}`},
        method: 'GET',
        mode: 'cors',
    })
    const data = await response.json()
    if(!data.msg){
      return data

    }
    return null
      
}
export { getDadosPessoaApi }