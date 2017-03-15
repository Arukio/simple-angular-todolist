/*
* Simple TODO List Dengan Angular
* By Irfan Marzuki
*/

// Inisialisasi Module
var app = angular.module('app', []);

//Inisialilasi Controller
app.controller('index', ['$scope', function($scope){

	//Todo di tampung dalam array json
	$scope.list = [{text:"Hallo00", "done":true},
					{text:"diaa", "done":false}
				];

	//Output Jumlah Todo
	$scope.total = function () {
		return $scope.list.length;
	};

	//Fungsi Tambah Data 
	$scope.tambah = function() {
		$scope.list.push({text: $scope.todo, done : false});
		$scope.todo = "";
	};

	//Reset berdasarkan Todo yang Done
	$scope.reset = function() {
		var tmp = $scope.list;
		$scope.list = [];
		angular.forEach(tmp, function(todo) {
			if (!todo.done) {$scope.list.push(todo);}
		});
	};
}]);