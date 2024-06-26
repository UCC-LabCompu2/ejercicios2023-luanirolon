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
    document.LasUnidades.unid_pulgada.value= * valor;
    document.LasUnidades.unid_yarda.value= * valor;
  }
}
