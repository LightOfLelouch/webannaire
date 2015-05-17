'use strict';

/**
 * @ngdoc overview
 * @name pooIhmExemplesApp
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */
angular
  .module('pooIhmExemplesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/users' , {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/users/:userId&:toDo', {
        templateUrl: 'views/Users/show.html',
        controller: 'UsersCtrl'
      })
      .when('/userss/:userName&:userSurname&:toDo', {
        templateUrl: 'views/Users/show.html',
        controller: 'UsersCtrl'
      })
      .when('/usersss/:userName&:userSurname&:userId&:userEmail&:userWebsite&:userCreatedat&:userUpdatedat&:toDo', {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/userssss/:userSeek&:toDo', {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/usersssss/:userId&:userRole&:userProject&:toDo', {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/projects' , {
        templateUrl: 'views/Projects/list.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:projectId&:toDo', {
        templateUrl: 'views/Projects/show.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projectss/:projectName&:projectDescription&:toDo', {
        templateUrl: 'views/Projects/show.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projectsss/:projectTitle&:projectId&:projectDescription&:projectYear&:projectCreatedat&:projectUpdatedat&:toDo', {
        templateUrl: 'views/Projects/show.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projectssss/:projectSeek&:toDo', {
        templateUrl: 'views/Users/list.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projectsssss/:projectId&:projectRole&:projectUser&:toDo', {
        templateUrl: 'views/Users/list.html',
        controller: 'ProjectsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
