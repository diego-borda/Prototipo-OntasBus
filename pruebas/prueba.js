/*------------------ Funcionalidad Mostrar y Ocultar SubMenus -------------------------*/

/*------------------ Ocultar submenús por defecto -------------------*/
document.querySelector(".Submenu_Cuenta").style.display = "none";
document.querySelector(".SubMenu_History").style.display = "none";

/*--------------------- Ocultar todos los SubMenu al clickear -------------------------*/
document.addEventListener("click", function() {
  document.querySelector(".Submenu_Cuenta").style.display = "none";
  document.querySelector(".SubMenu_History").style.display = "none";
});

/*----------------------------- SubMenu Cuenta -----------------------------*/


// Obtener los elementos de los enlaces de los menús
var miCuentaLink = document.getElementById("miCuentaLink");
var historialLink = document.getElementById("historialLink");

// Mostrar Submenu_Cuenta al hacer clic en "Mi Cuenta"
miCuentaLink.addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector(".Submenu_Cuenta").style.display = "block";
  event.stopPropagation();
});

/*--------------------- Sub_SubMenu Historial -------------------------*/
// Mostrar SubMenu_History al hacer clic en "Historial"
historialLink.addEventListener("click", function(event) {
  event.preventDefault();
  //Tal vez hay que cambiar a SOLAMENTE style.display = "blocks";
  document.querySelector(".SubMenu_History").style.display = "flex";
  document.querySelector(".SubMenu_History").style["flex-direction"] = "row";
  event.stopPropagation();
});




/*------------------ Funcionalidad de Cerrar Sesion -------------------------*/
document.getElementById("CerrarSesion").addEventListener("click", function() {
  var confirmacion = confirm("¿Estás seguro de que deseas cerrar sesión?");
  if (confirmacion) {
    window.location.href = ".. Login.html";
  }
});
