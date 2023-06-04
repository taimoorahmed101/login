let userArray = [];

(()=>{

    let userInfo = localStorage.getItem('userData')
    console.log(userInfo)

    if(userInfo){
       userArray = JSON.parse(userInfo)
    }

    let userLogged = localStorage.getItem('loggedUser')
    console.log(userLogged)

    if(userLogged){
    window.location.href = 'index.html'
    }
})()

// ()();


// let validation 

let signUp = (e) => {
    e.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cPassword = document.getElementById('cPassword').value;
    let inputCity = document.getElementById('inputCity').value;
    let gender = document.getElementById('gender').value;



    for(let i =0; i < userArray.length; i++){

        if(email === userArray[i].email){
        document.getElementById('emailError').textContent = `Your email is already exist`;
        setTimeout(() => {
            document.getElementById('emailError').textContent = ``;
        }, 3000)
        return;
        }
    }

    if (password !== cPassword) {
        document.getElementById('passError').textContent = `Kindly enter same password`;

        setTimeout(() => {
            document.getElementById('passError').textContent = ``;
        }, 3000)
        return;
    }

    const userObj = {
        firstName,
        lastName,
        email,
        password,
        cPassword,
        inputCity,
        gender
    }



    userArray.push(userObj)

    let stringified = JSON.stringify(userArray);

    localStorage.setItem('userData', stringified)


    console.log(userArray);


    e.target.reset();

}