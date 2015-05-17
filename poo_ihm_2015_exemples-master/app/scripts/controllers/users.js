'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('UsersCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    //$scope.fct = function(){
    //  $scope.name;
    //  $scope.last;
    //  $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users',{"name":$scope.name,"surname":$scope.las})

    //}

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;
      });

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId + '/Roles' )
      .success(function(dota) {
        if (dota.status == "success") {
          $scope.userss = dota.data;
        }
      });

    if( ($routeParams.userId) && ( $routeParams.toDo == "see" ) ) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
      .success(function(data) {
        if (data.status == "success") {
          $scope.currentUser = data.data;
        }


        });


    }

    if(($routeParams.userId) && ( $routeParams.toDo == "del" ) ) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
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
        "id" :  $routeParams.userId ,
        "name" :   $routeParams.userName ,
        "surname" :   $routeParams.userSurname ,
        "email" :   $routeParams.userEmail ,
        "website" :   $routeParams.userWebsite ,
        "createdAt" :   $routeParams.userCreatedat   ,
        "updatedAt" :   $routeParams.userUpdatedat
      };

      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId , $scope.awesomeThings  )
        .success(function(data) {
          if (data.status == "success") {
          }
        });
    }



    if( ($routeParams.toDo == "seek") && ($routeParams.userSeek)) {

      //window.location="#/users/" + $routeParams.userSeek  + "&see";
      //for ( var x in $scope.users )
      //  window.location="#/users/" + x +"1&see";
        //if (x.name == $routeParams.userSeek )
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
        .success(function(data) {
          $scope.users = data.data;

        for(var i=0;i<$scope.users.length;i++){
          var obj = $scope.users[i];
          for(var key in obj){
            //var attrName = key;
            var attrValue = obj[key];
            if ( attrValue == $routeParams.userSeek )
              window.location="#/users/" + obj.id  + "&see";
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




    if ( ($routeParams.userName) && ($routeParams.userSurname) &&($routeParams.toDo == "new")  ) {
      //$scope.users = "";
      //$routeParams.userName = "test"
      //$routeParams.userSurname = "test1"

      //$routeParams.userName = '"' + $routeParams.userName + '"'
      //$routeParams.userSurname = '"' + $routeParams.userSurname + '"'

      $scope.awesomeThings = {
      "name" :  $routeParams.userName  ,
      "surname" :  $routeParams.userSurname
        //"name" :  +  $routeParams.userName  ,
        //"surname" :  + $routeParams.userSurname
    };
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' , $scope.awesomeThings )
        .success(function(data) {
          if (data.status == "success") {
          }
        });
    }

    if ( ($routeParams.userId) && ($routeParams.userRole) && ($routeParams.userProject) && ($routeParams.toDo == "link")  ) {
      //$scope.users = "";
      //$routeParams.userName = "test"
      //$routeParams.userSurname = "test1"

      //$routeParams.userName = '"' + $routeParams.userName + '"'
      //$routeParams.userSurname = '"' + $routeParams.userSurname + '"'

      $scope.awesomeThings = {
        "name" :  $routeParams.userRole  ,
        "UserId" :  $routeParams.userId ,
        "ProjectId" :  $routeParams.userProject
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
