let eyeicon = document.getElementById("eyeicon");
let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("Strength");
let input = document.getElementById("input-box");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}";

const allChars = upperCase + lowerCase + number + symbol;

eyeicon.onclick = function(){
    if(pass.type == "password"){
       pass.type = "text";
       eyeicon.src ="eye-open.png"; 
    }else{
        pass.type = "password";
        eyeicon.src ="eye-close.png";
    }
}
pass.addEventListener('input', () => {
    if(pass.value.length > 0){
    msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }

    if(pass.value.length >= 1 && pass.value.length < 4){
        str.innerHTML = "weak";
        input.style.border = "2px solid red";
        msg.style.color = "#ff5925";
        }
        else if(pass.value.length === 0){
            input.style.border = "none";
        }
        else if(pass.value.length >= 4 && pass.value.length < 8){
         str.innerHTML = "medium";
         input.style.border = "2px solid yellow";
         msg.style.color = "yellow";
        }
        else if(pass.value.length >= 8){
            str.innerHTML = "strong";
            input.style.border = "2px solid lightGreen";
            msg.style.color = "lightGreen";
        }
    
})


function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password = number[Math.floor(Math.random() * number.length)];
    password = symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    pass.value = password;
}
function copyPassword(){
    pass.select();
    document.execCommand("copy");
}