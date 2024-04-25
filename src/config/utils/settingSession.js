function saveTokenUserStorage(userToken){
    localStorage.setItem('token', userToken)

}
function getTokenUser(){
    return localStorage.getItem('token') ? localStorage.getItem('token') : null

}
function deleteTokenUser(){
    localStorage.removeItem('token')

}
function saveDataUserStorage(dadosUser){
    localStorage.setItem('dadosUser', dadosUser)

}
function getDataUser(){
    return localStorage.getItem('dadosUser') ? localStorage.getItem('dadosUser') : null

}
function deleteDataUser(){
    localStorage.removeItem('dadosUser')

}
export { getTokenUser,
        saveTokenUserStorage,
        deleteTokenUser,
        getDataUser,
        saveDataUserStorage,
        deleteDataUser }