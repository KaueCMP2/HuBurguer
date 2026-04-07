let listUsers = [
    {
        name: "admin",
        email: "admin@admin.com",
        password: 123456,
    },
    {
        name: "Kaue Sergio",
        email: "kaue@email.com",
        password: 123456,
    },
    {
        name: "Joao",
        email: "joao@email.com",
        password: 123456,
    },
    {
        name: "Algordan",
        email: "algordan@email.com",
        password: 123456,
    },
    {
        name: "Apployaldo",
        email: "apployaldo@email.com",
        password: 123456,
    }
]

const botao = document.getElementById("btn");
const userName = document.getElementById("name");
const userMail = document.getElementById("mail");
const userPass = document.getElementById("pass");

let RealyPass = "";
const contador = 0;

botao.addEventListener("click", (e) => {
    e.preventDefault();

    let emailCadastrado = listUsers.some(um => um.email == userMail.value);
    if (emailCadastrado) {
        alert("Email já cadastrado");
        return
    }

    else if (userPass.value == null || userPass.value == "" || userName.value == null || userPass.value == "" || userMail.value == null || userMail.value == "") {
        alert("Preencha todos os campos");
        return;
    }

    listUsers.push(
        {
            name: userName.value,
            email: userMail.value,
            password: userPass.value
        }
    );
    alert("Olá " + userName.value + " seja bem vindo!!!");
    cadastrado = false;
    
    userName.value = "";
    userMail.value = "";
    userPass.value = "";
});

const btnOpenLogin = document.getElementById("btn-open-login");
btnOpenLogin.addEventListener("click", () => {
    window.open('/pages/login.html', '_self');
})