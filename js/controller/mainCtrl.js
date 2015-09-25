 (function() {

     'use strict';
     angular.module('mainApp') //, [])
         .controller('mainCtrl', ['$scope', '$modal', '$location', 'RestSvc', requests]);
     // myApp.controller('mainCtrl', function Main($scope, $http){

     //   $http.get('http://api.randomuser.me/?results=24').success(function(data) {
     //     $scope.users = data.results;
     //   }).error(function(data, status) {
     //     alert('get data error!');
     //   });

     // });


     function requests($scope, $modal, $location, RestSvc) {
         //pickerDate();
         var success = function(response) {
             console.log(response);
             $scope.patients = response.patients;
         };
         var error = function(error) {
             alert('Data request error');
         };

         // var pid = ($routeParams.id) ? parseInt($routeParams.id) : 0;

         RestSvc.get().$promise.then(success, error);

         $scope.openEditForm = function(patient) {

             var modObj = $modal.open({
                 animation: true,
                 size: 'lg',
                 templateUrl: '/card/partial/editProfile.html',
                 controller: 'editProfileCtrl',
                 resolve: {
                     patient: function() {
                             return patient;
                         } // pass patient to modal editProfileCtrl
                 }
             });

             // modObj.result.then(function(savedPatient){
             //   alert(result);
             // var patientList = $scope.patients;
             // patientList.splice(patientList.indexOf(patient), 1, editedPatient); // update the patients list
             // $scope.patients = patientList;
             // });
             modObj.result.then(onSave, onCancel);

             function onSave(result) {
                 modObj = null;
                  $location.path('/');
                 // var patientList = $scope.patients;
                 // patientList.splice(patientList.indexOf(patient), 1, savedPatient); // update the patients list
                 // $scope.patients = patientList;
             }

             function onCancel(reason) {
                 console.log(reason);
                 modObj = null;
                 $location.path('/');
             }
         };



     } // End of requests

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
