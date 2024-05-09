function saveTokenUser(userToken){
    localStorage.setItem('token', userToken)

}
function getTokenUser(){
    return localStorage.getItem('token') ? localStorage.getItem('token') : null

}
function deleteTokenUser(){
    localStorage.removeItem('token')

}
function saveDataUser(dadosUser){
    localStorage.setItem('dadosUser', JSON.stringify(dadosUser))

}
function getDataUser(){
    if(localStorage.getItem('dadosUser')){
        let dadosUserString = localStorage.getItem('dadosUser')
        let dadosUserObj = JSON.parse(dadosUserString)
        return dadosUserObj

    }
    return null

}
function deleteDataUser(){
    localStorage.removeItem('dadosUser')

}
export { getTokenUser,
        saveTokenUser,
        deleteTokenUser,
        getDataUser,
        saveDataUser,
        deleteDataUser }