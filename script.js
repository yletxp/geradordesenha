//irá gerenciar o slider e botão de gerar senha
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#gerar_password");

//quantidade de caracteres de 5 a 25
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

//irá ativar o display do container
let containerPassword = document.querySelector("#container-password");

//caracteres disponíveis para gerar a senha
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&_-*"

let novaSenha = "";

//irá mostrar a qtde de caracteres conforme a posição do slider
sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;

    console.log(this.value)
}

//loop para selecionar os caracteres com a qtde desejada
function generatePassword(){
    
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()* n));
    }
    
    console.log(pass)
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

buttonElement.addEventListener("click", function () {
    generatePassword() 
})


containerPassword.addEventListener("click", function (){
    //copia a senha
    navigator.clipboard.writeText(novaSenha)
    alert("Senha copiada com sucesso!");
})