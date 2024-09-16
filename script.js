var plus = document.getElementById("plusbtn")
var overlay = document.getElementById("overlay")
var popupbox = document.getElementById("popup-box")

plus.addEventListener("click", function () {
    overlay.style.display = "block"
    popupbox.style.display = "block"
})

var cancelbtn = document.getElementById("cancelbtn")
cancelbtn.addEventListener("click", function (event) {
    event.preventDefault()
    overlay.style.display = "none"
    popupbox.style.display = "none"


})



var add = document.getElementById("addbtn")
var container = document.querySelector(".container")
var a = document.getElementById("title-input")
var b = document.getElementById("author-input")
var c = document.getElementById("description-input")

add.addEventListener("click", function (event) {
    event.preventDefault()

    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${a.value}</h2>
    <h4>${b.value}</h4>
    <p>${c.value}</p>
    <button onclick="del(event)">Delete</button>
   `
    
           
    container.append(div)
    overlay.style.display = "none"
    popupbox.style.display = "none"



})
function del(event){
    event.target.parentElement.remove()

}