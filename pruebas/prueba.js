// Ocultar submenús por defecto
document.querySelector(".Submenu_Cuenta").style.display = "none";
document.querySelector(".SubMenu_History").style.display = "none";

// Obtener los elementos de los enlaces de los menús
var miCuentaLink = document.getElementById("miCuentaLink");
var historialLink = document.getElementById("historialLink");

// Mostrar Submenu_Cuenta al hacer clic en "Mi Cuenta"
miCuentaLink.addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector(".Submenu_Cuenta").style.display = "block";
  event.stopPropagation();
});

// Mostrar SubMenu_History al hacer clic en "Historial"
historialLink.addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector(".SubMenu_History").style.display = "block";
  event.stopPropagation();
});

// Ocultar submenús al hacer clic en cualquier lugar de la pantalla
document.addEventListener("click", function() {
  document.querySelector(".Submenu_Cuenta").style.display = "none";
  document.querySelector(".SubMenu_History").style.display = "none";
});
