export class Main{
    constructor(){
        console.log("Cargado");
        this.vista = {
            btnSubmit : document.querySelector('#btnSubmit'),
            range: document.querySelector("input[type='range']"),
            img: document.querySelector('img')
        }
        this.vista.range.addEventListener('drag', this.range.bind(this), false);
        this.vista.btnSubmit.addEventListener('click', this.menuItems.bind(this), false);
    }
    menuItems(oEv){
        //oEv.preventDefault();
        var inputs= document.querySelectorAll("input[type='radio']");
        inputs.forEach(element => {
            console.dir(element);
        });
    }
    range(oEv){
        this.vista.img.width=this.vista.range.value*1.5;
        this.vista.img.height=this.vista.range.value*1.5;
    }
}