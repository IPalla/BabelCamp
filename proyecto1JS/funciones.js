var a=2;

console.log(divide(12,4));
function divide(b,c) {
    if(b<c)
        return 0;
    return 1+divide(b-c,c);
}
function suma(a,b){
    return a+b;
}
function resta(am,b){
    a-=b;
    return a-b;
}
function scope(){
    var am=2;
    var b=3;
    resta(am,b);
    console.log(a);
}


/* ArrowFunction es ES6 */
var mostrarA = (pData1, pData2) =>{
    console.log(pData1,pData2);
}
var mostrarB = pData1 => console.log(pData1);

