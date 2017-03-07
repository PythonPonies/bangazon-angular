'use strict';

let app = angular.module("Bangazon-Mobile", ["ngRoute"])
    .constant('apiUrl', "http://localhost:8000");

    angular.module('Bangazon-Mobile').config(
    [
        '$httpProvider',
        '$routeProvider',
        function($httpProvider, $routeProvider) {

          $httpProvider.defaults.xsrfCookieName = 'csrftoken';
          $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
          $httpProvider.defaults.withCredentials = true;

          $routeProvider
            .when('/', {
              controller: 'AuthController',
              templateUrl: '/app/view/home.html'
            })
            .when('/product-detail', {
              controller: 'ProductDetailController',
              templateUrl: '/app/view/product-detail.html'
            })
            .when('/login', {
              controller: 'AuthController',
              templateUrl: '/app/view/login.html'
            })
            .when('/sell-product', {
              controller: 'SellProductController',
              templateUrl: '/app/view/sell-product.html'
            })
            .when('/register', {
              controller: 'AuthController',
              templateUrl: '/app/view/register.html'
            })
            .when('/cart', {
              controller: 'CartController',
              templateUrl: '/app/view/cart.html'
            });

      }
    ]);

    angular.module('Bangazon-Mobile').factory('RootFactory', [
      "$http",
      "apiUrl",
      ($http, apiUrl) => {
        const httpGet = $http.get(apiUrl);

        return {
          getApiRoot () {
            return httpGet.then(res => res.data);
          }
        };
      }
    ]);




