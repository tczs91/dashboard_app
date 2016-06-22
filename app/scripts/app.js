'use strict';
/**
 * @ngdoc app
 * @name dashboard
 * @description
 * # dashboard
 *
 * Main module of the application. Define the routing architecture for the app
 */
var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/root/work');
    $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
        .state('root', {
            url: '/root',
            templateUrl: 'templates/root.html'
        })
    
        .state('root.overview', {
            url: '/overview',
            templateUrl: 'templates/overview.html'
        })
    
        .state('root.work', {
            url: '/work',
            templateUrl: 'templates/work.html',
            controller:'workController'
        })
    
        .state('root.producer', {
            url: '/producer',
            templateUrl: 'templates/producer.html'
        })
        .state('root.contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html'
        })
});
