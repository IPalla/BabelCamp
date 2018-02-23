class main {
    constructor(){
        this.tareas = [];
        this.user= {
            nombre: ""
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
        });
        this.vista.btnTarea.addEventListener("click", this.btnAdd.bind(this), false);

    }

    btnAdd(){
        let lista=`<ul>`;
        this.tareas.push(this.vista.inputTarea.value);
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