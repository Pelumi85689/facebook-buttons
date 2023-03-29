let display = document.getElementById("display");
let facebookbuttons = ["signup", "login", "create acc", "forgotten password"];
display.innerHTML = facebookbuttons

function popname() {
    facebookbuttons.pop();
    display.innerHTML = facebookbuttons;
}

function shiftname() {
    facebookbuttons.shift();
    display.innerHTML = facebookbuttons
}

function unshiftname() {
    let input = document.getElementById('input')
    facebookbuttons.unshift(input.value);
    display.innerHTML = facebookbuttons
}

function pushname() {
    let input2 = document.getElementById('input')
    facebookbuttons.push(input2.value);
    display.innerHTML = facebookbuttons
}