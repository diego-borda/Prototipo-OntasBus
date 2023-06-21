document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn_Entrar").addEventListener("click", EntrarAMain);
document.getElementById("btn__GuardarRegistro").addEventListener("click",RegistrarUsuario)
window.addEventListener("resize", anchopagina);
//Funcion para evitar entrar a la pagina principal nuevamente luego de dar flecha adelante
// window.addEventListener('load', function() {
//     // Reemplaza la URL actual en el historial del navegador con la URL de la página de inicio de sesión
//     window.history.replaceState(null, 'Main.html', 'index.html');
// });

/*window.onpopstate = function(event) {window.location.href = "index.html";
        history.pushState(null, null, "index.html");}*/


//Declaracion de variables
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");
var contenedor_todo = document.querySelector(".contenedor__todo");
var main = document.querySelector(".main");
//veamos si funciona con esto
//var numEntradas=history.length;

function anchopagina() {
    if (window.innerWidth > 850) {
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        contenedor_todo.style.paddingTop = "50";
        main.style.marginTop = "50px";

    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none"
        contenedor_login_register.style.left = "0";
        contenedor_todo.style.padding = "5";
        main.style.marginTop = "20px";
    }
}


anchopagina();

function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }

}

function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }

}

function EntrarAMain(event) {
    event.preventDefault();
    var email = document.getElementById("txtCorreo").value;
    var password = document.getElementById("txtContraseña").value;
    if (email !== "" && password !== "") {
        window.location.href = "Main.html";

    } else {
        alert("Por favor, completa todos los campos");
    }
}

function toggleButton() {
    const checkbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("btn__GuardarRegistro");
  
    if (checkbox.checked) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

function RegistrarUsuario(){
    var nombre=document.getElementById("txtNombre").value;
    var correo=document.getElementById("txtCorreoReg").value;
    var usuario=document.getElementById("txtUsuario").value;
    var contraseña=document.getElementById("txtContraseñaReg").value;

    if(nombre !== "" && correo !== "" && usuario !=="" && contraseña !== "") {
        alert("Usuario registrado correctamente")
    }else{
        alert("Por favor, completa todos los campos");
    }
}