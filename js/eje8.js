let lista = [1,2,3,4,5,6,7,8,9,10];
let multiplo = prompt("Ingrese el nro a multiplicar");

const multiplicar = (list, num) => {
    for(elementos of list){
        console.log(elementos * num)
    }
}
multiplicar(lista, multiplo);