// Sample JSON data (replace this with your actual data)
const recipes = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
    // ... other recipe objects
];

// Function to generate a recipe card HTML element
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.classList.add('recipe-card');

    const image = document.createElement('img');
    image.src = recipe.imageSrc;
    image.alt = `Image of ${recipe.name}`;
    card.appendChild(image);

    const type = document.createElement('p');
    type.textContent = `${recipe.type}`;
    card.appendChild(type);
      
    const div1 = document.createElement("div");
    div1.id = "card-div1";

    const title = document.createElement('h2');
    title.textContent = recipe.name;
    div1.appendChild(title);

    const ratingdiv = document.createElement("div");
    ratingdiv.id = "ratingdiv";
    const starimage = document.createElement('img');
    starimage.src = "images/star.png";

    const rating = document.createElement('p');
    rating.textContent = `${recipe.rating}`;
    ratingdiv.appendChild(starimage);
    ratingdiv.appendChild(rating);

    div1.appendChild(ratingdiv);

    card.appendChild(div1);

    const div2 = document.createElement("div"); 
    div2.id = "card-div2";

   
    const time = document.createElement('p');
    time.textContent = `${recipe.time}`;
    div2.appendChild(time);
    
    

    const likeButton = document.createElement('button');
    likeButton.classList.add('like-button');
  
    likeButton.textContent = recipe.isLiked ? 'Liked' : 'Like';
    likeButton.addEventListener('click', () => {
        recipe.isLiked = !recipe.isLiked;
        
        likeButton.textContent = recipe.isLiked ? 'Liked' : 'Like';
        // You can also update UI or perform other actions when liking a recipe
    });
    div2.appendChild(likeButton);

    card.appendChild(div2);
    return card;
}

// Function to update the displayed recipe cards
function updateRecipeCards(recipesToShow) {
    const recipeContainer = document.querySelector('.recipe-container');
    recipeContainer.innerHTML = ''; // Clear the container

    recipesToShow.forEach(recipe => {
        const card = createRecipeCard(recipe);
        recipeContainer.appendChild(card);
    });
}

// Initial display of all recipes
updateRecipeCards(recipes);

// Event listeners for filtering and search
const searchInput = document.querySelector('#search-input');
const showAllButton = document.querySelector('#show-all');
const showVegButton = document.querySelector('#show-veg');
const showNonVegButton = document.querySelector('#show-non-veg');
const ratingAbove = document.querySelector('#rating-above');
const ratingBelow = document.querySelector('#rating-below');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
    updateRecipeCards(filteredRecipes);
});


showAllButton.addEventListener('click', () => {
    updateRecipeCards(recipes);
});


showVegButton.addEventListener('click', () => {
    const vegRecipes = recipes.filter(recipe => recipe.type === 'veg');
    updateRecipeCards(vegRecipes);
});


showNonVegButton.addEventListener('click', () => {
    const nonVegRecipes = recipes.filter(recipe => recipe.type === 'non-veg');
    updateRecipeCards(nonVegRecipes);
});

ratingAbove.addEventListener('change',() => {
    const rateAbove = recipes.filter(recipe => recipe.rating >= '4');
    updateRecipeCards(rateAbove);
});

ratingBelow.addEventListener('change',() => {
    const rateBelow = recipes.filter(recipe => recipe.rating < '4');
    updateRecipeCards(rateBelow);
});


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
// const mobileMenuButton = document.querySelector('#mobile-menu-button');
// const mobileDrawer = document.querySelector('#mobile-drawer');


// mobileMenuButton.addEventListener('click', () => {
//     mobileDrawer.classList.toggle('hidden');
// });
// const recipeContainer = document.querySelector('.recipe-container');

// recipes.forEach(recipe => {
//     const card = document.createElement('div');
//     card.classList.add('recipe-card');

//     // Create and set content for various elements in the card

//     // Append the card to the recipe container
//     recipeContainer.appendChild(card);
// });
// const searchInput = document.querySelector('#search-input');

// searchInput.addEventListener('input', () => {
//     const searchTerm = searchInput.value.toLowerCase();

//     // Filter recipes based on the search term and update the display
//     const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));

//     // Update the recipe cards based on the filtered recipes
//     updateRecipeCards(filteredRecipes);
// });

// function updateRecipeCards(recipesToShow) {
//     // Clear the current recipe container
//     recipeContainer.innerHTML = '';

//     // Loop through and display the filtered recipes
//     recipesToShow.forEach(recipe => {
//         // Create and append cards for the filtered recipes
//     });
// }

