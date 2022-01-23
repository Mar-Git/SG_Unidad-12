

window.onload = inicializaEventos;

function inicializaEventos(){
    var modelosJs;
    var modelosSeat=new Array("Ibiza", "Cordoba", "Leon");
    var modelosMercedes=new Array("Clase A", "Clase C", "Clase G");
    var modelosToyota=new Array("Auris", "Corolla", "Yaris");
    
    document.getElementById("marcas").addEventListener("change", cargarModelos, false);
    
}

function cargarModelos(){
    //modelosJs=document.getElementById('modelos');
    //limpiar el select antes de asignarle un nuevo array
    document.getElementById("modelos").innerHTML='<option value="">-</option>';
    var miMarca=document.getElementById("marcas");
    
    switch(miMarca){
        case 'Seat': 
            
            document.getElementById("modelos").value=modelosSeat;
        break;
        case 'Mercedes': 
            document.getElementById("modelos").value=modelosMercedes;
        break;
        case 'Toyota': 
            document.getElementById("modelos").value=modelosToyota;
        break;
    }
}
function limpiar(){

}