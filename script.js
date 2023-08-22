let on = true

console.log(on);
console.log('Hello World!');

console.log(document.getElementById("test").innerHTML)

function doSomething() {
    if (document.getElementById("test").innerHTML == "Hi") {
        document.getElementById("test").innerHTML = "Bye"
    }
    else {
        document.getElementById("test").innerHTML = "Hi"
    }
}