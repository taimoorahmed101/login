let loggedArray;
(() => {

    let userLogged = localStorage.getItem('loggedUser')
    console.log(userLogged)


    loggedArray = JSON.parse(userLogged)


    if(!userLogged){
    window.location.href = 'login.html'
    }

})()

console.log(loggedArray)

document.getElementById('name').innerHTML = loggedArray.firstName



let logOut = () => {
   localStorage.removeItem('loggedUser');

   window.location.href = 'login.html'

}






