
let registrationForm=document.querySelector('#register-form');
registrationForm.addEventListener('submit',function(event){
    event.preventDefault();
    if(validateForm())
    {
        alert('form submitted successfully');
    }
  
});
let validateForm=()=>{
    return(checkuserName()& checkemail()&checkpassword()& checkConfirmPassword());
};
let checkuserName=()=>{
    let inputEl=document.querySelector('#username'); 
    let inputFeedback=document.querySelector('#username-feedback'); 
    let regEx=/^[a-zA-z0-9]{4,15}$/;
    if (regEx.test(inputEl.value)) {
        makeValid(inputEl,inputFeedback);
        return true;
    }
    else{
        makeInValid(inputEl,inputFeedback)
        return false;
    }
};
let makeValid=(inputEl,inputFeedback)=>{
    inputEl.classList.add('is-form-valid');
    inputEl.classList.remove('is-form-invalid');
    inputFeedback.classList.add('text-success');
    inputFeedback.classList.remove('text-danger');
    inputFeedback.innerText='Looks Good';

};

let makeInValid=(inputEl,inputFeedback)=>{
    inputEl.classList.remove('is-form-valid');
    inputEl.classList.add('is-form-invalid');
    inputFeedback.classList.remove('text-success');
    inputFeedback.classList.add('text-danger');
    inputFeedback.innerText=`Please enter a ${inputEl.placeholder}`;

};

//email
let checkemail=()=>{
    let inputEl=document.querySelector('#email'); 
    let inputFeedback=document.querySelector('#email-feedback'); 
    let regEx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regEx.test(inputEl.value)) {
        makeValid(inputEl,inputFeedback);
        return true;
    }
    else{
        makeInValid(inputEl,inputFeedback);
        return false;
    }
};


let checkpassword=()=>{
    let inputEl=document.querySelector('#password'); 
    let inputFeedback=document.querySelector('#password-feedback'); 
    let regEx=/^[A-Za-z]\w{7,14}$/;
    if (regEx.test(inputEl.value)) {
        makeValid(inputEl,inputFeedback);
        return true;
    }
    else{
        makeInValid(inputEl,inputFeedback);
        return false;
    }
};

let checkConfirmPassword=()=>{
    let pass=document.querySelector('#password');
    let inputEl=document.querySelector('#confirmpassword'); 
    let inputFeedback=document.querySelector('#confirmpassword-feedback'); 
    let regEx=/^[A-Za-z]\w{7,14}$/;
    if (regEx.test(inputEl.value)&&(inputEl.value===pass.value)) {
        makeValid(inputEl,inputFeedback);
        return true;
    }
    else{
        makeInValid(inputEl,inputFeedback);
        return false;
    }
};
//uname field evealuted keyup
let usernameEl=document.querySelector('#username'); 
usernameEl.addEventListener('keyup',function(){
checkuserName();
});

let emailEl=document.querySelector('#email'); 
emailEl.addEventListener('keyup',function(){
    checkemail();
});
let passwordEl=document.querySelector('#password'); 
passwordEl.addEventListener('keyup',function(){
    checkpassword();
});
let confirmpasswordEl=document.querySelector('#confirmpassword'); 
confirmpasswordEl.addEventListener('keyup',function(){
    checkConfirmPassword();
});

//SMS App 
let textAreaEl=document.querySelector('#text-area');
let charCoutEl=document.querySelector('#charcount');

textAreaEl.addEventListener('keyup',function(){

    let textlength=textAreaEl.value.length;
    charCoutEl.innerText=textlength;
});