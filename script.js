//DESAFIO INTERACTIVO
/*
let texto = prompt ("Ingrese su carrera para continuar! (Profesorado / Ciclo)")

if(texto === "Profesorado"){
    prompt("Ingrese su DNI")
    alert("Bienvenido")
    
    let totalCuotas = 31
    let numero1 = prompt("Para consultar la cantidad de cuotas que resta abonar, ingrese cantidad de cuotas pagas");
 
    const cuotasPagas = (totalCuotas,numero1) =>  totalCuotas - numero1;

    alert(`Resta abonar cuotas ${cuotasPagas(totalCuotas,numero1)}`)

    let acumulador = 0;
    let cantidadNotas = 0;

    do { 
    let nota = parseInt(prompt("Para conocer su promedio, ingrese las notas"))
    acumulador += nota
    var confirmacion = prompt("¿Desea ingresar otra nota, enter, de lo contrario no?")   
    cantidadNotas++
    } while(confirmacion != "no")

    console.log(`El promedio de las notas es ${acumulador / cantidadNotas}`)

} else {
    alert ("Complete el formulario para registrarse")
    prompt ("Ingrese su nombre")
    alert ("Va a  inscribirse al Profesorado")

    console.log ("Usted se Inscribió correctamente")
}
*/

//DESAFIO COMPLEMENTARIO - INCORPORAR ARRAYS

class Miel {
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = parseFloat(precio);
    }
}
const miel = [];
miel.push(new Miel("Miel Común", "150 gr", 300));
miel.push(new Miel("Miel con Menta", "250 gr", 500));
miel.push(new Miel("Miel Líquida", "100 gr", 200));
localStorage.setItem('miel', JSON.stringify(miel));

let almacenadas = localStorage.getItem('miel');
if (almacenadas != null) {
    let array = JSON.parse(almacenadas);
    let salida = 'Elegir Miel \n';
    for (let index = 0; index < array.length; index++) {
        salida += index + ' -> ' + array[index].nombre + ' ' + array[index].cantidad + ' $ ' + array[index].precio + '\n';
    }
    alert(salida);
    let eleccion = parseInt(prompt('Ingrese Miel'));
    if ((eleccion >= 0) && (eleccion < array.length)) {
        alert("Miel elegida: " + array[eleccion].nombre)
    }
}

alert("Su pedido ha sido reservado");
