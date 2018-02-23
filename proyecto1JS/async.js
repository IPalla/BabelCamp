//ASINCRONIA

//Interacciones eventos del usuario

//Llamadas al servidor

//Temporizacion

//EN ES6 tengo promesas
const consulta = function(){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=> {resolve("Todo OK")}, 2000);
    })    
}

let resultados = consulta().then( (resultado)=>{
    console.log(resultado);
} ).catch();

