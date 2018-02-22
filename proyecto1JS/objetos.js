//Parecido a JSON
const user = {
    nombre: 'carlos',
    apellido: 'fernandez',
    edad: 21,
    esVaron: true
}

const mostrar=function(pData){
    
    pData.genero="Nacho";
    console.log(pData);
}

mostrar(Object.assign({},user));

console.log(JSON.stringify(user));