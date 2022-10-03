// datatype convertion like  text to number or boolean or number to text
// string, number and boolean
document.getElementById("submit").onclick = function testing(params) {
    var age = document.getElementById("text").value;
    
    age = Number(age);
    console.log(typeof age);
    age +=2;
    
    alert("this was convert "+age);
}
let x,y,z;
x= Number("3.14")
y= String(3.14) 
z= Boolean("")
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
