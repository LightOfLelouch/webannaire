'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('ProjectsCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
      .success(function(data) {
        $scope.projects = data.data;
      });

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId + "/Roles")
      .success(function(dota) {
        $scope.projectss = dota.data;
      });

    if($routeParams.projectId && ( $routeParams.toDo == "see" ) ) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId)
        .success(function(data) {
          if (data.status == "success") {
            $scope.currentProjects = data.data;
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects' + $routeParams.projectId + '' )
              .success(function(data) {
                $scope.projects = data.data;
              });


          }
        });
    }

    if(($routeParams.projectId) && ( $routeParams.toDo == "del" ) ) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId)
        .success(function(data) {
          if (data.status == "success") {
          }
        });
    }








    if( ($routeParams.toDo == "put") ) {

      //$routeParams.userName = "Pighetti"
      //$routeParams.userSurname = "Romaric"
      //$routeParams.userEmail = null
      //$routeParams.userId = 3316
      //$routeParams.userWebsite = "http://users.polytech.fr/~pighetti"
      //$routeParams.userCreateat = "2015-05-15T10:30:56.573Z"
      //$routeParams.userUpdateat = "2015-05-15T10:31:56.573Z"

      $scope.awesomeThings = {
        "id" :  $routeParams.projectId ,
        "title" :   $routeParams.projectTitle ,
        "description" :   $routeParams.projectDescription ,
        "year" :   $routeParams.projectYear ,
        "createdAt" :   $routeParams.projectCreatedat   ,
        "updatedAt" :   $routeParams.projectUpdatedat
      };

      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId , $scope.awesomeThings  )
        .success(function(data) {
          if (data.status == "success") {
          }
        });
    }

    if ( ($routeParams.toDo == "new")  ) {
      //$scope.users = "";
      //  $routeParams.projectName = "test"
      //$routeParams.userSurname = "test1"

      //$routeParams.userName = '"' + $routeParams.userName + '"'
      //$routeParams.userSurname = '"' + $routeParams.userSurname + '"'

      $scope.awesomeThings = {
        "title" :  $routeParams.projectName  ,
        "description" :  $routeParams.projectDescription
        //"name" :  +  $routeParams.userName  ,
        //"surname" :  + $routeParams.userSurname
      };
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' , $scope.awesomeThings )
        .success(function(data) {
          if (data.status == "success") {
          }
        });
    }


    if( ($routeParams.toDo == "seek") && ($routeParams.projectSeek)) {

      //window.location="#/users/" + $routeParams.projectSeek  + "&see";
      //for ( var x in $scope.users )
      //  window.location="#/users/" + x +"1&see";
      //if (x.name == $routeParams.userSeek )
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
        .success(function(data) {
          $scope.projects = data.data;

          for(var i=0;i<$scope.projects.length;i++){
            var obj = $scope.projects[i];
            for(var key in obj){
              //var attrName = key;
              var attrValue = obj[key];
              if ( attrValue == $routeParams.projectSeek )
                window.location="#/projects/" + obj.id  + "&see";
            }
          }
          // window.location="#/users/" + $routeParams.userSeek + $scope.users.length  + "&see";

        });
      //document.write( $scope.users);
      //
      //{
      //window.location="#/users/" + $routeParams.userSeek + $scope.users[x]  + "&see";
      //window.location="#/users/" + x.id + "&see";
      //}
    }





    if ( ($routeParams.projectId) && ($routeParams.projectRole) && ($routeParams.projectUser) && ($routeParams.toDo == "link")  ) {
      //$scope.users = "";
      //$routeParams.userName = "test"
      //$routeParams.userSurname = "test1"

      //$routeParams.userName = '"' + $routeParams.userName + '"'
      //$routeParams.userSurname = '"' + $routeParams.userSurname + '"'

      $scope.awesomeThings = {
        "name" :  $routeParams.projectRole  ,
        "UserId" :  $routeParams.projectUser ,
        "ProjectId" :  $routeParams.projectId
        //"name" :  +  $routeParams.userName  ,
        //"surname" :  + $routeParams.userSurname
      };
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' , $scope.awesomeThings )
        .success(function(data) {
          if (data.status == "success") {
          }
        });
    }


  }]);
