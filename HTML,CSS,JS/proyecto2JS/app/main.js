
/*$document.onreadystatechange(){
}
*/

(function() {
    document.addEventListener("DOMContentLoaded", main, false);
})();

/*//ACCESO AL DOM
document.getElementById("A");
document.querySelector('input').addEventListener("onclick", ()=>{
    console.log("Pulsado");
});
document.querySelectorAll();*/

function main(){
    console.dir(window);
    console.dir(document.querySelector('#btnRegistrar'));
    console.dir(document.querySelectorAll('#btnSaludar')[0]);
    document.querySelector('#btnRegistrar').addEventListener("click", ()=>{
       let user = prompt("Escribe","PEP");
    });
    document.querySelector('#btnGoogle').addEventListener("click", ()=>{
        window.location.href="http://www.google.es";
        //window.open("http://www.google.es");
     });

}