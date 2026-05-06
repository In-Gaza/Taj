const menuData = [
    { name: "شاورما دجاج", price: 35, category: "shawarma" },
    { name: "شاورما لحمة", price: 40, category: "shawarma" },
    { name: "بيتزا خضار", price: 25, category: "pizza" },
    { name: "بيتزا فراخ", price: 35, category: "pizza" }
];

const container = document.getElementById("menu-container");
const buttons = document.querySelectorAll("button");

function renderMenu(filter = "all") {
    container.innerHTML = "";

    const items = filter === "all"
        ? menuData
        : menuData.filter(i => i.category === filter);

    items.forEach(item => {
        container.innerHTML += `
            <div class="menu-item">
                <span>${item.name}</span>
                <span>${item.price} جنيه</span>
            </div>
        `;
    });
}

renderMenu();

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        renderMenu(btn.dataset.filter);
    });
});
