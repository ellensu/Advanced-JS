angular.module("Todo", []).controller("TodoCtrl", function($scope) {
	$scope.newActivity = {};
	$scope.todoList = [
	{
		text:"look at cats", 
	},
	{
		text:"laala",
	},
	{
		text:"whassup"
	}
	];
	$scope.newTodo = function() {
		$scope.todoList.push($scope.newActivity)
		$scope.newActivity = {};
	}

	$scope.completeTodo = function(index) {
		$scope.todoList[index].done = $scope.todoList[index].done;
	}
}); //only the first time!!

//we're using the angular library
