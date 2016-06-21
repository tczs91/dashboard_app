'use strict';
/**
 * @ngdoc app
 * @name dashboard
 * @description
 * # dashboard
 *
 * Main module of the application. Define the routing architecture for the app
 */

 var dashApp = angular.module('dashApp', ['ui.router']);



 dashApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
    // INDEX STATES AND NESTED VIEWS ========================================
        //login view
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html'
        })
        //root view
        .state('root', {
            url: '/root',
            templateUrl: 'templates/root.html'
        })
        //root.work view
        .state('root.work', {
            url: '/list',
            templateUrl: 'templates/work.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        //root.overview view
        .state('root.overview', {
            url: '/overview',
            templateUrl: 'templates/overview.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        //root.producer view
        .state('root.producer', {
            url: '/producer',
            templateUrl: 'templates/producer.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        //root.contact view
        .state('home.contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html'
        })
});
// dashApp.controller('scotchController', function($scope) {
//     $scope.message = 'test';
//     $scope.scotches = [{
//         name: 'Macallan 12',
//         price: 50
//     }, {
//         name: 'Chivas Regal Royal Salute',
//         price: 10000
//     }, {
//         name: 'Glenfiddich 1937',
//         price: 20000
//     }];
// });
