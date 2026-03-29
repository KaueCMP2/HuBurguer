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


const form = document.getElementById("container-form-add-product");
const returnLink = document.getElementById("return-form-link");
console.log(returnLink)
returnLink.addEventListener("click", (e) => {
    e.preventDefault();
    form.style.display = "none";
    btn.addEventListener("click", (e) => {
        e.preventDefault();
    })
})

const addProductsLink = document.getElementById("link-add-products");
addProductsLink.addEventListener("click", (e) => {
    e.preventDefault();
    form.style.display = "flex";
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        listProducts.push(
            {
                name: productName.value,
                description: productDescription.value,
                price: productPrice.value,
                photoURL: productPhotoURL.value
            });

        prodList.innerHTML = "";
        console.clear();

        showProducts();

        productName.value = "";
        productDescription.value = "";
        productPrice.value = "";
        productPhotoURL.value = "";
    })
})


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




