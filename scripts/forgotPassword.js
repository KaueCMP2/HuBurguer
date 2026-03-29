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

const userMail = document.getElementById("mail");
const btn = document.getElementById("btn");

let RealyPass = "";
const contador = 0;

btn.addEventListener("click", (e) => {
    e.preventDefault();

    let emailCadastrado = listUsers.some(um => um.email == userMail.value);
    if (!emailCadastrado) {
        alert("Email não encontrado");
        return
    }

    else if (userMail.value == null || userMail.value == "") {
        alert("Preencha todos os campos");
        return;
    }
    const userPass = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    alert(userPass);

    userMail.value = "";
});