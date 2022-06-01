 let element = document.getElementById("totalPrecio");
 element.innerHTML="Total en precio"; 

 let txtNombre=document.getElementById("Name");
 //txtNom es campo y value es el  atributo
 //txtNombre.value="Leche Semidescremada";
 //console.log(txtNombre.value);
 let txtNumber=document.getElementById("Number");
 
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

let agregar=document.getElementById("btnAgregar");
//console.log(agregar);            
agregar.addEventListener("click",(event)=>{
    let precio= Math.random() *50;
   let tmp= `<tr>
    <th scope="row">1</th>
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