
let data = new Array(12,22,33);
let nombres = ["Juan", "Rodri"]; 

console.log(data);

data.forEach((item) => {item+=1});
console.log(data);

data.map((item) => {item+=3; console.log(item)});
console.log(data);

var newdata=data.map( item => ++item);
console.log(newdata);


newdata=data.filter(item => item > 20);
console.log(newdata);