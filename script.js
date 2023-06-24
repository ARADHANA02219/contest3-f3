/// Links
const signUpLink = document.getElementById("sign-up-link");
const profileLink = document.getElementById("profile-link");

/// form details
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password-2");
const signUpBtn = document.getElementById("signUp-btn");

/// error/success texts
const errorText = document.getElementById("error-text");
const successText = document.getElementById("success-text");

/// function to check valid mail
function checkMail(email){
    // skipping this method
}
function generateToken(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789';
    let res = '';
    let length = characters.length;
    for(let i = 1; i<=16; i++){
        res += characters.charAt(Math.floor(Math.random()*length));
    }
    return res;
}

signUpBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    username.value === "" ||
    email.value === "" ||
    password.value === "" ||
    password2.value === ""
  ) {
    errorText.innerHTML = `All fields are mandatory`;
    return;
  }
  if (password.value.length < 8) {
    errorText.innerHTML = `Password length must be greater than 8`;
    password.focus();
    return;
  }
  if(password.value !== password2.value){
    errorText.innerHTML = `Password doesn't match`;
    password2.focus();
    return;
  }
  errorText.innerHTML=``;
  let user={
    username: username.value,
    email: email.value,
    token: generateToken(),
  }
  localStorage.setItem('user',JSON.stringify(user));
  successText.innerHTML=`Successfully signed up`;

  const link = document.createElement('a');
  link.href='./profile.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

profileLink.addEventListener('click',()=>{
    if(!localStorage.getItem('user')){
        // we are in sign up page
        // then we click profile link
        profileLink.href='#';
        alert("You don't have account, signup first");
    } else{
        profileLink.href='./profile.html';
    }
});

signUpLink.addEventListener('click',()=>{
    if(localStorage.getItem('user')){
        signUpLink.href='#';
        alert("You already have an account, go to profile");
    } else{
        signUpLink.href='./index.html';
    }
});