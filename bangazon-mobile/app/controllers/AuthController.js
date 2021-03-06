angular.module('Bangazon-Mobile').controller('AuthController',
function($scope, $http, $location) {

  $scope.user = {
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    shipping_address: ""
  };

  $scope.register = function() {
      $http({
        url: "http://localhost:8000/register/",
        method: "POST",
        withCredentials: false,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password,
          "email": $scope.user.email,
          "first_name": $scope.user.first_name,
          "last_name": $scope.user.last_name,
          "phone": $scope.user.phone,
          "shipping_address": $scope.user.shipping_address
        }
      }).then(
        res => {
          if (res.data.success === true) {
              $location.path('/');
          }
        },
        console.error
      );
  };


  $scope.login = function() {
      $http({
        url: "http://localhost:8000/login/",
        method: "POST",
        withCredentials: false,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password
        }
      }).then(
        res => {
          if (res.data.success === true) {
              $location.path('/');
          }
        },
        console.error
      );
  };

});