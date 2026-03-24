let listProducts = [
    {
        name: "Hamburguer",
        id: 1,
        description: "A delicious hamburguer",
        price: 22.00,
        photoURL: "https://videocdn.cdnpk.net/videos/6106416e-a9f7-5305-8067-fe819182f8b7/horizontal/thumbnails/small.jpg?item_id=5036298"
    },
    {
        name: "pizza",
        id: 2,
        description: "A delicious pizza",
        price: 21.00,
        photoURL: "https://videocdn.cdnpk.net/videos/6106416e-a9f7-5305-8067-fe819182f8b7/horizontal/thumbnails/small.jpg?item_id=5036298"
    },
    {
        name: "peixe",
        id: 3,
        description: "A delicious peixe",
        price: 20.00,
        photoURL: "https://videocdn.cdnpk.net/videos/6106416e-a9f7-5305-8067-fe819182f8b7/horizontal/thumbnails/small.jpg?item_id=5036298"
    }
]

const prodList = document.getElementById("prod-list");

const botao = document.getElementById("btn")

botao.addEventListener("click", (e) => {
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

    for (let i = 0; i < listProducts.length; i++) {
        const li = document.createElement("li");
        console.log(listProducts[i]);
        li.innerText = ("<Name: " + listProducts[i].name + "\nDescription: " + listProducts[i].description + "\nPrice: " + listProducts[i].price)
        prodList.appendChild(li);
    };

    productName.value = "";
    productDescription.value = "";
    productPrice.value = "";
    productPhotoURL.value = "";
})