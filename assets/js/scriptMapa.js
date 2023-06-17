/*------------------------------------- Mapa ----------------------------------------------*/
/*--------------- Creacion de mapa ---------------*/
var mapa=L.map("Mapa").setView([12.154372,-86.273],15)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(mapa);
// Segun el video esto queda hasta ... .png?,{}) --> asi

/*-------------------- Creando marcadores -------------------*/
var marcador=L.marker()

