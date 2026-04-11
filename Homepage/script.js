const users = [
    {imglogo: "./assets/eat1.svg", name: "Spaghetti", opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", imgrait:"./assets/rating.svg", sell: "$12.05", button: "Order now"},
    {imglogo: "./assets/eat2.svg", name: "Gnocchi", opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", imgrait:"./assets/rating.svg", sell: "$12.05", button: "Order now"},
    {imglogo: "./assets/eat3.svg", name: "Rovioli", opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", imgrait:"./assets/rating.svg", sell: "$12.05", button: "Order now"},
     {imglogo: "./assets/eat4.svg", name: "Penne Alla Vodak", opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", imgrait:"./assets/rating.svg", sell: "$12.05", button: "Order now"},
    {imglogo: "./assets/eat5.svg", name: "Risoto", opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", imgrait:"./assets/rating.svg", sell: "$12.05", button: "Order now"},
    {imglogo: "./assets/eat6.svg", name: "Splitza Signature", opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", imgrait:"./assets/rating.svg", sell: "$12.05", button: "Order now"},

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