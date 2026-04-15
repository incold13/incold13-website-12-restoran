const users = [
    {imglogo: "./assets/eat1.png",
        name: "Spaghetti",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/eat2.png",
        name: "Linguine",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/eat3.png",
        name: "Capellini",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/eat4.png",
        name: "Fettuccine",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/eat5.png",
        name: "Bucatini",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/eat6.png",
        name: "Tortellini",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/eat7.png",
        name: "Fusilli",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/eat8.png",
        name: "Farfalle",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/eat9.png",
        name: "Penne Alla Vodak",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
];


 const usersDiv = document.getElementById('menu_card_one_rows');

 usersDiv.innerHTML = users.map(
    item => `
        <div class = "menu_card" >
            <img class = "menu_img_main" src="${item.imglogo}">
            <div class = "menu_block1">
                <p>${item.name}</p>
                <img src="${item.imgrait}">
            </div>
            <p class = "menu_text_nomain">${item.opis}</p>
            <div class = "menu_sell_block">
                <p class = "menu_sell_block_text">${item.sell}</p>
                <button class = "menu_sell_block_button">${item.button}</button>
            </div>
         </div>`,
    ).join('');

const pizza = [
    {imglogo: "./assets/pizza1.png",
        name: "Splitza Signature",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/pizza2.png",
        name: "Super Supreme",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/pizza3.png",
        name: "Veggie Garden",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/pizza4.png",
        name: "Double Beef Burger",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/pizza5.png",
        name: "Meat Lovers",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/pizza6.png",
        name: "Extravaganzza",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/pizza7.png",
        name: "Meat & Meat",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/pizza8.png",
        name: "Meatzza",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
    {imglogo: "./assets/pizza9.png",
        name: "Tuna Delight",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat", 
        imgrait:"./assets/rating.svg", 
        sell: "$12.05", 
        button: "Order now"},
];


 const pizzaDiv = document.getElementById('menu_card_one_rows2');

 pizzaDiv.innerHTML = pizza.map(
    item => `
        <div class = "menu_card" >
            <img class = "menu_img_main" src="${item.imglogo}">
            <div class = "menu_block1">
                <p>${item.name}</p>
                <img src="${item.imgrait}">
            </div>
            <p class = "menu_text_nomain">${item.opis}</p>
            <div class = "menu_sell_block">
                <p class = "menu_sell_block_text">${item.sell}</p>
                <button class = "menu_sell_block_button">${item.button}</button>
            </div>
         </div>`,
    ).join('');