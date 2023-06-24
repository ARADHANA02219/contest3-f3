const fullName = document.getElementById("fullname");
const emailID = document.getElementById("email-id");
const logOutBtn = document.getElementById("logout-btn");
const signUpLink = document.getElementById("sign-up-link");
const profileLink = document.getElementById("profile-link");

if (localStorage.getItem("user")) {
  const user = JSON.parse(localStorage.getItem("user"));
  fullName.innerHTML = user.username;
  emailID.innerHTML = user.email;
}

logOutBtn.addEventListener('click',()=>{
    localStorage.clear();
    const link = document.createElement('a');
    link.href='./index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})

profileLink.addEventListener('click',()=>{
    if(!localStorage.getItem('user')){
        // we are in sign up page
        // then we click profile link
        profileLink.href='./index.html';
    } else{
        profileLink.href='#';
        alert("You are already in your profile");
    }
});

signUpLink.addEventListener('click',()=>{
    if(localStorage.getItem('user')){
        signUpLink.href='#';
        alert("you are already signed up");
    } else{
        signUpLink.href='./index.html';
    }
});