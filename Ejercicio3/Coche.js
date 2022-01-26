

window.onload = inicializaEventos;

function inicializaEventos(){
    /*
    var marcasJS=["Seat","Mercedes","Toyota"];
    var option;
    
    //añadir opciones
    for(var i=0;i<marcasJS.length;i++){
        option = document.createElement("option");
        option.text = marcasJS[i];
        selectMarcas.add(option);
      }
      */
      var selectMarcas=document.getElementById("marcas");
      cargarModelos();
    //document.getElementById("marcas").addEventListener("change", cargarModelos, false);
    selectMarcas.addEventListener("change", cargarModelos, false);
}

function cargarModelos(){
    var modelosJS;
    var modelosSeat=["Ibiza", "Cordoba", "Leon"];
    var modelosMercedes=["Clase A", "Clase C", "Clase G"];
    var modelosToyota=["Auris", "Corolla", "Yaris"];
    
    document.getElementById("modelos").innerHTML=null;
    
    //ESTO NO LO ENTIENDO!!!
    switch(document.getElementById("marcas").options[document.getElementById("marcas").selectedIndex].text){
        case "Seat":
            modelosJS=modelosSeat;
        break;
        case "Mercedes":
            modelosJS = modelosMercedes;
        break;
        case "Toyota":
            modelosJS=modelosToyota;
        break;
    }
    //llenar las opciones
    var option;
    for(var i=0;i<modelosJS.length;i++){
        option=document.createElement("option");
        option.text=modelosJS[i];
        document.getElementById("modelos").add(option);
    }
}
