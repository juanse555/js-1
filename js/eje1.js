let numeroUsuario = prompt("Ingresar un numero para mostrar en consola");

const saberNumero = (num) => {
    if (num % 2=== 0){
        console.log(`El numero ${num} es par`);
    } else if (num % 2=== 1) {
        console.log(`El numero ${num} es inpar`);
    }else{
        console.log(`Lo ingresado no es un numero`);
    }
    
}

saberNumero(numeroUsuario);