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
const userMail = document.getElementById("mail");
const userPass = document.getElementById("pass");
let RealyPass = "";
const contador = 0;
const cadastrado = false;

botao.addEventListener("click", (e) => {
    e.preventDefault();
    let userIndex = listUsers.findIndex(user => user.email == userMail.value)
    console.log(userMail.value)
    console.log(userIndex)
    if (!userMail.value || !userPass.value) {
        return alert("Preencha todos os campos");
    }

    if (userIndex < 0) {
        return alert("Usuario não encontrado!!!");
    }

    if (userPass.value != listUsers[userIndex].password) {
        return alert("Dados invalidos!!!");
    }

    alert("login efetuado")
})