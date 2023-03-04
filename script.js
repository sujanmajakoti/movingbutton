const emailInput=document.getElementById("email");
const passwordInput=document.getElementById("password");
const submitButton=document.getElementById("submit");

submitButton.addEventListener("mouseover",(button)=>{
    let email=emailInput.value;
    let password=passwordInput.value;

    let validation=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)?/.test(email)&&  /[a-zA-Z0-9]{10}/.test(password)
if(validation)
{
button.target.classList.toggle("stop");
submitButton.style.background="green"

}
else
{
    button.target.classList.toggle("move");
    submitButton.style.background="red"
}
})
