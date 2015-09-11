 (function() {

     'use strict';
     angular.module('mainApp.mainCtrl', [])
         .controller('mainCtrl', ['$scope', '$routeParams', 'Patients', requests]);
     // myApp.controller('mainCtrl', function Main($scope, $http){

     //   $http.get('http://api.randomuser.me/?results=24').success(function(data) {
     //     $scope.users = data.results;
     //   }).error(function(data, status) {
     //     alert('get data error!');
     //   });

     // });


     function requests($scope, $routeParams, Patients) {
         //pickerDate();

         var success = function(response) {
             console.log(response.patients);
             $scope.patients = response.patients;
         };
         var error = function(error) {
             alert('Data request error');
         };

         var pid = ($routeParams.id) ? parseInt($routeParams.id) : 0;

         Patients.get().$promise.then(success, error);
     }

     // function pickerDate() {
     //     $(function() {
     //         $("#dobinput").datepicker({
     //             yearRange: "1915:2015",
     //             changeMonth: true,
     //             changeYear: true
     //         });
     //     });
     // }



 })()
