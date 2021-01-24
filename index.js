document.querySelector(".submit").addEventListener("click", ()=>{
    var fname = document.querySelector(".first-name");
    var lname = document.querySelector(".last-name");
    var email = document.querySelector(".email");
    var pass = document.querySelector(".password");
    var inputs = [fname, lname, email, pass];
    email.nextElementSibling.textContent = "Email cannot be empty"
    for (var i=0; i<inputs.length; i++){
        if(inputs[i].value === ""){
            inputs[i].parentElement.classList.add("input-error");
        }
        else{
            inputs[i].parentElement.classList.remove("input-error");
        }
    }
    if(email.value !== ""){
        var pattern = /\w+@\w+\.\w+/g;
        var reg = new RegExp(pattern);
        if(reg.test(email.value)){
            email.parentElement.classList.remove("input-error");
        }
        else{
            email.parentElement.classList.add("input-error");
            email.nextElementSibling.textContent = "Looks like this is not an email"
        }
    }
});