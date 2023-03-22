function Save_data(){
    User_name = document.getElementById("Name").value 
    Phone = document.getElementById("Num").value 
    Address = document.getElementById("Add").value 
    localStorage.setItem("Name",User_name)
    localStorage.setItem("Num",Phone)
    localStorage.setItem("Address",Address)
    window.open("visit.html")
}