// =========menu-toggle===========\\

var menuItems = document.getElementById("menuItems");

menuItems.style.maxHeight = '0px';

function menutoggle(){
    if(menuItems.style.maxHeight == "0px")
    {
        menuItems.style.maxHeight = "200px";
    }
    else{
        menuItems.style.maxHeight = "0px";
    }
}



// =========bootstrap modal==============\\
document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show();
    }
})




//-------Signup page & Login page validation--------
function onSignup() {
    // get input values

   var firstName = document.getElementById("firstName");
   var lastName = document.getElementById("lastName");
   var email = document.getElementById("email");
   var password = document.getElementById("password");
   var age = document.getElementById("age");
   var gender = document.getElementById("gender");
   var phone = document.getElementById("phone");
   var adress = document.getElementById("adress");
   var message = document.getElementById("message");

   var user = {
       firstName: firstName.value,
       lastName: lastName.value,
       email: email.value,
       password: password.value,
       age: age.value,
       gender: gender.value,
       phone: phone.value,
       adress: adress.value,
   }

   var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
   var userIdx = users.findIndex(function (val) {
       return val.email.toLowerCase() === user.email.toLowerCase()
   });

   if (userIdx === -1) {
        // this user is not exist
       users.push(user);
        // store in storage
       localStorage.setItem("users", JSON.stringify(users));
        // redirect to login page
       location.href = "login.html";
   } else {
       message.innerHTML = user.email + " use in another account";
   }
    // clear state
   setTimeout(() => {
       message.innerHTML = "";
   }, 2000);


    // console.log(user);


}

function onLogin() {
    // get input values
   var email = document.getElementById("email");
   var password = document.getElementById("password");
   var message = document.getElementById("message");

   var user = {
       email: email.value,
       password: password.value,
   }

   var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
   var currentUser = users.find(function (val) {
       return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
   });

   if (currentUser) {
       localStorage.setItem("user", JSON.stringify(currentUser));
        // user login
       location.href = "index.html";
   } else {
       message.innerHTML = "Invalid credentials";
   }
    // clear state
   setTimeout(() => {
       message.innerHTML = "";
   }, 2000);
}

// function onLogout() {
//    var message = document.getElementById("message");
//    localStorage.removeItem("user");
//    message.innerHTML = "Good Bye.!";
//    // clear state
//    setTimeout(() => {
//        location.href = "login.html";
//    }, 2000);
// }








