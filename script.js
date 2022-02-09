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

