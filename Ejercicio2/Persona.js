
class Persona {

    nombre=new String();
    apellidos=new String();

    constructor(nombre, apellidos) {
    
    this.nombre = nombre;
    
    this.apellidos = apellidos;
    }
}
    window.onload = inicializaEventos;
    var oPersona;
    function inicializaEventos() {
        oPersona=new Persona();
        
        oPersona.nombre=document.getElementById("fname").value;
        document.getElementById("btnSaludar").addEventListener("click", saludar, false);
    }
    
    function saludar() {

        alert(oPersona.nombre+"Hello World");
    
    }