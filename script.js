

let montoInvertido = 25;
let precioActual = 10.9;
let porcentajeAumento = 40;
let cripto = 'dock';

//Hacer estimaciones sobre valor en 20, 30, 40, 50, 60,100, 150, 200

function especularValor(porcentaje, precioactual,monto, nombre){
    // var porc1 = Number(porcentaje / 100);
    let precioAumentado = Number(precioactual) + Number(precioactual *(porcentaje/100));
    let gananciaEstimativa = Number(monto) + Number((((porcentaje/100)*monto)));
    let criptos = nombre.toUpperCase();

    let respuesta = `Si inviertes $${monto} en ${criptos} estando esta al precio de $${precioactual}, en el caso de que suba un ${porcentaje}% el valor de la criptomoneda, tu capital inicial se elevara a $${gananciaEstimativa} pasando ${criptos} a valer $${precioAumentado}`;

    return respuesta;
}

especularValor(porcentajeAumento,precioActual,montoInvertido,cripto);


function hacerEstimaciones(){

    const token = document.getElementById("InpToken");
    const tokenValue = token.value;

    const monto = document.getElementById("InpMonto");
    const montoValue = monto.value;

    const precio = document.getElementById("InpPrecio");
    const precioValue = precio.value;

    const porcentaje = document.getElementById("InpPorcentaje");
    const porcentajeValue = porcentaje.value;

    let solucion = especularValor(porcentajeValue, precioValue, montoValue, tokenValue)

    let resp = document.getElementById("respuesta")

    return resp.innerText = solucion;
}