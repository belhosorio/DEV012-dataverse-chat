import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { barra } from "../components/barra.js";

export const apiKey = () => {

  //CONTENEDOR
  const contenedor = document.createElement("div");
  //HEADER
  contenedor.appendChild(header());
  contenedor.appendChild(barra());


 //APIKEY
 const cajaApi = document.createElement("div");
 cajaApi.setAttribute("id", "caja-api");

 //TEXTO
 cajaApi.textContent = 'Ingresa tu Api Key en el recuadro de abajo para continuar';

 //TITULO
 const hApi = document.createElement("h2");
 hApi.setAttribute("id", "h-api");
hApi.textContent = "Prueba tu Api Key";
cajaApi.appendChild(hApi); 

//CAJA DE TEXTO
const labelApi = document.createElement("label");
labelApi.setAttribute("id", "label-api")
const inputApi = document.createElement("input");
inputApi.setAttribute("type", "apiBox");
inputApi.setAttribute("placeholder", "Escribe aqui");
labelApi.appendChild(inputApi);
cajaApi.appendChild(labelApi);

//BOTONES
const btnIngresarApi = document.createElement("button");
btnIngresarApi.textContent = "Ingresar";
btnIngresarApi.setAttribute("id", "btn-ingresar");
cajaApi.appendChild(btnIngresarApi);

const btnBorrarApi = document.createElement("button");
btnBorrarApi.textContent = "Borrar";
btnBorrarApi.setAttribute("id", "btn-borrarApi");
cajaApi.appendChild(btnBorrarApi);

contenedor.appendChild(cajaApi);

   //FOOTER
 contenedor.appendChild(footer());

  return contenedor;
 }