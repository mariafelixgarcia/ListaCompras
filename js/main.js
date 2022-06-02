 let contador=0;
let costoTotal=0;
let totalEnProductos=0;
 let element = document.getElementById("totalPrecio");
 element.innerHTML="Total en precio"; 

 let txtNombre=document.getElementById("Name");
 //txtNom es campo y value es el  atributo
 //txtNombre.value="Leche Semidescremada";
 //console.log(txtNombre.value);
 let txtNumber=document.getElementById("Number");
 
 let total=document.getElementById("precioTotal");
 /*let campos= document.getElementsByClassName("campo");
 campos[0].value="Leche descremada deslactosada light"
 console.log(campos[0].value);
 console.log(campos);
//aplica para todos los elementos que tengan clase campo :)
 for (let i= 0; i < campos.length; i++) {
     campos[i].style.border="red thin solid" ;
 }//for

 let spans=document.getElementsByTagName("span"); 
 for (let i= 0; i < spans.length; i++) {
    console.log(spans[i].textContent) ;
}//for */

//tablaListaCompras
let tabla=document.getElementById("tablaListaCompras");
let cuerpoTabla=tabla.getElementsByTagName("tbody");

/*cuerpoTabla[0].innerHTML= `<tr>
              <th scope="row">1</th>
              <td>Leche descremada</td>
              <td>1</td>
              <td>$23</td>
            </tr> `;
*/

function validarNombre(){
  if(txtNombre.value.length <3){
    return false;
  } //if
  return true;
}//validarNombre

function validarCantidad(){
  if(txtNumber.value.length==0) {
      return false;
  }// if
   if (isNaN(txtNumber.value)){
      return false;
   }//if

   if (parseFloat(txtNumber.value)<=0) {
      return false;
   }//if
   return true;
}// validarCantidad

let agregar=document.getElementById("btnAgregar");
//console.log(agregar);            
agregar.addEventListener("click",(event)=>{
event.preventDefault();
if ((! validarNombre())|| (! validarCantidad())){
 let lista=""; 
  if (! validarNombre()){
    txtNombre.style.border="red thin solid";
    lista+="<li> se debe escribir un nombre válido</li>"
  }
  if (! validarCantidad()){
    txtNumber.style.border="red thin solid";
    lista+="<li> se debe escribir una cantidad válida</li>"
  }//
  
  document.getElementById("alertValidacionesTexto").innerHTML=`Los campos deben ser llenados correctamente. <ul>${lista} </ul>` ;
  document.getElementById("alertValidaciones").style.display="block";

  setTimeout(function() {
  document.getElementById("alertValidaciones").style.display="none";
 }, 
 5000
 );
  return false;
}//if
txtNumber.style.border="";
txtNombre.style.border="";
document.getElementById("alertValidaciones").style.display="none";
  contador++;
  document.getElementById("contadorProductos").innerHTML=contador;
  //el *100 es para que corra los dos ultimos digitos del numero aleatiro
    let precio= (Math.floor( (Math.random() * 50)*100))/100;
   let cantidad=parseFloat(txtNumber.value);
 totalEnProductos += Math.ceil(cantidad<1)?Math.ceil(cantidad):parseInt(cantidad);
 document.getElementById("productosTotal").innerHTML=totalEnProductos;
   costoTotal+=(precio*cantidad);
   total.innerHTML=`$ ${costoTotal.toFixed(2)}`;
   
    let tmp= `<tr>
    <th scope="row">${contador}</th>
    <td>${txtNombre.value}</td>
    <td>${txtNumber.value}</td>
    <td>$ ${precio}</td>
  </tr>`;
  console.log(tmp);
  //este simbolito + hace que se agregue a la lista
  //[0] es porque es el pimer elemnto tbody que se esta mandando llamr?
  cuerpoTabla[0].innerHTML+=tmp;
  txtNumber.value="";
  txtNombre.value="";
  //el focus limpia el campo y deja el botón paprpadeando :) 
  txtNombre.focus();

}
);

txtNombre.addEventListener("blur", (event)=>{
  event.target.value=event.target.value.trim ();
    }
);

txtNumber.addEventListener("blur", (event)=>{
  event.target.value=event.target.value.trim ();
    }
);