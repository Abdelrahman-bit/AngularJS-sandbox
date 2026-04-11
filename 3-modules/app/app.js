const app = angular.module("firstApp", []);
// the array is for minification purposes, to prevent the names of the dependencies from being changed
// You can think of a module as a container for all our components: like (controllers, configs, methods)

app.config(function () {
	const time = Date.now();
	// a config is a function that fire before the app is fully loaded, so we can use it to set up some stuff before the app is ready
	// thing like routing, or setting up some global variables, or even setting up some third party libraries
	console.log("config fired");
	console.log(Date.now() - time);
});

app.run(function () {
	var time = Date.now();
	// a run is a function that fire after the app is fully loaded, so we can use it to set up some stuff after the app is ready
	// thing like setting up some global variables, or even setting up some third party libraries
	console.log("run fired");
	console.log(Date.now() - time);
});

app.controller("firstController", [ '$scope', ($scope) => {
	// a controller is a function that fire when the controller is loaded, so we can use it to set up some stuff when the controller is ready
	// thing like setting up some variables, or even setting up some third party libraries
	const directives = [
		{ name: "ng-app", description: "app module tells Angular to bootstrap the application" },
		{ name: "ng-Init", description: "initializes the Angular application, and evaluates the expression" },
		{ name: "ng-repeat", description: "repeats HTML elements for each item in a collection, syntax: 'name in names' and then use the variable name to access the item" },
		{ name: "ng-model", description: "binds the value of HTML controls to application data. Like text inputs" },
		{ name: "ng-include", description: "includes an external HTML file into the current HTML file" },
		{ name: "ng-show", description: "shows or hides an HTML element based on a condition" },
		{ name: "ng-hide", description: "shows or hides an HTML element based on a condition" },
		{ name: "ng-click", description: "binds a click event to an HTML element" },
	];

	
	// $scope.directives = directives;
	// $scope.name = "John Doe";
	Object.assign($scope, {
		directives,
		name: "John Doe",
	});
}]);

app.controller("secondController", [ '$scope', ($scope)=> {
	const grocery = [
		{ name: "Milk", price: 1.5, quantity: 2, inStock: true },
		{ name: "Bread", price: 2, quantity: 1, inStock: true },
		{ name: "Eggs", price: 0.5, quantity: 0, inStock: false },
		{ name: "Cheese", price: 3, quantity: 1, inStock: true },
		{ name: "Butter", price: 2, quantity: 0, inStock: false },
	]; 

	function removeItem(item){
		const index = grocery.indexOf(item);
		if(index > -1){
			grocery.splice(index, 1);
		}
	}

	Object.assign($scope, {
		grocery,
		removeItem,
	});
}])
