class Category {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }
}

const category = [

  { "name": "Chocolate",
    "imageURL": "Resources/Categories/Chocolate.jpg"
},

  { "name": "Gin",
    "imageURL": "Resources/Categories/Gin.jpg"
},

  { "name": "Soft drinks",
    "imageURL": "Resources/Categories/Soft drinks.jpg"
},

  { "name": "Cakes",
    "imageURL": "Resources/Categories/Cakes.png"
},

  { "name": "Chilli & sauces",
    "imageURL": "Resources/Categories/Chilli sauces.jpg"
},

  { "name": "Whisky",
    "imageURL": "Resources/Categories/Whisky.jpg"
},

  { "name": "Fresh vegetables",
    "imageURL": "Resources/Categories/Fresh vegetables.png"
},

  { "name": "Bakery",
    "imageURL": "Resources/Categories/Bakery.jpg"
},
]

function createCategoryCard() {
  var cardContainer = document.createElement('div');
  cardContainer.id = 'category-card' + i;
  cardContainer.classList.add('category-card');
  document.getElementById('categories-container').appendChild(cardContainer);
}

function addCategoryContent() {
  var cardImage = document.createElement('img');
  var cardTitle = document.createElement('h2');
  cardImage.src = category[i].imageURL;
  cardTitle.innerHTML = category[i].name;
  document.getElementById('category-card' + i).appendChild(cardImage);
  document.getElementById('category-card' + i).appendChild(cardTitle);
}

for (var i = 0; i < category.length; i++) {
    createCategoryCard();
    addCategoryContent();
  }
