var app = angular.module('myApp',  []);
app.controller('myCtrl', function($scope, $http) {
	$scope.firstName  = "Hardik";
	$scope.lastName = "Munjal";

	$scope.myFunc = function () {
		$scope.myTxt = "You clicked submit!";


    //  $http.get("http://localhost:4000/authenticate?proxyRestUri=https%3a%2f%2fhclt-pc2713-3.hclt.corp.hcl.in%3a4243%2fqps%2fhclnode%2f&targetId=36104f78-0d06-44ed-8929-2efabd8cf554")
    // .then(function(response) {
    //     $scope.myWelcome = response;
    // });

   
     console.log($scope.username);
     var formData = {};
     formData.username = $scope.username;
     formData.password = $scope.password;


// $http.post("/loginapi", formData).success(function(data, status) {
// 	$scope.loginResponse = data.message;
// 	//uncoment server/hub and comment localhost/authenticate
     location.href = "http://10.2.5.160/hclnode/single?appid=ec09cfab-eea7-4841-a8f2-7b007a5f47fc&obj=JvjzhN&opt=nointeraction&select=clearall";
    // location.href = "http://localhost:4000/halfauthenticate";
// })
}

});
