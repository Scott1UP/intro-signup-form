const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

firstName.addEventListener("blur", event => {
    const regex = /^(\w+\S+)$/i;
    const value = firstName.value.trim();
    const errorMsg = firstName.parentElement.querySelector(".error-text");

    if (!regex.test(value)) {
        errorMsg.classList.remove("disabled");
        firstName.classList.add("error");
    } else {
        errorMsg.classList.add("disabled"); 
        firstName.classList.remove("error");
    }
}); 

lastName.addEventListener("blur", event => {
    const regex = /^(\w+\S+)$/i;
    const value = lastName.value.trim();
    const errorMsg = lastName.parentElement.querySelector(".error-text");

    if (!regex.test(value)) {
        errorMsg.classList.remove("disabled");
        lastName.classList.add("error");
    } else {
        errorMsg.classList.add("disabled"); 
        lastName.classList.remove("error");
    }
});

email.addEventListener("blur", event => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const value = email.value.trim();
    const errorMsg = email.parentElement.querySelector(".error-text");

    if (!regex.test(value)) {
        errorMsg.classList.remove("disabled");
        email.classList.add("error");
    } else {
        errorMsg.classList.add("disabled"); 
        email.classList.remove("error");
    }
}); 

password.addEventListener("blur", event => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const value = password.value.trim();
    const errorMsg = password.parentElement.querySelector(".error-text");

    if (!regex.test(value)) {
        errorMsg.classList.remove("disabled");
        password.classList.add("error");
    } else {
        errorMsg.classList.add("disabled"); 
        password.classList.remove("error");
    }
});
