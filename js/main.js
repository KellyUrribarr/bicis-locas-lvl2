
  function validateForm(){
  var name = document.forms[0]["name"].value;
  var lastname = document.forms[0]["lastname"].value;
  var email = document.forms[0]["input-email"].value;
  var password = document.forms[0]["input-password"].value;
  var seleccion = document.querySelector('select').selectedIndex;
  var twitter = document.forms[0]["input-social"].value;

////NOMBRE
  if (name == null || name.length == 0 || /^\s+$/.test(name)) {
    alert("la primera letra de nombre y apellido tiene que ser mayuscula");
    return false;
   }
//COMPROBAR QUE SOLO SEAN LETRAS
  else if (/^[a-zA-Z]+$/.test(name) == false){
    alert("nombre no valido ingresar solo letras");
    return true;
  }
//COMPROBAR QUE EMPIECE CON MAYUSCULAS
  else if (name.charAt(0).toUpperCase() !== name.charAt(0)){
    alert("la primera letra de nombre y apellido tiene que ser mayuscula");
    return false;
  }
//APELLIDO
   if (lastname == null || lastname.length == 0 || /^\s+$/.test(lastname)) {
    alert("nombre es un campo obligatorio");
    return false;
   }
//COMPROBAR QUE SOLO SEAN LETRAS
  else if (/^[a-zA-Z]+$/.test(lastname) == false){
    alert("apellido no valido ingresar solo letras");
    return true;
  }
//COMPROBAR QUE EMPIECE CON MAYUSCULAS
  else if (lastname.charAt(0).toUpperCase() !== lastname.charAt(0)){
    alert("la primera letra de nombre y apellido tiene que ser mayuscula");
    return false;
  }
//CORREO ELECTRONICO
  if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email) == false){
    alert("La dirección de email es incorrecta.");
    }
//CONTRASEÑA
  if (password == null || password.length == 0) {
    alert("contraseña campo obligatorio");
    return false;
   }
   else if (password == "password" || password == 123456 || password == 098754){
    alert("campo incorrecto, los caracteres no puedes ser igual a 123456, 098754, password");
    return false;
   }
   else if (password.length < 6){
     alert("tu contraseña debe ser mayor a 6 caracteres");
   }
//SELECCION 
  if( seleccion == null || seleccion == 0 ) {
    alert("por favor ingrese un tipo de bici");
    return false;
    }
//TWITTER
  if(/^[a-zA-Z0-9- ]*$/.test(twitter) == false) {
    alert('contiene caracteres no válidos. ejemplo @');
    }
  else if (twitter == null || twitter.length == 0 || /^\s+$/.test(twitter)) {
    alert("twitter es un campo obligatorio");
    return false;
    }
}
//ERROR NOMBRE AL LADO
function agregar(func) {
  var evento_ventana = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      evento_ventana();
      func();
    }
  }
}
//SUGERENCIAS VENTANA
function sugerencias() {
  var inputs = document.getElementsByTagName("input");
  for (var i=0; i<inputs.length; i++){
    inputs[i].onfocus = function () {
      this.parentNode.getElementsByTagName("span")[0].style.display = "inline";
    }
    inputs[i].onblur = function () {
      this.parentNode.getElementsByTagName("span")[0].style.display = "none";
    }
  }
}
agregar(sugerencias);