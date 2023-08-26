let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mostrar = (list) =>{
    for(let i=0; i < list.length; i++){
        if(i === 5){
            continue
        }
        console.log(list[i]);
    }
}
mostrar(lista);