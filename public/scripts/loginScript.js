var app = angular.module('myApp',  []);
app.controller('myCtrl', function($scope, $http) {
	$scope.firstName  = "Hardik";
	$scope.lastName = "Munjal";

    $scope.$emit('LOAD')


$scope.myFunc = function () {
  $scope.myTxt = "You clicked submit!";


    console.log($scope.username);
    var formData = {};
    formData.username = $scope.username;
    formData.password = $scope.password;

    $http.post("/loginapi", formData).success(function(data, status) {
      $scope.loginResponse = data.message;
 	//uncoment server/hub and comment localhost/authenticate'
    console.log('data',data.message);
    if(data.message=='success'){
       location.href = "http://10.2.5.160/hclnode/single?appid=ec09cfab-eea7-4841-a8f2-7b007a5f47fc&obj=JvjzhN&opt=nointeraction&select=clearall";

   }
    // else
    // { location.href = "http://localhost:4000/";}
})
}

});

app.controller('appController',['$scope','$timeout',function($scope,$timeout){
  
    
    $scope.counter = 30;
    $scope.onTimeout = function(){
        $scope.counter--;
        mytimeout = $timeout($scope.onTimeout,1000);
        if($scope.counter==0){$scope.$emit('UNLOAD')}
    }
    var mytimeout = $timeout($scope.onTimeout,1000);
         
        $scope.$on('LOAD',function(){$scope.loading=true});
        $scope.$on('UNLOAD',function(){$scope.loading=false});
      }])