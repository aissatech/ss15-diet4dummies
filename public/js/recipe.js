(function(){
    var app = angular.module('recipe-directives', []);

    //directive for recipe tabs
    //all the tabs in a directive
    app.directive('recipeTabs', function(){
        return {
            restrict: 'E',
            templateUrl: 'recipe-tabs.html',
            controller: function(){ //we moved also the tabs controller here
                this.tab = 1;

                // setTab(), tab was clicked
                this.setTab = function(newValue){
                    this.tab = newValue;
                };
                // isSet(), tab is active
                this.isSet = function(tabName){
                    return this.tab === tabName;
                };
            },
            controllerAs: 'tab'
        };
    });

    //directive for recipe gallery
    app.directive('recipeGallery', function(){
        return {
            restrict: 'E',
            templateUrl: 'recipe-gallery.html',
            controller: function(){
                this.current = 0;
                this.setCurrent = function(imageNumber){
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });


    //directive for recipe descriptiuon
    app.directive('recipeDescription', function(){
        return {
            restrict: 'E', //directive as element
            templateUrl: 'recipe-description.html'
        };
    });

    //directive for recipe specs
    app.directive('recipeIngredients', function(){
        return {
            restrict: 'A', //directive as attribute
            templateUrl: 'recipe-ingredients.html'
        };
    });
	
	 //directive for recipe preparation
    app.directive('recipePreparation', function(){
        return {
            restrict: 'E', //directive as element
            templateUrl: 'recipe-preparation.html'
        };
    });

    //directive for recipe reviews
    app.directive('recipeReviews', function(){
        return {
            restrict: 'E', //directive as element
            templateUrl: 'recipe-reviews.html'
        };
    });

    //directive for recipe specs
    app.directive('recipeSpecs', function(){
        return {
            restrict: 'A', //directive as attribute
            templateUrl: 'recipe-specs.html'
        };
    });
})();