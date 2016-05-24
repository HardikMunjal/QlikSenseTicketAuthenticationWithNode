var app = angular.module('visualApp',  []);
app.controller('visualCtrl', function($scope, $http, $sce) {
    $scope.firstName  = "Hardik";
    $scope.lastName = "Munjal";

    $scope.myFunc = function () {
        $scope.myTxt = "You clicked submit!";


     $http.get("http://localhost:4000/ticket")
    .then(function(response) {
        $scope.myWelcome = response.data.ticket.redirect;

    //      var str1 = "http://ghgh.com";
    // var str2 = "?";
    // var str3 = "ticket=6t76vghgjh";
    // var res = str1.concat(str2, str3);

         $scope.url = $sce.trustAsResourceUrl($scope.myWelcome);
    });



   
     console.log($scope.username);
     var formData = {};
     formData.username = $scope.username;
     formData.password = $scope.password;


// $http.post("/loginapi", formData).success(function(data, status) {
//  $scope.loginResponse = data.message;
//  //uncoment server/hub and comment localhost/authenticate
//  //location.href = "http://10.2.5.160/hclnode/single?appid=ec09cfab-eea7-4841-a8f2-7b007a5f47fc&obj=JvjzhN&opt=nointeraction&select=clearall";
    // location.href = "http://localhost:4000/halfauthenticate";
// })
}

});
