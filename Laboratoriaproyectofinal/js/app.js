

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

function bringScore(){
  var scoreElem = document.querySelector("#mensaje-puntaje");
  scoreElem.innerHTML =  "Tu puntaje es " + score ;
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
    var elemPuntaje1 = document.getElementById('puntaje1');
    elem.style.display = 'none';
    elem2.style.display = 'none'
    elem3.style.display = 'none';
    elemPuntaje1.style.display = 'none';

  } else if( categoria == 'categoria2'){
    // console.log ("Entró a categoría geografía");
    var elem = document.getElementById('categoria1');
    var elem2 = document.getElementById('pregunta5');
    var elem3 = document.getElementById('pregunta6');
    var elemPuntaje2 = document.getElementById('puntaje2');
    elem.style.display = 'none';
    elem2.style.display = 'none'
    elem3.style.display = 'none';
    elemPuntaje2.style.display = 'none';
  }
}

var score1 = 0;

function siguientePregunta1(pregunta, correcta){

  var elem = document.querySelector('#'+pregunta);
  elem.style.display = 'block';
  var elem1 = document.getElementById('pregunta1');
  var elem2 = document.getElementById('pregunta2');
  var elem3 = document.getElementById('pregunta3');
  var elemPuntaje1 = document.getElementById('puntaje1');

  if(pregunta == 'pregunta2'){
    elem1.style.display = 'none';
    elem3.style.display = 'none';
    elemPuntaje1.style.display = 'none';

  } else if( pregunta == 'pregunta3'){
    elem1.style.display = 'none';
    elem2.style.display = 'none';
    elemPuntaje1.style.display = 'none';
  }

  if(correcta){
    score1 ++;
    // Esto permite guardar globalmente una variable
    localStorage.setItem('score1', score1);
    console.log('respuestas Correctas:'+score1);
  }

}

var score2 = 0;

function siguientePregunta2(pregunta, correcta){

  var elem = document.querySelector('#'+pregunta);
  elem.style.display = 'block';
  var elem1 = document.getElementById('pregunta4');
  var elem2 = document.getElementById('pregunta5');
  var elem3 = document.getElementById('pregunta6');
  var elemPuntaje2 = document.getElementById('puntaje2');

  
  if(pregunta == 'pregunta5'){
    elem1.style.display = 'none';
    elem3.style.display = 'none';
    elemPuntaje2.style.display = 'none';

  } else if( pregunta == 'pregunta6'){
    elem1.style.display = 'none';
    elem2.style.display = 'none';
    elemPuntaje2.style.display = 'none';
  } 

  if(correcta){
    score2 ++;
    localStorage.setItem('score2', score2);
    console.log('respuestas Correctas:'.score2);
  }
}

function mostrarPuntaje(categoria, correcta){

  var nombreUsuario = localStorage.getItem('nombreUsuario');
  var elem3 = document.getElementById('pregunta3');
  var elem6 = document.getElementById('pregunta6');
  
  if(categoria == 'categoria1'){
    // var elem = document.getElementById('mensaje-puntaje');
    var elem = document.getElementById('puntaje1');
    var elemPuntaje = document.querySelector("#mensaje-puntaje");
    if(correcta){
      score1 ++;
    }
    elemPuntaje.innerHTML =  nombreUsuario + " tu puntaje es " + score1;
    elem.style.display = 'block';
    elem3.style.display = 'none';
  }

  if(categoria == 'categoria2'){
    var elem = document.getElementById('puntaje1');
    var elemPuntaje = document.querySelector("#mensaje-puntaje");
    if(correcta){
      score2 ++;
    }
    elemPuntaje.innerHTML =  nombreUsuario + " tu puntaje es " + score2;
    elem.style.display = 'block';
    elem6.style.display = 'none';
  }
  
  
  

  
  // elem.style.display = 'block';
}
/*

form.onsubmit = function(e) {
  if (gname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in the name field!';
  }
}*/