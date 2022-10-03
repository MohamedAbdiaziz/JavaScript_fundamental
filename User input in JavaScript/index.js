// user input except
// way 1
let username = window.prompt("what is your name?");
window.alert(username);
console.log(username);
// way 2
let username2;
document.getElementById("mybutton").onclick = function myfuction(){
    username2 = document.getElementById("mytext").value;
    window.alert(username2);
}