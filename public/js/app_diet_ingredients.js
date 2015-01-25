(function() {

    // all about recipe  moved on recipe.js
    // and create dependency on the new module cook-book
    var app = angular.module('diet4dummies', ['cookbook-recepies']);


    //cookbook controller
    app.controller('CookbookController', function(){

        this.recepies = eats;

    });


    //review controller
    app.controller('ReviewController', function(){
        //inizialise review with an empty object
        this.review = {};
        //add review on the reviews array of the recipe
        this.addReview = function(recipe){
            this.review.createdOn = Date.now();
            recepies.reviews.push(this.review);
            //reset the review to an empty object after it's been added to recipe.reviews
            this.review = {};
        };
    });

    //array eats
    var eats = [
        {
            name: 'Macedonia',
            description: "Mix of fruits",
            preparation: "Mix various fruits like apple, pear, banaba, strawberries etc. Add sugar if you need.",
            cost: 10.50,
            difficulty: 1,
            calories: 440,
            ingredients: [{
                name: "apple",
                quantity: 50,
                calories: 50
            }, {
                name: "coconut",
                quantity: 40,
                calories: 100
            }, {
                name: "lemon",
                quantity: 20,
                calories: 30
            }, {
                name: "mango",
                quantity: 50,
                calories: 30
            }, {
                name: "plums",
                quantity: 30,
                calories: 80
            }, {
                name: "pomegranate",
                quantity: 70,
                calories: 40
            }, {
                name: "raspberries",
                quantity: 20,
                calories: 80
            }, {
                name: "watermelon",
                quantity: 50,
                calories: 30
            }],
            images: [
                "images/apple.jpg",
                "images/coconut.jpg",
                "images/lemon.jpg",
                "images/mango.jpg",
                "images/plums.jpg",
                "images/pomegranate.jpg",
                "images/raspberries.jpg",
                "images/watermelon.jpg"
            ],
            reviews: [{
                stars: 5,
                body: "I love this!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This macedonia sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }]
        }, {
            name: 'Salad',
            description: "Fresh salad",
            preparation: "The fresh salad is an excellent nutrient for who wants to get slim",
            cost: 8.20,
            difficulty: 1,
            calories: 440,
            ingredients: [{
                name: "carrot",
                quantity: 50,
                calories: 50
            }, {
                name: "cauliflower",
                quantity: 40,
                calories: 100
            }, {
                name: "capsicum",
                quantity: 20,
                calories: 30
            }, {
                name: "eggs",
                quantity: 30,
                calories: 80
            }, {
                name: "maize",
                quantity: 50,
                calories: 30
            }, {
                name: "nuts",
                quantity: 70,
                calories: 40
            }, {
                name: "onions",
                quantity: 20,
                calories: 80
            }, {
                name: "tomato",
                quantity: 50,
                calories: 30
            }],
            images: [
                "images/carrot.jpg",
                "images/cauliflower.jpg",
                "images/capsicum.jpg",
                "images/eggs.jpg",
                "images/maize.jpg",
                "images/nuts.jpg",
                "images/onions.jpg",
                "images/tomato.jpg"
            ],
            reviews: [{
                stars: 5,
                body: "I love this!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This salad sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }]
        }
    ];
})();
