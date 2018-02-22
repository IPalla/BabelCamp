//Parecido a JSON
const user = {
    nombre: 'carlos',
    apellido: 'fernandez',
    edad: 21,
    esVaron: true,
    saludar : function() {
        console.log(`Hola soy ${this.nombre}`);
    }
}
function User(nombre, apellido, edad, esVaron){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.esVaron=esVaron;
}
User.prototype.saludar=function() {
    console.log(`Hola soy ${this.nombre}`);
}
var mostrarA1 = pData1 => console.log(pData1);



objectUser = new User("Nacho", "pallares", 21, true);
objectUser.saludar();
