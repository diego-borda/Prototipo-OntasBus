/*------------------ Funcionalidad Mostrar y Ocultar SubMenus -------------------------*/

/*------------------ Ocultar submenús HEADER por defecto -------------------*/
document.querySelector(".Submenu_Cuenta").style.display = "none";
document.querySelector(".SubMenu_History").style.display = "none";
document.querySelector(".Submenu_AcercaDe").style.display = "none";
// document.querySelector(".Submenu_Comentarios").style.display = "none";
document.querySelector(".Submenu_Comentanos").style.display = "none";
document.querySelector(".Submenu_ReportarProblemas").style.display = "none";
document.querySelector(".Submenu_Ayuda").style.display = "none";
document.querySelector(".Submenu_Tutoriales").style.display = "none";

/*--------------------- Ocultar todos los SubMenu HEADER al clickear -------------------------*/
document.addEventListener("click", function () {
  document.querySelector(".Submenu_Cuenta").style.display = "none";
  document.querySelector(".SubMenu_History").style.display = "none";
  document.querySelector(".Submenu_AcercaDe").style.display = "none";
  // document.querySelector(".Submenu_Comentarios").style.display = "none";
  document.querySelector(".Submenu_Comentanos").style.display = "none";
  document.querySelector(".Submenu_ReportarProblemas").style.display = "none";
  document.querySelector(".Submenu_Ayuda").style.display = "none";
  document.querySelector(".Submenu_Tutoriales").style.display = "none";
});

//---------------- Obtener los elementos de los enlaces de los menús HEADER --------------------
var miCuentaLink = document.getElementById("miCuentaLink");
var historialLink = document.getElementById("historialLink");
var AcercaDeLink = document.getElementById("AcercaDeLink");
var ComentariosLink = document.getElementById("ComentariosLink");
var AyudaLink = document.getElementById("AyudaLink");
var ReportarLink = document.getElementById("ReportarProblemasLink");
var TutorialesLink = document.getElementById("TutorialesLink");


/*----------------------------- SubMenu Cuenta -----------------------------*/

// Mostrar Submenu_Cuenta al hacer clic en "Mi Cuenta"
miCuentaLink.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".Submenu_Cuenta").style.display = "flex";
  document.querySelector(".Submenu_Cuenta").style["flex-direction"] = "row";
  event.stopPropagation();
});

/*---------------- Sub_SubMenu Historial ------------------*/
// Mostrar SubMenu_History al hacer clic en "Historial"
historialLink.addEventListener("click", function (event) {
  event.preventDefault();
  //Tal vez hay que cambiar a SOLAMENTE style.display = "blocks";
  document.querySelector(".SubMenu_History").style.display = "flex";
  document.querySelector(".SubMenu_History").style["flex-direction"] = "column";
  event.stopPropagation();
});

/*----------------------------- SubMenu Acerca De -----------------------------*/
AcercaDeLink.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".Submenu_AcercaDe").style.display = "flex";
  document.querySelector(".Submenu_AcercaDe").style["flex-direction"] = "row";
  event.stopPropagation();
});

/*---------------- Sub_SubMenu ReportarProblemas ------------------*/
ReportarLink.addEventListener("click", function (event) {
event.preventDefault();
document.querySelector(".Submenu_ReportarProblemas").style.display = "flex";
document.querySelector(".Submenu_ReportarProblemas").style["flex-direction"] = "column";
event.stopPropagation();
});

/*---------------- Sub_SubMenu Comentanos ------------------*/
ComentariosLink.addEventListener("click", function (event) {
event.preventDefault();
 document.querySelector(".Submenu_Comentanos").style.display = "flex";
document.querySelector(".Submenu_Comentanos").style["flex-direction"] = "column";
 event.stopPropagation();
});

/*---------------- Sub_SubMenu Comentarios ------------------*/
// ComentariosLink.addEventListener("click", function (event) {
//   event.preventDefault();
//   document.querySelector(".Submenu_Comentarios").style.display = "flex";
//   document.querySelector(".Submenu_Comentarios").style["flex-direction"] = "column";
//   event.stopPropagation();
// });

/*------------------------------- SubMenu Ayuda -----------------------------*/
AyudaLink.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".Submenu_Ayuda").style.display = "flex";
  document.querySelector(".Submenu_Ayuda").style["flex-direction"] = "row";
  event.stopPropagation();
});

TutorialesLink.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".Submenu_Tutoriales").style.display = "flex";
  document.querySelector(".Submenu_Tutoriales").style["flex-direction"] = "column";
  event.stopPropagation();
});


/*------------------ Funcionalidad de Cerrar Sesion -------------------------*/
document.getElementById("CerrarSesion").addEventListener("click", function () {
  var confirmacion = confirm("¿Estás seguro de que deseas cerrar sesión?");
  if (confirmacion) {
    window.location.href = "../Login.html";
  }
});

