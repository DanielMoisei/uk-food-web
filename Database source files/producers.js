class Producer {
  constructor(name, description, isFavourite, images, values, logo) {
    this.name = name;
    this.description = description;
    this.isFavourite = isFavourite;
    this.images = images;
    this.values = values;
    this.logo = logo;
  }
}


const producer = [

  { "name": "Cake Factory",
    "description": "We make the best cakes west of Hamptonfordshire. Our shop only uses locally sourced ingredients, supporting the small business owners of our country. Each time you buy from us, a small percentage of your purchase goes to one of our supported causes (for more information on that, please visit our website).",
    "isFavourite": true,
    // "images": ["Resources/Producers/Images/Cake/Cake 1.jpg", "Resources/Producers/Images/Cake/Cake 2.jpg", "Resources/Producers/Images/Cake/Cake 3.jpg", "Resources/Producers/Images/Cake/Cake 4.jpg", "Resources/Producers/Images/Cake/Cake 5.jpg", "Resources/Producers/Images/Cake/Cake 6.jpg", "Resources/Producers/Images/Cake/Cake 7.jpg", "Resources/Producers/Images/Cake/Cake 8.png", "Resources/Producers/Images/Cake/Cake 9.jpg", "Resources/Producers/Images/Cake/Cake 10.jpg", "Resources/Producers/Images/Cake/Cake 11.jpg"],
    "values": ["Resources/Values/Value Icon 1.png", "Resources/Values/Value Icon 3.png"],
    "logoSmallURL": "Resources/Producers/Cake small.jpg",
    "logoBigURL": "Resources/Producers/Cake Factory.jpg",
},

  { "name": "Chilli Fire",
    "description": "Have you ever wanted to try out the flavours of India? Now's your chance to get your hands on authentic spices and chilli sourced directly from our sister company back home in New Delhi. We've got the widest range of chilli in the entire United Kingdom, so head to one of our 78 stores and let yourself be amazed.",
    "isFavourite": false,
    // "images": ["Resources/Producers/Images/Chilli/Chilli 1.jpg", "Resources/Producers/Images/Chilli/Chilli 2.jpg", "Resources/Producers/Images/Chilli/Chilli 3.jpg", "Resources/Producers/Images/Chilli/Chilli 4.jpg", "Resources/Producers/Images/Chilli/Chilli 5.jpg", "Resources/Producers/Images/Chilli/Chilli 6.jpg", "Resources/Producers/Images/Chilli/Chilli 7.jpg", "Resources/Producers/Images/Chilli/Chilli 8.jpg", "Resources/Producers/Images/Chilli/Chilli 9.jpg", "Resources/Producers/Images/Chilli/Chilli 10.jpg"],
    "values": ["Resources/Values/Value Icon 2.png", "Resources/Values/Value Icon 4.png"],
    "logoSmallURL": "Resources/Producers/Chilli small.jpg",
    "logoBigURL": "Resources/Producers/Chilli fire.jpg"
  },

  { "name": "Conker Spirits",
    "description": "Other companies will try to sell you on their products with snazzy slogans and famous actors. Not us. Our product speaks for itself. We guarantee you won't regret trying out anything from our range of spirits and hard drinks.",
    "isFavourite": false,
    // "images": ["Resources/Producers/Images/Gin/Gin 1.jpg", "Resources/Producers/Images/Gin/Gin 2.jpg", "Resources/Producers/Images/Gin/Gin 3.jpg", "Resources/Producers/Images/Gin/Gin 4.jpg", "Resources/Producers/Images/Gin/Gin 5.png", "Resources/Producers/Images/Gin/Gin 6.jpg", "Resources/Producers/Images/Gin/Gin 7.jpg"],
    "values": ["Resources/Values/Value Icon 1.png", "Resources/Values/Value Icon 3.png", "Resources/Values/Value Icon 5.png"],
    "logoSmallURL": "Resources/Producers/Conker Logo.jpg",
    "logoBigURL": "Resources/Producers/Conker Spirits.jpg"
  },

  { "name": "Statesman Whisky",
    "description": "Statesman. Simply the best whisky money can buy. Visit our website for a full tour and history of our company and products.",
    "isFavourite": true,
    // "images": ["Resources/Producers/Images/Whisky/Whisky 1.jpg", "Resources/Producers/Images/Whisky/Whisky 2.jpg", "Resources/Producers/Images/Whisky/Whisky 3.jpg", "Resources/Producers/Images/Whisky/Whisky 4.jpg", "Resources/Producers/Images/Whisky/Whisky 5.jpg", "Resources/Producers/Images/Whisky/Whisky 6.jpg", "Resources/Producers/Images/Whisky/Whisky 7.jpg", "Resources/Producers/Images/Whisky/Whisky 8.jpg", "Resources/Producers/Images/Whisky/Whisky 9.jpg", "Resources/Producers/Images/Whisky/Whisky 10jpg"],
    "values": ["Resources/Values/Value Icon 2.png", "Resources/Values/Value Icon 4.png", "Resources/Values/Value Icon 5.png"],
    "logoSmallURL": "Resources/Producers/Whisky small.png",
    "logoBigURL": "Resources/Producers/Statesman Whisky.jpg"
  },

  { "name": "Tom's Bakery",
    "description": "For your everyday bread and dough needs.",
    "isFavourite": false,
    // "images": ["Resources/Producers/Images/Whisky/Whisky 1.jpg", "Resources/Producers/Images/Whisky/Whisky 2.jpg", "Resources/Producers/Images/Whisky/Whisky 3.jpg", "Resources/Producers/Images/Whisky/Whisky 4.jpg", "Resources/Producers/Images/Whisky/Whisky 5.jpg", "Resources/Producers/Images/Whisky/Whisky 6.jpg", "Resources/Producers/Images/Whisky/Whisky 7.jpg", "Resources/Producers/Images/Whisky/Whisky 8.jpg", "Resources/Producers/Images/Whisky/Whisky 9.jpg", "Resources/Producers/Images/Whisky/Whisky 10jpg"],
    "values": ["Resources/Values/Value Icon 1.png", "Resources/Values/Value Icon 3.png", "Resources/Values/Value Icon 4.png"],
    "logoSmallURL": "Resources/Producers/Bread small.jpg",
    "logoBigURL": "Resources/Producers/Bread.jpg"
  }
]



function createFeaturedProducer() {
  var producerDiv = document.createElement('div');
  producerDiv.id = 'producer-div' + i;
  producerDiv.classList.add('producer-div-style');
  document.getElementById('producers-container').appendChild(producerDiv);
}

function addFeaturedProducerContent() {
  var producerImage = document.createElement('img');
  var producerTitle = document.createElement('h2');
  producerImage.src = producer[i].logoBigURL;
  producerTitle.innerHTML = producer[i].name;
  producerTitle.id = 'producerId' + i;
  document.getElementById('producer-div' + i).appendChild(producerImage);
  document.getElementById('producer-div' + i).appendChild(producerTitle);
  document.getElementById('producerId' + i).addEventListener("click",
      function clickTest() {
      console.log(producerTitle.innerHTML);
    });
}


for (var i = 0; i < producer.length; i++) {
    createFeaturedProducer();
    addFeaturedProducerContent();
}

$(document).ready(function(){
  $('#producers-container').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: false,
    variableWidth: true,
    draggable: false,
    accessibility: false,
    centerMode: true,
    nextArrow: '<img class="slides-arrow" src="Resources/Right arrow.svg">',
    prevArrow: '<img class="slides-arrow" src="Resources/Left arrow.svg">'
  });
});
