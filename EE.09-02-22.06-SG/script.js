const td0 = document.getElementById("td0")
const td1 = document.getElementById("td1")
const td2 = document.getElementById("td2")
const td3 = document.getElementById("td3")
const td4 = document.getElementById("td4")
let inputValue
function button(){
    inputValue = parseInt(document.getElementById("value").value)
    document.getElementById("td0").style = 'background-color: hsl('+ inputValue +', 100%, 50%)';
    document.getElementById("td1").style = 'background-color: hsl('+ inputValue +', 80%, 50%)';
    document.getElementById("td2").style = 'background-color: hsl('+ inputValue +', 60%, 50%)';
    document.getElementById("td3").style = 'background-color: hsl('+ inputValue +', 40%, 50%)';
    document.getElementById("td4").style = 'background-color: hsl('+ inputValue +', 20%, 50%)';
}