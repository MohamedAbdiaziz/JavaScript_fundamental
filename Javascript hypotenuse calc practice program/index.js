let a, b, c;
// a = window.prompt("Enter The side a  ");
// b = window.prompt("Enter The side b  ");

// c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
// c = Math.ceil(c);
// alert('The side C IS '+c);

function testing() {
    a = document.getElementById("num1").value;
    a = Number(a);

    b = document.getElementById("num2").value;
    b = Number(b);
    
    c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("c").innerText= c
}

document.getElementById("submit").onclick = testing;