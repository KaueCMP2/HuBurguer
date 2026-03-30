let listProducts = [
    {
        name: "Hamburguer",
        description: "A delicious hamburguer",
        price: 22.00,
        photoURL: "https://videocdn.cdnpk.net/videos/6106416e-a9f7-5305-8067-fe819182f8b7/horizontal/thumbnails/small.jpg?item_id=5036298"
    },
    {
        name: "Hod-dog",
        description: "A delicious Hot-dog",
        price: 21.00,
        photoURL: "https://videocdn.cdnpk.net/videos/6106416e-a9f7-5305-8067-fe819182f8b7/horizontal/thumbnails/small.jpg?item_id=5036298"
    }
]

const prodList = document.getElementById("prod-list");

const productName = document.getElementById("name");
const productDescription = document.getElementById("description");
const productPrice = document.getElementById("price");
const productPhotoURL = document.getElementById("photo-url")
const btn = document.getElementById("btn")

showProducts();

function showProducts() {
    for (let i = 0; i < listProducts.length; i++) {
        const li = document.createElement("li");
        console.log(listProducts[i]);
        li.innerText = ("Name:   " + listProducts[i].name + "   |     Description: " + listProducts[i].description + "  |  Price:   " + listProducts[i].price)

        const contButtons = document.createElement("div")
        contButtons.className = "btn-prod-conteiner";

        const btnRemove = document.createElement("button");
        btnRemove.className = "btn-remove";
        btnRemove.innerText = "remove"
        btnRemove.style.border = "none";
        btnRemove.style.backgroundColor = "transparent";
        btnRemove.style.cursor = "pointer";

        const btnUpdate = document.createElement("button");
        btnUpdate.className = "btn-update";
        btnUpdate.innerText = "edit"
        btnUpdate.style.border = "none";
        btnUpdate.style.backgroundColor = "transparent";
        btnUpdate.style.cursor = "pointer";


        prodList.appendChild(li);

        prodList.appendChild(contButtons)

        contButtons.appendChild(btnUpdate);
        contButtons.appendChild(btnRemove);
    };
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    prodList.innerHTML = "";
    listProducts.push(
        {
            name: productName.value,
            description: productDescription.value,
            price: productPrice.value,
            photoURL: productPhotoURL.value
        });

        productName.value = "";
        productDescription.value = "";
        productPrice.value = "";
        productPhotoURL.value = "";
        
    showProducts();
});

const modal = document.getElementById('add-prod-modal');
const btnOpenModal = document.getElementById('link-add-products');
const btnCloseModal = document.getElementById('return-form-link');

btnOpenModal.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("btn abrir clicado");
    modal.showModal();
})

btnCloseModal.addEventListener("click", () => {
    console.log("btn fechar clicado")
    modal.close();
})