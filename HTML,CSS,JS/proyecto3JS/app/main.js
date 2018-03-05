class main {
    constructor(){
        this.tareas = []; 
        if(localStorage.getItem("tareas")){
            this.tareas= JSON.parse(localStorage.getItem("tareas"));
        }
        this.user= {
            nombre: localStorage.getItem("nombre")
        }
        this.vista = {
            btnRegistrar: document.querySelector('#btnRegistrar'),
            inputRegistrar: document.querySelector('#nombre'),
            resultado: document.querySelector('#resultado'),
            inputTarea: document.querySelector('#tarea'),
            btnTarea: document.querySelector('#btnTarea'),
            tareasHTML: document.querySelector('#tareas')
        }
        this.vista.btnRegistrar.addEventListener("click", ()=>{
            this.user.nombre=this.vista.inputRegistrar.value;
            this.vista.resultado.innerHTML=`<p> Tu nombre es ${this.user.nombre} </p>`;
            //this.vista.resultado.className="rojo";
            this.vista.resultado.classList.add("rojo");
            localStorage.setItem("nombre", this.user.nombre);
        });
        this.vista.btnTarea.addEventListener("click", this.btnAdd.bind(this), false);
        if(this.user.nombre)
            this.vista.resultado.innerHTML=`<p> Tu nombre es ${this.user.nombre} </p>`;
        if(this.tareas.length > 0)
            this.mostrarTareas();
    }

    btnAdd(){
        this.tareas.push(this.vista.inputTarea.value);
        localStorage.setItem("tareas", JSON.stringify(this.tareas));
        this.mostrarTareas();
    }
    mostrarTareas(tareas){
        let lista=`<ul>`;
        this.tareas.forEach(element => {
            lista+=`<li>${element}</li>`
        });
        lista+=`</ul>`;
        this.vista.tareasHTML.innerHTML=lista;
    }
}

(function(){
    document.addEventListener("DOMContentLoaded", ()=>{
        new main();
    }, false);
})();