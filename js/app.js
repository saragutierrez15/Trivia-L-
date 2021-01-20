/*const form = document.querySelector('form');
const gname = document.getElementById('gname');
const submit = document.getElementById('submit');
const para = document.querySelector('p');
*/


function saveName(event) {
  var username = document.getElementById('gname').value;
  var mesgElem = document.querySelector("#mensaje-error");
  
while(username==""||username==null){
  alert("Necesitas un nombre para jugar");
  username=prompt('Ingrese su nombre');
}

 /* 
  
  if ( username == "" ) {
    console.log ("nombre vacío");
    // para.textContent = 'Necesitas un nombre para jugar!';
    //  **** Hace falta arreglarlo para que despliegue el mensaje de error *******
    mesgElem.innerHTML =  'Necesitas un nombre para jugar!';
  }
  */
  
  
  // alert(username);
  localStorage.setItem('nombreUsuario', username);
  document.location.href = 'pantalla_bienvenida.html';
  event.preventDefault();
  // nameElem.innerHTML ==  "Hola " + username + "!";
}

function bringName(){
  var nameElem = document.querySelector("#mensaje-bienvenida");
  var nombreUsuario = localStorage.getItem('nombreUsuario');
  console.log(nameElem);
  nameElem.innerHTML +=  "Hola " + nombreUsuario + "!";

}

function redirigirCategoria(categoria){

  var homeElem = document.querySelector(".home");
  homeElem.style.display = 'none';

  var elem = document.querySelector('#'+categoria);
  elem.style.display = 'block';

  if(categoria == 'categoria1'){
    //console.log ("Entró a categoría entretenimiento");
    var elem = document.getElementById('categoria2');
    var elem2 = document.getElementById('pregunta2');
    var elem3 = document.getElementById('pregunta3');
    elem.style.display = 'none';
    elem2.style.display = 'none'
    elem3.style.display = 'none';

  } else if( categoria == 'categoria2'){
    // console.log ("Entró a categoría geografía");
    var elem = document.getElementById('categoria1');
    var elem2 = document.getElementById('pregunta5');
    var elem3 = document.getElementById('pregunta6');
    elem.style.display = 'none';
    elem2.style.display = 'none'
    elem3.style.display = 'none';
  }
}


function siguientePregunta1(pregunta){

  var elem = document.querySelector('#'+pregunta);
  elem.style.display = 'block';
  var elem1 = document.getElementById('pregunta1');
  var elem2 = document.getElementById('pregunta2');
  var elem3 = document.getElementById('pregunta3');
  
  if(pregunta == 'pregunta2'){
    elem1.style.display = 'none';
    elem3.style.display = 'none';

  } else if( pregunta == 'pregunta3'){
    elem1.style.display = 'none';
    elem2.style.display = 'none';
  } 
}

function siguientePregunta2(pregunta){

  var elem = document.querySelector('#'+pregunta);
  elem.style.display = 'block';
  var elem1 = document.getElementById('pregunta4');
  var elem2 = document.getElementById('pregunta5');
  var elem3 = document.getElementById('pregunta6');
  
  if(pregunta == 'pregunta5'){
    elem1.style.display = 'none';
    elem3.style.display = 'none';

  } else if( pregunta == 'pregunta6'){
    elem1.style.display = 'none';
    elem2.style.display = 'none';
  } 
}
/*

form.onsubmit = function(e) {
  if (gname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in the name field!';
  }
}*/