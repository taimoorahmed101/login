let userArray = [];

(() => {

    let userInfo = localStorage.getItem('userData')
    console.log(userInfo)

    if (userInfo) {
        userArray = JSON.parse(userInfo)
    }

    let userLogged = localStorage.getItem('loggedUser')
    console.log(userLogged)

    if(userLogged){
    window.location.href = 'index.html'
    }

})()



let login = (e) => {
    e.preventDefault();


    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    let isEmailValid = false;

    for (let i = 0; i < userArray.length; i++) {

    

        if (email === userArray[i].email) {

            isEmailValid = true;

            if (password === userArray[i].password) {
                window.location.href = 'index.html'
                localStorage.setItem('loggedUser', JSON.stringify(userArray[i]));
            }
            else {
                document.getElementById('passerror').textContent = `Invalid Password`;
                setTimeout(() => {
                    document.getElementById('passerror').textContent = ``;
                }, 3000)
            }
        }
    }


    if (!isEmailValid) {


        document.getElementById('emailerror').textContent = `Invalid Email`;
        setTimeout(() => {
            document.getElementById('emailerror').textContent = ``;
        }, 3000)

    }




}