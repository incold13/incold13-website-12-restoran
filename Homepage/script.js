const users = [
    {imglogo: "./assets/eat1.svg", name: "Spaghetti", opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", imgrait:"./assets/rating.svg", sell: "$12.05", button: "Order now"},
    {imglogo: "./assets/eat1.svg", name: "Spaghetti", opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", imgrait:"./assets/rating.svg", sell: "$12.05", button: "Order now"},
    {imglogo: "./assets/eat1.svg", name: "Spaghetti", opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", imgrait:"./assets/rating.svg", sell: "$12.05", button: "Order now"},
];


 const usersDiv = document.getElementById('menu_card_one_rows');

 usersDiv.innerHTML = users.map(
    item => `<div class = "menu_card">
                <img src="${item.imglogo}">
                <div class = "menu_block1">
                    <p>${item.name}</p> 
                    <img src="${item.imgrait}">
                <div>
                <p>${item.opis}</p>
                <div>
                    <p>${item.sell}</p>
                    <button>${item.button}
                </div>
             </div>`,
    ).join('');