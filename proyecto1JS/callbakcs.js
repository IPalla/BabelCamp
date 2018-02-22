//Parecido a JSON

function enMinusculas(pData = "Desconocido"){
    console.log(pData.toLoweCase());
}
function enMayusculas(pData = "Desconocido"){

    console.log(pData.toUpperCase());
}
function main(mostrar){
    const user = {
        nombre: 'carlos',
        apellido: 'fernandez',
        edad: 21,
        esVaron: true
    }

    //Salida usando un template string
    mostrar(
    `Usuario es:
         Nombre: ${user.nombre}
         Apellido: ${user.apellido}`);
    mostrar();
}

main(enMayusculas);
