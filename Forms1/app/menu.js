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
        this.vista.eArtcile.innerHTML = '<h2>Inicio</h2>';
    }
    menuItems(oEv){
        oEv.preventDefault()
        console.log(`Pulsado ${oEv.target.id}`)
        console.dir(oEv.target.id)
        this.vista.eArtcile.innerHTML = `<h2>${oEv.target.id.toUpperCase()}</h2>`
    }
}