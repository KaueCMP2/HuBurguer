let listUsers = [
    {
        name: "admin",
        email: "admin@admin.com",
        cargo: "admin",
        password: 123456,
    },
    {
        name: "Kaue Sergio",
        email: "kaue@email.com",
        cargo: "user",
        password: 123456,
    },
    {
        name: "Joao",
        email: "joao@email.com",
        cargo: "user",
        password: 123456,
    },
    {
        name: "Algordan",
        email: "algordan@email.com",
        cargo: "user",
        password: 123456,
    },
    {
        name: "Apployaldo",
        email: "apployaldo@email.com",
        cargo: "user",
        password: 123456,
    }
]

const botao = document.getElementById("btn");
const userMail = document.getElementById("mail");
const userPass = document.getElementById("pass");
let RealyPass = "";
const contador = 0;
const cadastrado = false;

botao.addEventListener("click", (e) => {
    e.preventDefault();
    let userIndex = listUsers.findIndex(user => user.email == userMail.value)
    if (!userMail.value || !userPass.value) {
        return alert("Preencha todos os campos");
    }

    if (userIndex < 0) {
        return alert("Usuario não encontrado!!!");
    }

    if (userPass.value != listUsers[userIndex].password) {
        return alert("Dados invalidos!!!");
    }

    alert("Olá " + listUsers[userIndex].name + " Seja bem vindo");
    if (listUsers[userIndex].cargo == "admin") {
        window.open('/pages/adminHome.html', '_self');
    }
    window.open('/pages/home.html', '_self');
});

const btnOpenSign = document.getElementById("btn-open-sign")
btnOpenSign.addEventListener("click", (e) => {
    e.preventDefault();
    window.open('/pages/sign.html', '_self');
});

const btnForgot = document.getElementById("forgot-password");
btnForgot.addEventListener("click", (e) => {
    e.preventDefault();
    window.open('/pages/forgotPassword.html', '_self');
})