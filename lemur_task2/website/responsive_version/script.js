// Card data array to hold information about each card
const categories = [
    {
        category: "Healthy Recipes",
        items: [
            { title: "Fruit Smoothie", image: "images/recipe1.jpg", buttonText: "See Recipe" },
            { title: "Veggie Wrap", image: "images/recipe2.jpg", buttonText: "See Recipe" }
        ]
    },
    {
        category: "Children's Clothing",
        items: [
            { title: "Summer Dress", image: "images/clothing1.jpg", buttonText: "View Details" },
            { title: "Winter Jacket", image: "images/clothing2.jpg", buttonText: "View Details" }
        ]
    },
    {
        category: "Games for Children",
        items: [
            { title: "Memory Match", image: "images/game1.jpg", buttonText: "Play Now" },
            { title: "Puzzle Fun", image: "images/game2.jpg", buttonText: "Play Now" }
        ]
    },
    {
        category: "Educational Books",
        items: [
            { title: "Learning Colors", image: "images/book1.jpg", buttonText: "Read More" },
            { title: "Numbers & Counting", image: "images/book2.jpg", buttonText: "Read More" }
        ]
    }
];

// Function to create a card component
function createCardComponent(title, image, buttonText) {
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

    card.appendChild(img);
    card.appendChild(cardTitle);
    card.appendChild(button);

    return card;
}

// Function to display all categories with cards
function displayCategories() {
    const categoriesSection = document.getElementById("categories");

    categories.forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");
        categoryDiv.id = category.category.replace(/\s+/g, '-');

        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = category.category;

        categoryDiv.appendChild(categoryTitle);

        // Add cards to the category
        category.items.forEach(item => {
            const card = createCardComponent(item.title, item.image, item.buttonText);
            categoryDiv.appendChild(card);
        });

        categoriesSection.appendChild(categoryDiv);
    });
}

// Show more information (for demonstration)
function showMore(item) {
    alert(`More information about ${item} will be displayed here!`);
}

// Initialize categories on page load
document.addEventListener("DOMContentLoaded", displayCategories);
