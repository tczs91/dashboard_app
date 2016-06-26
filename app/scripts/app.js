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
            templateUrl: 'templates/login.html',
            controller: 'loginController'
        })
        //root view
        .state('root', {
            url: '/root',
            templateUrl: 'templates/root.html',
            controller: 'rootController'
        })
        //root.work view
        .state('root.work', {
            url: '/work',
            templateUrl: 'templates/work.html',
            controller: 'workController'
        })
        //root.work.delete view
        .state('root.work.delete', {
            templateUrl: 'templates/confirmBox.html',
//            controller:'workController'
        })
        //root.overview view
        .state('root.overview', {
            url: '/overview',
            templateUrl: 'templates/overview.html',
        })
        //root.producer view
        .state('root.producer', {
            url: '/producer',
            templateUrl: 'templates/producer.html',
        })
        //root.contact view
        .state('root.contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html'
        })
        //404 not found view
        .state('notfound', {
            url: '/notfound',
            templateUrl: 'templates/404.html'
        })
});
