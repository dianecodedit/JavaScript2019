let emailBox = document.getElementById("emailpara"),
    checkBox = document.getElementById("subscribe"),
    postalAddress = document.getElementById("postaladdress"),
    homeAddress = document.getElementById("homeaddress"),
    addressCheckbox = document.getElementById("homepostalcheck")

checkBox.addEventListener("click", function() {
    emailBox.classList.toggle("hidden")
})

addressCheckbox.addEventListener("click", function() {
    homeAddress.value = postalAddress.value
    homeAddress.disabled = true
    if (addressCheckbox.checked == false) {
        homeAddress.disabled = false
        homeAddress.value = ""
    }
})