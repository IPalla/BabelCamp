
/*$document.onreadystatechange(){
}
*/
class Main {
    constructor(){
        document.querySelector('#btnRegistrar').addEventListener("click", ()=>{
            let user = prompt("Escribe","PEP");
            console.log(this);
         },false);
        document.querySelector('#btnGoogle').addEventListener("click", ()=>{
            window.location.href="http://www.google.es";
            //window.open("http://www.google.es");
        },false).bind(this);
    }
}

(function() {
    document.addEventListener("DOMContentLoaded", ()=>{
        var main = new Main();
        console.dir(main);
    }, false);
})();
