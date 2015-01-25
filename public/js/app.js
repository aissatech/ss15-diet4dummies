(function() {

    // all about recipe  moved on recipe.js
    // and create dependency on the new module cook-book
    var app = angular.module('diet4dummies', ['recipe-directives']);

    /*
    // cookbook controller using eats array
    app.controller('CookbookController', function(){

        this.recipes = eats;

    });
     */

	// cookbook controller using cookbook-recipes.json over http
	app.controller('CookbookController', ['$http', function($http){
		var cookbook = this;
		cookbook.recipes = [];
		$http.get('cookbook-recipes.json').success(function(data) {
			cookbook.recipes = data;
		});
	}]);


    //review controller
    app.controller('ReviewController', function(){
        //inizialise review with an empty object
        this.review = {};
        //add review on the reviews array of the recipe
        this.addReview = function(recipe){
            this.review.createdOn = Date.now();
            recipes.reviews.push(this.review);
            //reset the review to an empty object after it's been added to recipe.reviews
            this.review = {};
        };
    });
/*
    //array eats
    var eats = [
        {
            "name": "Macedonia",
            "description": "Mix of fruits",
            "preparation": "Mix various fruits like apple, pear, banana, strawberries etc. Add sugar if you need.",
            "cost": 10.50,
            "difficulty": 1,
            "kcal": 440,
            "images": [
                "images/macedonia.jpg",
                "images/apple.jpg",
                "images/banana.jpg",
                "images/coconut.jpg",
                "images/lemon.jpg",
                "images/mango.jpg",
                "images/plums.jpg",
                "images/pomegranate.jpg",
                "images/raspberries.jpg",
                "images/watermelon.jpg"
            ],
            "reviews": [{
                "stars": 5,
                "body": "I love this!",
                "author": "joe@example.org",
                "createdOn": 1397490980837
            }, {
                "stars": 1,
                "body": "This macedonia sucks.",
                "author": "tim@example.org",
                "createdOn": 1397490980837
            }]
        }, {
            "name": "Salad",
            "description": "Fresh salad",
            "preparation": "The fresh salad is an excellent nutrient for who wants to get slim",
            "cost": 8.20,
            "difficulty": 1,
            "kcal": 440,
            "images": [
                "images/salad.jpg",
                "images/carrot.jpg",
                "images/cauliflower.jpg",
                "images/capsicum.jpg",
                "images/eggs.jpg",
                "images/maize.jpg",
                "images/nuts.jpg",
                "images/olives.jpg",
                "images/onions.jpg",
                "images/tomato.jpg"

            ],
            "reviews": [{
                "stars": 5,
                "body": "I love this!",
                "author": "joe@example.org",
                "createdOn": 1397490980837
            }, {
                "stars": 1,
                "body": "This salad sucks.",
                "author": "tim@example.org",
                "createdOn": 1397490980837
            }]
        }
    ];*/
})();
