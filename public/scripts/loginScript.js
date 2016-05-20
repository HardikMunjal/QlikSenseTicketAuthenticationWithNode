var app = angular.module('myApp',  []);
app.controller('myCtrl', function($scope, $http) {
	$scope.firstName  = "Hardik";
	$scope.lastName = "Munjal";

	$scope.myFunc = function () {
		$scope.myTxt = "You clicked submit!";


     $http.get("http://localhost/loginapi")
    .then(function(response) {
        $scope.myWelcome = response.data;
    });

   
     console.log($scope.username);
     var formData = {};
     formData.username = $scope.username;
     formData.password = $scope.password;


// $http.post("/loginapi", formData).success(function(data, status) {
// 	$scope.loginResponse = data.message;
// 	//uncoment server/hub and comment localhost/authenticate
// 	location.href = "http://10.2.5.160/hclnode/hub/";
//     //location.href = "http://localhost:4000/authenticate";
// })
}

});
