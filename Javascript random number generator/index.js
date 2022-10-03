let x,y,z
document.getElementById("submit").onclick = roll;
function roll() {
    x = Math.round((Math.random()*6)+1)
    y = Math.round((Math.random()*6)+1)
    z = Math.round((Math.random()*6)+1)
    document.getElementById("rand1").innerHTML = x
    document.getElementById("rand2").innerHTML = y
    document.getElementById("rand3").innerHTML = z
}