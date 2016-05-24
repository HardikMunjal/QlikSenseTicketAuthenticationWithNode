var app = angular.module('myApp',  []);
app.controller('myCtrl', function($scope, $http) {
	$scope.firstName  = "Hardik";
	$scope.lastName = "Munjal";

    $scope.$emit('LOAD')
        $http.jsonp('http://filltext.com/?rows=10&delay=5&fname={firstName}&callback=JSON_CALLBACK')
        .success(function(data){
           //  x(20000);
           // $scope.$emit('UNLOAD')
        })
    
    var x= function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   
            
   }
}

// x(20000);


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
    // $scope.counter = 50;
    // $scope.onTimeout = function(){
    //     $scope.counter--;
    //     mytimeout = $timeout($scope.onTimeout,1000);
    // }
    // var mytimeout = $timeout($scope.onTimeout,1000);
    
          $scope.counter = 45;
    $scope.onTimeout = function(){
        $scope.counter--;
        mytimeout = $timeout($scope.onTimeout,1000);
        if($scope.counter==0){$scope.$emit('UNLOAD')}
    }
    var mytimeout = $timeout($scope.onTimeout,1000);
            //x(20000);
          // $scope.$emit('UNLOAD')
        $scope.$on('LOAD',function(){$scope.loading=true});
        $scope.$on('UNLOAD',function(){$scope.loading=false});
    }])