//SOLO EN ES6
//Esto es de "mentirijillas"

class User {
    constructor(nombre, apellido, edad, esVaron){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.esVaron=esVaron;
    }
    saludar() {
        console.log("hola");
        
    }
}
class Alumno extends User {
    constructor(nombre, apellido, edad, esVaron,curso){
        super(nombre,apellido,edad,esVaron);
        this.curso=curso;
    }
}
var objectUser = new User("Nacho", "pallares", 21, true);
var alumno = new Alumno("Pedro", "Perez", 12, true, 6);

objectUser.saludar();
alumno.saludar();
console.log(alumno);
console.log(typeof alumno);
alumno.notas=[10,20,30];

console.log(alumno);