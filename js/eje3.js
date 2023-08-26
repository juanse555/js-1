let num = prompt("Ingrese el valor");

const multiplo = (num) => {
    if (num % 5 === 0 ){
        console.log(`El numero ingresado es multiplo de 5`);
    } else {
        console.log(`El numero ingresado no es multiplo de 5`);
    }
}

multiplo(num);