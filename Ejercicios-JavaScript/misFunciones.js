/**
 * Conversion de unidades, de metros, pies, pulgadas y yardas
 * @method CambiarUnidades
 * @param (string) id - id de los inputs de yardas, metros, pies o pulgadas
 * @param (number) valor- valor de los inputs de yardas, metros, pies o pulgadas
 * @return 
 */
funtion cambiarUnidades(id,valor){
  if(isNan(valor)){
    alert("Se ingreso un numero invalido");
    document.LasUnidades.unid_metro.value= "";
    document.LasUnidades.unid_pulgada.value="";
    document.LasUnidades.unid_pie.value="";
    document.LasUnidades.unid_yarda.value="";
  }else if(id== "metro"){
    document.LasUnidades.unid_pulgada.value= 39.3701 * valor;
    document.LasUnidades.unid_pie.value= 3.28084 * valor;
    document.LasUnidades.unid_yarda.value= 1.09361 * valor;
  }else if(id== "pulgada"){
    document.LasUnidades.unid_metro.value= 0.0254 * valor;
    document.LasUnidades.unid_pie.value= 0.8333 * valor;
    document.LasUnidades.unid_yarda.value= 0.0277 * valor;
  }else if(id== "yarda"){
    document.LasUnidades.unid_metro.value= 0.9144 * valor;
    document.LasUnidades.unid_pulgada.value= 36 * valor;
    document.LasUnidades.unid_pie.value= 3 * valor;
  }else if(id== "pie"){
    document.LasUnidades.unid_metro.value= 0,3048 * valor;
    document.LasUnidades.unid_pulgada.value= 12 * valor;
    document.LasUnidades.unid_yarda.value= 0.3333 * valor;
  }
}

function convertirGR(id){
  var grad, rad;
  if(id== "grados"){
    grad= document.getElementById("grados").value;
    rad= (grad * Math.PI) /180;
  }else if(id== "radianes"){
    rad= document.getElementById("radianes").value;
    grad= (rad * 180) /Math.PI;  
  }
  document.getElementById.("grados").value= grad;
  document.getElementById.("radianes").value= rad;
  
  
}

function mostrar_ocultar(valorMO){

  if(valorMO== "val_mostrar"){
    document.getElementById("divMO").style.display= 'block';
    
  }else if(valorMO== "val_ocultar"){
    document.getElementById("divMO").style.display= 'none';
  }
}

function cargarWeb() {
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function cargarResultado() {
    var urlComp, can, un;

    urlComp = window.location.href.split("/")[5];

    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById("dist").value = can + " " + un;
}

