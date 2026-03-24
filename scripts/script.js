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
const cadastrado = false;

botao.addEventListener("click", (e) => {
    e.preventDefault();

    for (let i = 0; i <= listUsers.length; i++) {
        contador + 1;
        if (listUsers[i].email == userMail.value) {
            {
                alert("Email já cadastrado");
                cadastrado = false;
                break;
            }
        }

        else if (userPass.value == null || userPass.value == "" || userName.value == null || userPass.value == "" || userMail.value == null || userMail.value == "") {
            alert("Preencha todos os campos")
            cadastrado = false
            return;
        }

        listUsers.push[
            {
                name: userName.value,
                email: userMail.value,
                password: userPass.value
            }
        ]
        cadastrado = true

        if (cadastrado == true) {
            alert("Olá " + userName.value + " seja bem vindo!!!")
        }
        console.log(listUsers)
    }
})