/*----------------- Funcionalidad de Mostrar y Ocultar Submenus Laterales ---------------*/

/*---------------------- Mostrar y ocultar los submenu -----------------------*/
var submenuDirecciones = document.querySelector(".Submenu__Direcciones");
var submenuBuscar = document.querySelector(".submenuBuscar");
var flechaDer = document.getElementById("flechaDer");
var flechaDerecha = document.getElementById("flechaDerecha");

// if (submenuDirecciones.style.display !== "none") {

// } else if (submenuBuscar.style.display !== "none") {

// }

/*------------------ Direcciones ---------------------*/
document.getElementById("btn-Buscar").addEventListener("click", function () {
  document.querySelector(".textoYRecientes").style.display = "flex";
  document.querySelector(".textoYRecientes").style["flex-direction"] = "column";
})


document.querySelector(".list__button--clickdirDirec").addEventListener("click", function () {

  if (submenuDirecciones.style.display === "none") {
    submenuDirecciones.style.display = "flex";
    submenuDirecciones.style.flexDirection = "column";
    flechaDerecha.classList.remove("fa-caret-right");
    flechaDerecha.classList.add("fa-caret-down");
    // flechaDerecha.style.transition = "all .5s ease";
    document.querySelector(".textoYRecientes").style.display = "none";
    document.getElementById("UbicacionI").value = "";
    document.getElementById("Destino").value = "";

    // Cerrar menú de búsqueda si está abierto
    if (submenuBuscar.style.display !== "none") {
      submenuBuscar.style.display = "none";
      flechaDer.classList.remove("fa-caret-down");
      flechaDer.classList.add("fa-caret-right");
    }
  } else {
    submenuDirecciones.style.display = "none";
    flechaDerecha.classList.remove("fa-caret-down");
    flechaDerecha.classList.add("fa-caret-right");
    // flechaDerecha.style.transition = "all .5s ease";
    document.querySelector(".textoYRecientes").style.display = "none";
  }
});

/*------------------- Buscar Ruta ---------------------*/

document.querySelector(".list__button--clickBusc").addEventListener("click", function () {
  if (submenuBuscar.style.display === "none") {
    submenuBuscar.style.display = "flex";
    submenuBuscar.style.flexDirection = "column";

    flechaDer.classList.remove("fa-caret-right");
    flechaDer.classList.add("fa-caret-down");
    // flechaDerecha.style.transition = "all .5s ease";
    document.getElementById("Resultados").style.display = "none";
    document.getElementById("txtBuscar").value="";

    if (submenuDirecciones.style.display !== "none") {
      submenuDirecciones.style.display = "none";
      flechaDerecha.classList.remove("fa-caret-down");
      flechaDerecha.classList.add("fa-caret-right");
    }

  } else {
    submenuBuscar.style.display = "none";
    flechaDer.classList.remove("fa-caret-down");
    flechaDer.classList.add("fa-caret-right");
    // flechaDerecha.style.transition = "all .5s ease";

  }
});

/*------------------------ Alarmas --------------------------*/
function mostrarFormulario() {
  document.getElementById("formularioEmergente").style.display = "block";
}

function ocultarFormulario() {
  document.getElementById("formularioEmergente").style.display = "none";
}

// Obtener el elemento de la cabecera del formulario
var cabeceraForm = document.querySelector('.CabeceraForm');

// Variables para almacenar la posición inicial del formulario y el desplazamiento del arrastre
var posInicialX = 0;
var posInicialY = 0;
var offsetX = 0;
var offsetY = 0;

// Función para iniciar el arrastre del formulario
function iniciarArrastre(event) {
  posInicialX = event.clientX;
  posInicialY = event.clientY;
  offsetX = posInicialX - formularioEmergente.offsetLeft;
  offsetY = posInicialY - formularioEmergente.offsetTop;
  document.addEventListener('mousemove', arrastrarFormulario);
  document.addEventListener('mouseup', detenerArrastre);
}

// Función para arrastrar el formulario mientras se mueve el cursor
function arrastrarFormulario(event) {
  var nuevaPosX = event.clientX - offsetX;
  var nuevaPosY = event.clientY - offsetY;
  formularioEmergente.style.left = nuevaPosX + 'px';
  formularioEmergente.style.top = nuevaPosY + 'px';
}

// Función para detener el arrastre del formulario
function detenerArrastre() {
  document.removeEventListener('mousemove', arrastrarFormulario);
  document.removeEventListener('mouseup', detenerArrastre);
}

// Agregar el evento mousedown al header del formulario para iniciar el arrastre
cabeceraForm.addEventListener('mousedown', iniciarArrastre);

