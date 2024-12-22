let        name = document.getElementById("name")
let       email = document.getElementById("email")
let phonenumber = document.getElementById("phonenumber")
let     address = document.getElementById("address")
let        date = document.getElementById("date")
let      degree = document.getElementById("degree")
let   institute = document.getElementById("institute")
let  graduation = document.getElementById("graduation")
let      skills = document.getElementById("skills")
let        file = document.getElementById("file")
let        con2 = document.getElementById("con2")
let       input = document.getElementsByTagName("input")


document.getElementById("myform").addEventListener("submit", (event) => {
    event.preventDefault()
    name2.innerHTML = name.value
    email2.innerHTML = email.value
    phonenumber2.innerHTML = phonenumber.value
    address2.innerHTML = address.value
    date2.innerHTML = date.value
    degree2.innerHTML = degree.value
    institute2.innerHTML = institute.value
    graduation2.innerHTML = graduation.value
    skills2.innerHTML = skills.value
    if ((file.files[0])) {
        file2.src = URL.createObjectURL(file.files[0])
    } else { alert("please add a pic") }
    if (input[8].value){
        con2.style.display = "block"
    } else (console.log("please"))


})












let name2 = document.getElementById("name2")
let email2 = document.getElementById("email2")
let phonenumber2 = document.getElementById("phonenumber2")
let address2 = document.getElementById("address2")
let date2 = document.getElementById("date2")
let degree2 = document.getElementById("degree2")
let institute2 = document.getElementById("institute2")
let graduation2 = document.getElementById("graduation2")
let skills2 = document.getElementById("skills2")
let file2 = document.getElementById("file2")
