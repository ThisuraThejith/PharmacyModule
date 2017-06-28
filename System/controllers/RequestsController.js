/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller("RequestsController", function($scope, $http){
    $scope.requests = [];
    alert("going to call");
    $http.get("/requests").then(function (response) {
        $scope.requests = response.data;
        alert("requests were taken successfully " + $scope.requests );
    }), function (response) {
        alert("requests failed");
    };



});

