var helloAngular = angular.module("HelloAngular", []); //only the first time!!

//we're using the angular library

helloAngular.controller("HelloCtrl", function($scope) {
	$scope.logText = function() {
		console.log($scope.myText);
		$scope.myText += "!"
	}


});