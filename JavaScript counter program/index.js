let a = 0;
document.getElementById("dicrease").onclick = decrease;
document.getElementById("increase").onclick = increase;
document.getElementById("reset").onclick = reset;
function decrease(params) {
    a -= 1;
    document.getElementById("label").innerText = a;
}
function increase(params) {
    a += 1;
    document.getElementById("label").innerText = a;
}
function reset(params) {
    a = 0;
    document.getElementById("label").innerText = a;
}