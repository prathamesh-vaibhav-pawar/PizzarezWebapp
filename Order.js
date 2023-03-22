
function Confirm(){
    Pizza_type = document.getElementById("Pizz").value 
    localStorage.setItem("Pizza",Pizza_type)
    Size = document.getElementById("Size").value
    Toppings = document.getElementById("Toppings").value
    localStorage.setItem("Size",Size)
    localStorage.setItem("Toppings",Toppings)
    document.getElementById("Pizz").innerHTML = " "
    document.getElementById("Size").innerHTML = " "
    document.getElementById("Toppings").innerHTML = " "
    window.open("Add.html")
}
function Cheese_burst(){
    document.getElementById("Size").innerHTML = " "
    document.getElementById("Size").value = "Cheese Burst"
}
function new_hand_tossed(){
    document.getElementById("Size").innerHTML = " "
    document.getElementById("Size").value = "new hand tossed"
}
function Fresh_Pan_Pizza(){
    document.getElementById("Size").innerHTML = " "
    document.getElementById("Size").value = "Fresh Pan Pizza"
}
function Grilled_Mushroom(){
    document.getElementById("Toppings").innerHTML = " "
    document.getElementById("Toppings").value = "Grilled Mushroom"
}
function Panner(){
    document.getElementById("Toppings").innerHTML = " "
    document.getElementById("Toppings").value = "Panner"
}
function Black_Olive(){
    document.getElementById("Toppings").innerHTML = " "
    document.getElementById("Toppings").value = "Black Olive"
}
