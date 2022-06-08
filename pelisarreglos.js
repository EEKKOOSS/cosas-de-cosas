function Pelis(nombre, genero, year) {
    this.nombre = nombre;
    this.genero = genero;
    this.year = year;
}
var Pelis1 = new Pelis("akira", "accion", 1998);
var Pelis2 = new Pelis("interceptor", "aventura", 2022);
var Pelis3 = new Pelis("morbius", "accion", 2022);
var Videoclub = [Pelis1, Pelis2, Pelis3];
console.log(Pelis1);
console.log(Pelis2);
console.log(Pelis3);
console.log(Videoclub);
console.log(Videoclub[1]);


