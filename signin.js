let form=document.getElementById("sign");
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let username = document.getElementById("UserName")
    let firstname = document.getElementById("FirstName")
    let email = document.getElementById("Email")
    let mobilenumber = document.getElementById("MobileNumber")
    let password = document.getElementById("Password")
    let usernamevalue = username.value;
    let firstnamevalue = firstname.value;
    let mobilenumbervalue = mobilenumber.value;
    let emailvalue= email.value;
    let passwordvalue = password.value;
    localStorage.setItem('username', usernamevalue)
    localStorage.setItem('firstname',firstnamevalue )
    localStorage.setItem('email', emailvalue)
    localStorage.setItem('mobilenumber',mobilenumbervalue)
    localStorage.setItem('password', passwordvalue)

})
