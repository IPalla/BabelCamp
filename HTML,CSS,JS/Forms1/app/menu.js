export class Main{
    constructor(){
        console.log("Cargado");
        this.vista = {
            aBtnsMenu: document.querySelectorAll('a'),
            eArtcile : document.querySelector('article')
        }
        this.vista.aBtnsMenu.forEach( (item) => {
            item.addEventListener('click', this.menuItems.bind(this), false)
        })
    }
    menuItems(oEv){
        oEv.preventDefault()
        console.log(`Pulsado ${oEv.target.id}`)
        console.dir(oEv.target.id)
    }
}