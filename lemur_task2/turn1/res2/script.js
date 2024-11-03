const categories = [
    // ... existing categories ...
    {
        category: "Newborn Baby Sleeping Tools",
        items: [
            {
                title: "White Noise Machine",
                image: "images/white-noise-machine.jpg",
                price: 29.99,
            },
            {
                title: "Baby Blanket",
                image: "images/baby-blanket.jpg",
                price: 19.99,
            },
            {
                title: "Crib",
                image: "images/crib.jpg",
                price: 99.99,
            },
        ],
    },
];

let cart = [];
let favoriteItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];

function createCardComponent(title, image, price) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = image;
    img.alt = title;

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = title;

    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.onclick = () => addToCart(title, price);

    const favoriteIcon = document.createElement("i");
    favoriteIcon.classList.add("favorite-icon", "fa", "fa-heart");
    favoriteIcon.onclick = () => toggleFavorite(title);

    if (favoriteItems.includes(title)) {
        favoriteIcon.classList.add("active");
    }

    card.appendChild(img);
    card.appendChild(cardTitle);
    card.appendChild(button);
    card.appendChild(favoriteIcon);

    return card;
}

function displayCategories() {
    const categoriesSection = document.getElementById("categories");

    categories.forEach((category) => {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");
        categoryDiv.id = category.category.replace(/ /g, "-");

        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = category.category;
        categoryDiv.appendChild(categoryTitle);

        const cardContainer = document.createElement("div");
        cardContainer.classList.add("category-cards");

        category.items.forEach((item) => {
            const card = createCardComponent(item.title, item.image, item.price);
            cardContainer.appendChild(card);
        });

        categoryDiv.appendChild(cardContainer);
        categoriesSection.appendChild(categoryDiv);
    });
}

function addToCart(title, price) {
    const existingItem = cart.find((item) => item.title === title);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ title, price, quantity: 1 });
    }
    updateCartCount();
    updateCartList();
}

function toggleFavorite(title) {
    const favoriteIcon = document.querySelector(`.card h3:contains(${title}) + button + i`);
    if (favoriteItems.includes(title)) {
        favoriteItems = favoriteItems.filter((item) => item !== title);
        favoriteIcon.classList.remove("active");
    } else {
        favoriteItems.push(title);
        favoriteIcon.classList.add("active");
    }
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
}

function updateCartCount() {
    const cartCount = document.querySelector(".cart-count");
    cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
}

function updateCartList() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    cart.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.title} x${item.quantity} = $${item.price * item.quantity}`;
        cartList.appendChild(listItem);
    });
    const cartTotal = document.getElementById("cart-total");
    cartTotal.textContent = `Total: $${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}`;
}

document.addEventListener("DOMContentLoaded", displayCategories);

document.getElementById("checkout-button").addEventListener("click", () => {
    alert("Checkout successful!");
    cart = [];
    updateCartCount();
    updateCartList();
});

document.querySelector(".cart-icon").addEventListener("click", () => {
    document.getElementById("cart-section").classList.toggle("hidden");
});