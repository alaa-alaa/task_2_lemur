const categories = [
    {
        category: "Healthy Recipes",
        items: [
            {
                title: "Fruit Smoothie",
                image: "images/recipe1.jpg",
                buttonText: "See Recipe",
                price: 0,
            },
            {
                title: "Veggie Wrap",
                image: "images/recipe2.jpg",
                buttonText: "See Recipe",
                price: 0,
            },
            {
                title: "Oatmeal Pancakes",
                image: "images/recipe3.jpg",
                buttonText: "See Recipe",
                price: 0,
            },
            {
                title: "Mini Pizzas",
                image: "images/recipe4.jpg",
                buttonText: "See Recipe",
                price: 0,
            },
            {
                title: "Quinoa Salad",
                image: "images/recipe5.jpg",
                buttonText: "See Recipe",
                price: 0,
            },
            {
                title: "Baked Apple Slices",
                image: "images/recipe6.jpg",
                buttonText: "See Recipe",
                price: 0,
            },
        ],
    },
    {
        category: "Children's Clothing",
        items: [
            {
                title: "Summer Dress",
                image: "images/clothing1.jpg",
                buttonText: "View Details",
                price: 15.99,
            },
            {
                title: "Winter Jacket",
                image: "images/clothing2.jpg",
                buttonText: "View Details",
                price: 24.99,
            },
            {
                title: "Playful T-Shirt",
                image: "images/clothing3.jpg",
                buttonText: "View Details",
                price: 9.99,
            },
            {
                title: "Cozy Sweater",
                image: "images/clothing4.jpg",
                buttonText: "View Details",
                price: 19.99,
            },
            {
                title: "Casual Pants",
                image: "images/clothing5.jpg",
                buttonText: "View Details",
                price: 12.99,
            },
            {
                title: "Rain Boots",
                image: "images/clothing6.jpg",
                buttonText: "View Details",
                price: 29.99,
            },
        ],
    },
    {
        category: "Games for Children",
        items: [
            {
                title: "Memory Match",
                image: "images/game1.jpg",
                buttonText: "Play Now",
                price: 0,
            },
            {
                title: "Puzzle Fun",
                image: "images/game2.jpg",
                buttonText: "Play Now",
                price: 0,
            },
            {
                title: "Coloring Adventure",
                image: "images/game3.jpg",
                buttonText: "Play Now",
                price: 0,
            },
            {
                title: "Shape Sorter",
                image: "images/game4.jpg",
                buttonText: "Play Now",
                price: 0,
            },
            {
                title: "Maze Challenge",
                image: "images/game5.jpg",
                buttonText: "Play Now",
                price: 0,
            },
            {
                title: "Building Blocks",
                image: "images/game6.jpg",
                buttonText: "Play Now",
                price: 0,
            },
        ],
    },
    {
        category: "Educational Books",
        items: [
            {
                title: "Learning Colors",
                image: "images/book1.jpg",
                buttonText: "Read More",
                price: 4.99,
            },
            {
                title: "Numbers & Counting",
                image: "images/book2.jpg",
                buttonText: "Read More",
                price: 5.99,
            },
            {
                title: "Alphabet Book",
                image: "images/book3.jpg",
                buttonText: "Read More",
                price: 6.99,
            },
            {
                title: "Animals Around Us",
                image: "images/book4.jpg",
                buttonText: "Read More",
                price: 7.99,
            },
            {
                title: "My First Words",
                image: "images/book5.jpg",
                buttonText: "Read More",
                price: 8.99,
            },
            {
                title: "Shapes & Patterns",
                image: "images/book6.jpg",
                buttonText: "Read More",
                price: 9.99,
            },
        ],
    },
    {
        category: "Newborn Baby Sleeping Tools",
        items: [
            {
                title: "White Noise Machine",
                image: "images/white-noise-machine.jpg",
                buttonText: "View Details",
                price: 29.99,
            },
            {
                title: "Baby Blanket",
                image: "images/baby-blanket.jpg",
                buttonText: "View Details",
                price: 14.99,
            },
            {
                title: "Baby Crib",
                image: "images/baby-crib.jpg",
                buttonText: "View Details",
                price: 99.99,
            },
        ],
    },
];

let cart = [];
let favoriteItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];

function createCardComponent(title, image, buttonText, price) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = image;
    img.alt = title;

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = title;

    const button = document.createElement("button");
    button.textContent = buttonText;
    button.onclick = () => showMore(title);

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.onclick = () => addToCart(title, price);

    const favoriteButton = document.createElement("i");
    favoriteButton.classList.add("fa", "fa-heart-o");
    favoriteButton.onclick = () => favoriteItem(title);

    if (favoriteItems.includes(title)) {
        favoriteButton.classList.remove("fa-heart-o");
        favoriteButton.classList.add("fa-heart");
    }

    card.appendChild(img);
    card.appendChild(cardTitle);
    card.appendChild(button);
    card.appendChild(addToCartButton);
    card.appendChild(favoriteButton);

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
            const card = createCardComponent(item.title, item.image, item.buttonText, item.price);
            cardContainer.appendChild(card);
        });

        categoryDiv.appendChild(cardContainer);
        categoriesSection.appendChild(categoryDiv);
    });
}

function showMore(item) {
    alert(`More information about ${item} will be displayed here!`);
}

function addToCart(title, price) {
    cart.push({ title, price });
    updateCartCount();
}

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.textContent = cart.length;
}

function favoriteItem(title) {
    const favoriteButton = document.querySelector(`.card h3:contains(${title}) + button + button + i`);
    if (favoriteItems.includes(title)) {
        favoriteItems = favoriteItems.filter((item) => item !== title);
        favoriteButton.classList.remove("fa-heart");
        favoriteButton.classList.add("fa-heart-o");
    } else {
        favoriteItems.push(title);
        favoriteButton.classList.remove("fa-heart-o");
        favoriteButton.classList.add("fa-heart");
    }
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
}

function displayCart() {
    const cartSection = document.getElementById("cart-section");
    cartSection.style.display = "block";

    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";

    cart.forEach((item) => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${item.title} - $${item.price}`;
        cartList.appendChild(cartItem);
    });

    const totalCost = cart.reduce((acc, item) => acc + item.price, 0);
    const totalCostElement = document.getElementById("total-cost");
    totalCostElement.textContent = `Total: $${totalCost.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", displayCategories);

document.getElementById("cart-icon").addEventListener("click", displayCart);

document.getElementById("checkout-button").addEventListener("click", () => {
    alert("Checkout successful!");
    cart = [];
    updateCartCount();
    displayCart();
});