let num1 = prompt("Ingresar el primer valor");
let num2 = prompt("Ingresar el segundo valor");

const comparacion = (a, b) =>{
    if(a > b) {
        console.log(`El numero ${a} es mayor que el numero ${b}`)
    }else if (a < b) {
        console.log(`El numero ${b} es mayor que el numero ${a}`)
    } else if (a === b) {
        console.log(`Ambos numeros son iguales`)
    } else {
        console.log(`Los valores ingresados no son numericos`)
    }
}
comparacion(num1,num2);