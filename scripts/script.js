const btnSign = document.getElementById("btn-sign");
const btnLogin = document.getElementById("btn-login");

btnSign.addEventListener("click", openSign)
btnLogin.addEventListener("click", openLogin)

function openSign() {
    window.open('/pages/sign.html', '_self')
}

function openLogin() {
    window.open('/pages/login.html', '_self')
}


const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});