/*------------------ Funcionalidad Mostrar y Ocultar SubMenus -------------------------*/

/*------------------ Ocultar submenús por defecto -------------------*/
document.querySelector(".Submenu_Cuenta").style.display = "none";
document.querySelector(".SubMenu_History").style.display = "none";
document.querySelector(".Submenu_AcercaDe").style.display = "none";
document.querySelector(".Submenu_Comentarios").style.display = "none";
document.querySelector(".Submenu_Ayuda").style.display = "none";
document.querySelector(".Submenu_Tutoriales").style.display = "none";

/*--------------------- Ocultar todos los SubMenu al clickear -------------------------*/
document.addEventListener("click", function () {
  document.querySelector(".Submenu_Cuenta").style.display = "none";
  document.querySelector(".SubMenu_History").style.display = "none";
  document.querySelector(".Submenu_AcercaDe").style.display = "none";
  document.querySelector(".Submenu_Comentarios").style.display = "none";
  document.querySelector(".Submenu_Ayuda").style.display = "none";
  document.querySelector(".Submenu_Tutoriales").style.display = "none";
});

//---------------- Obtener los elementos de los enlaces de los menús --------------------
var miCuentaLink = document.getElementById("miCuentaLink");
var historialLink = document.getElementById("historialLink");
var AcercaDeLink = document.getElementById("AcercaDeLink");
var ComentariosLink = document.getElementById("ComentariosLink");
var AyudaLink = document.getElementById("AyudaLink");
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

/*---------------- Sub_SubMenu Comentarios ------------------*/
ComentariosLink.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".Submenu_Comentarios").style.display = "flex";
  document.querySelector(".Submenu_Comentarios").style["flex-direction"] = "column";
  event.stopPropagation();
});

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
