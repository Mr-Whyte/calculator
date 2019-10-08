//function that display value 
function dis(val) {
    document.getElementById("result").value += val
}

//function that evaluates the digit and return result 
function solve() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

//function that clear the display 
function clr() {
    document.getElementById("result").value = ""
}

var select = document.createElement("select");
for (var i = 1; i < 25; i++) {
    var array = document.createElement("option");
    array.innerHTML = i;
    select.appendChild(array);
}

function toggleIn() {
    document.getElementById('table').style.visibility = "visible";
}

function toggleOut() {
    document.getElementById('table').style.visibility = "hidden";
}

document.body.appendChild(select);