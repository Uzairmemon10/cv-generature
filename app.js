let name = document.getElementById("name")
let email = document.getElementById("email")
let phonenumber = document.getElementById("phonenumber")
let address = document.getElementById("address")
let date = document.getElementById("date")
let degree = document.getElementById("degree")
let institute = document.getElementById("institute")
let graduation = document.getElementById("graduation")
let skills = document.getElementById("skills")
let file = document.getElementById("file")
let input = document.getElementsByTagName("input")
let themebuttons = document.getElementById("themebuttons")



let container = document.querySelector(".container")
let con2 = document.querySelector(".con2")

let theme1 = document.querySelector(".theme1")
let theme1data = document.querySelector(".theme1data")

let changetheme=document.getElementById("changetheme")

changetheme.addEventListener("click", () => {

    let theme2 = document.createElement("button")
    theme2.classList.add("theme2")
    theme2.textContent = "theme1"
    let theme3 = document.createElement("button")
    theme3.classList.add("theme3")
    theme3.textContent = "theme2"
    let theme4 = document.createElement("button")
    theme4.classList.add("theme4")
    theme4.textContent = "theme3"
    themebuttons.appendChild(theme2)
    themebuttons.appendChild(theme3)
    themebuttons.appendChild(theme4)
    changetheme.remove()
theme2.addEventListener("click", () => {
    if (container.classList.contains("theme1") || con2.classList.contains("theme1data") || container.classList.contains("theme33") || con2.classList.contains("theme3data")) {

        container.classList.remove("theme1", "theme33")
        container.classList.add("theme22")
        con2.classList.remove("theme1data", "theme3data")
        con2.classList.add("theme2data")

    }
})

    theme3.addEventListener("click", () => {
        if (container.classList.contains("theme1")|| con2.classList.contains("theme1data")|| container.classList.contains("theme22")|| con2.classList.contains("theme2data")) {

            container.classList.remove("theme1","theme22")
            container.classList.add("theme33")
            con2.classList.remove("theme1data","theme2data")
            con2.classList.add("theme3data")

        }
    })
    theme4.addEventListener("click", () => {
        if (container.classList.contains("theme33")|| con2.classList.contains("theme3data")|| container.classList.contains("theme22")|| con2.classList.contains("theme2data")) {

            container.classList.remove("theme33","theme22")
            container.classList.add("theme1")

            con2.classList.remove("theme3data","theme2data")
            con2.classList.add("theme1data")

        }
    })


})


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
    // if (input[8].value) {
    //     con2.style.display = "block"
    // } else (console.log("please"))

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





