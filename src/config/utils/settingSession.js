function saveDadosUsuario(dadosUsuario){
    localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario))

}
function getDadosUsuario(){
    if(localStorage.getItem('dadosUsuario')){
        let dadosUsuarioString = localStorage.getItem('dadosUsuario')
        let dadosUsuarioObj = JSON.parse(dadosUsuarioString)
        return dadosUsuarioObj

    }
    return null

}
function deleteDadosUsuario(){
    localStorage.removeItem('dadosUsuario')

}
function saveDadosPossoa(dadosPessoa){
    localStorage.setItem('dadosPessoa', JSON.stringify(dadosPessoa))

}
function getDadosPessoa(){
    if(localStorage.getItem('dadosPessoa')){
        let dadosPessoaString = localStorage.getItem('dadosPessoa')
        let dadosPessoaObj = JSON.parse(dadosPessoaString)
        return dadosPessoaObj

    }
    return null

}
function deleteDadosPessoa(){
    localStorage.removeItem('dadosPessoa')

}

export { getDadosUsuario,
        saveDadosUsuario,
        deleteDadosUsuario,
        getDadosPessoa,
        saveDadosPossoa,
        deleteDadosPessoa }