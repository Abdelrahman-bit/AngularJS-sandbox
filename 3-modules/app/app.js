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
	directives = [
		{ name: "ng-app", description: "app module tells Angular to bootstrap the application" },
		{ name: "ng-Init", description: "initializes the Angular application, and evaluates the expression" },
		{ name: "ng-repeat", description: "repeats HTML elements for each item in a collection" },
		{ name: "ng-model", description: "binds the value of HTML controls to application data. Like text inputs" },
	];
	// $scope.directives = directives;
	// $scope.name = "John Doe";
	Object.assign($scope, {
		directives,
		name: "John Doe",
	});
}]);
