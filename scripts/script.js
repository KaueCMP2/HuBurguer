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

botao.addEventListener("click", (e) => {
    e.preventDefault();

    for (let i = 0; i <= listUsers.length; i++) {
        contador + 1;
        console.log("iniciou");
        if (listUsers[i].email == userMail.value) {
            RealyPass = listUsers[i].password
            if (userPass.value == null || userPass.value == "") {
                alert("Preencha todos os campos")
                return;
            }
            if (userPass.value != RealyPass) {
                alert("Dados invalidos")
                return;
            }
            alert("Olá " + listUsers[i].name + " seja bem vindo!!!")
        }
        else if (contador + 1 == listUsers.length && userMail.value != listUsers[i].email) {
            alert("user not found")
            break;
        }
    }
    
    userPass.value = "";
})