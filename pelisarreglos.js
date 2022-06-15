function capturar() {
    console.log("Guardado!");
    function Pelis(nombre, genero, year) {
        this.nombre = nombre;
        this.genero = genero;
        this.year = year;
    }
    var capturarnombre = document.getElementById("nombre").value;
    console.log(capturarnombre);
    var capturargenero = document.getElementById("genero").value;
    console.log(capturargenero);
    var capturaryear = document.getElementById("year").value;
    console.log(capturaryear);

    //var sujeto= new Persona("Kurt", 27); //captura estatica
    // varialble local var sujeto= new Persona(capturarnombre, capturaredad);
    sujeto = new Pelis(capturarnombre, capturargenero, capturaryear);//variable global
    //console.log(sujeto);
    agregar();
}
var basedatos = [];
function agregar() {
    basedatos.push(sujeto)
    console.log(basedatos);
    document.getElementById("tabla").innerHTML += '<tbody><td>' + sujeto.nombre + '</td><td>' + sujeto.genero + '</td><td>' + sujeto.year + '</td></tbody>';
};