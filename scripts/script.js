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

listProducts.forEach(prod => {
    const prodList = document.getElementById("prod-list");
    const orderList = document.getElementById("order-list")
    const btnEnd = document.getElementById("btn")

    const liProd = document.createElement("li");
    const liOrd = document.createElement("li");
    const btnBuy = document.createElement("button");

    liProd.innerText = ("Product name: \n" + prod.name + "\n$: " + prod.price);
    btnBuy.innerHTML = "<button id=\"btnBuy\">btnBuy</button>";
    btnBuy.innerText = ("Buy");

    liProd.appendChild(btnBuy);
    prodList.appendChild(liProd);

    btnBuy.addEventListener("click", () => {
        liOrd.innerText = ("Product name:   " + prod.name + "  $: " + prod.price)
        orderList.appendChild(liOrd);
        orderList.appendChild(btnEnd);
    })

});

