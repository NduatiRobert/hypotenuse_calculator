let a;
let b;
let c;

/*
a = window.prompt("Enter Side A");
a = Number(a);

b = window.prompt("Enter Side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Side C is: " + c);
*/

document.getElementById("submitbutton").onclick = function() {

    a = document.getElementById("atext").value;
    //taking the value of the text box and assigning it variable 'a'
    a = Number(a);

    
    b = document.getElementById("btext").value;
     //taking the value of the text box and assigning it variable 'b'
    b = Number(b);
    
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cside").innerHTML = "SIDE C: " + c;
    
    
    console.log("Side C is: " + c);


    
}


