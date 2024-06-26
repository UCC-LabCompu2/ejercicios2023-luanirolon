/**
 * Conversión de unidades, de metros, pies, pulgadas y yardas
 * @method CambiarUnidades
 * @param {string} id - id de los inputs de yardas, metros, pies o pulgadas
 * @param {number} valor - valor de los inputs de yardas, metros, pies o pulgadas
 * @return 
 */
function cambiarUnidades(id, valor) {
    if (isNaN(valor)) {
        alert("Se ingresó un número inválido");
        document.LasUnidades.unid_metro.value = "";
        document.LasUnidades.unid_pulgada.value = "";
        document.LasUnidades.unid_pie.value = "";
        document.LasUnidades.unid_yarda.value = "";
    } else if (id == "metro") {
        document.LasUnidades.unid_pulgada.value = 39.3701 * valor;
        document.LasUnidades.unid_pie.value = 3.28084 * valor;
        document.LasUnidades.unid_yarda.value = 1.09361 * valor;
    } else if (id == "pulgada") {
        document.LasUnidades.unid_metro.value = 0.0254 * valor;
        document.LasUnidades.unid_pie.value = 0.8333 * valor;
        document.LasUnidades.unid_yarda.value = 0.0277 * valor;
    } else if (id == "yarda") {
        document.LasUnidades.unid_metro.value = 0.9144 * valor;
        document.LasUnidades.unid_pulgada.value = 36 * valor;
        document.LasUnidades.unid_pie.value = 3 * valor;
    } else if (id == "pie") {
        document.LasUnidades.unid_metro.value = 0.3048 * valor;
        document.LasUnidades.unid_pulgada.value = 12 * valor;
        document.LasUnidades.unid_yarda.value = 0.3333 * valor;
    }
}

function convertirGR(id) {
    var grad, rad;
    if (id == "grados") {
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;
    } else if (id == "radianes") {
        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO) {
    if (valorMO == "val_mostrar") {
        document.getElementById("divMO").style.display = 'block';
    } else if (valorMO == "val_ocultar") {
        document.getElementById("divMO").style.display = 'none';
    }
}

function cargarWeb() {
    var cant, unidad, urlComp;
    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function calcularSuma() {
    var num1, num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
}

function cargarResultado() {
    var urlComp, can, un;
    urlComp = window.location.href.split("/")[5];
    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];
    document.getElementById("dist").value = can + " " + un;
}

function guardarLocalStorage() {
    let distancia, unidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;
    localStorage.setItem('distanciaLS', distancia);
    localStorage.setItem('unidadesLS', unidad);
    window.open('2_web.html');
}

function cargarLocalStorage() {
    let cant, un;
    cant = localStorage.getItem('distanciaLS');
    un = localStorage.getItem('unidadesLS');
    document.getElementById('dist').value = cant + " " + un;
}

function dibujarCirCuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;

    ctx.fillStyle = "#333899";
    ctx.fillRect(0 + margen, yMax - 40 - margen, 40, 40);

    ctx.arc(xMax / 2, yMax / 2, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

var bandera;

function dibujar(event) {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function() { bandera = true; };
    canvas.onmouseup = function() { bandera = false; };

    if (bandera) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill();
    }
}

function limpiarCanvas() {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}

function dibujarImagen(posX, posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX, posY);
    var img = new Image();
    img.src = "imagenes/auto.png";

    canvas.width = canvas.width;

    img.onload = function() {
        ctx.drawImage(img, posX, posY);
    };
}

function dibujarCuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var anchoMax = canvas.width;
    var alturaMax = canvas.height;

    // líneas horizontales
    ctx.beginPath();

    for (var i = 0; i < alturaMax;) {
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "43e67d9";
        ctx.stroke();
        i += 20;
        ctx.closePath();
    }
  // lineas verticales
  ctx.beginPath();

  for (var i = 0; i < anchoMax;) {
      ctx.moveTo(0, i);
      ctx.lineTo(i, alturaMax);
      ctx.strokeStyle = "43e67d9";
      ctx.stroke();
      i += 20;
      ctx.closePath();
  }

  //Eje X
  ctx.beginPath();
  ctx.moveTo(0, alturaMax/2);
  ctx.lineTo(anchoMax, alturaMax/2);
  ctx.strokeStyle = "43e67d9";
  ctx.stroke();
  ctx.closePath();

   //Eje Y
  ctx.beginPath();
  ctx.moveTo(anchoMax, 0);
  ctx.lineTo(anchoMax/2, alturaMax);
  ctx.strokeStyle = "43e67d9";
  ctx.stroke();
  ctx.closePath();
}


x=0;
dx= 2;
function animarAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX, posY);
    var img = new Image();
    img.src = "imagenes/auto.png";

    canvas.width = canvas.width;

    img.onload = function() {
        ctx.drawImage(img, x, 100);
    }
    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}
    
}
