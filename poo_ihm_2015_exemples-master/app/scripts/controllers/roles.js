'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('RolesCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Roles')
      .success(function(data) {
        $scope.roles = data.data;
      });

    if($routeParams.roleId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + $routeParams.roleId)
        .success(function(data) {
          if (data.status == "success") {
            $scope.currentRoles = data.data;
          }
        });
    }
  }]);
