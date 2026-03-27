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
        description: "A delicious peixe",
        price: 20.00,
        photoURL: "https://videocdn.cdnpk.net/videos/6106416e-a9f7-5305-8067-fe819182f8b7/horizontal/thumbnails/small.jpg?item_id=5036298"
    }
]

const prodList = document.getElementById("prod-list");
const orderList = document.getElementById("order-list")
const btnEnd = document.createElement("button")

let listOrdersAdd = [
    {
        nameProd: "",
        quant: 0,
        price: 0,
    }
];

listProducts.forEach(prod => {
    const liProd = document.createElement("li");
    const liOrd = document.createElement("li");
    const btnBuy = document.createElement("button");

    liProd.innerText = ("Product name: \n" + prod.name + "\n$: " + prod.price);

    liProd.appendChild(btnBuy);
    prodList.appendChild(liProd);

    btnBuy.innerHTML = "<button id=\"btnBuy\">Buy</button>";

    function AddOrderInListOrders(prodName, price) {
        let prodIndex = listOrdersAdd.findIndex(prodList => prodList.nameProd == prodName);
        let quantityProd = 1;

        if (prodIndex < 0) {
            listOrdersAdd.push({
                nameProd: prodName,
                quant: 1,
                price: price,
            })

            liOrd.innerText = ("Product name:   " + prod.name + "  $: " + prod.price + "    Quantity:   " + quantityProd)
            orderList.appendChild(liOrd);
            orderList.appendChild(btnEnd);

            prodIndex = listOrdersAdd.length - 1
        }
        quantityProd = listOrdersAdd[prodIndex].quant;
        listOrdersAdd[prodIndex].quant++

        liOrd.innerText = ("Product name:   " + prod.name + "  $: " + prod.price + "    Quantity:   " + quantityProd)
    }


    btnBuy.addEventListener("click", () => {
        AddOrderInListOrders(prod.name, prod.price)
    })
});




