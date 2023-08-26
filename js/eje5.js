let palabra = prompt("Ingresar una palabra");
let numero = prompt("Ingresar la cantidad de veces de repeticion");

const imprimir = (string, num) => {
    for (let i = 0; i < num; i++) {
        console.log(string)
    }
}

imprimir(palabra, numero);
