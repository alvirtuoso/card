 (function() {

     'use strict';

     angular.module('mainApp.editProfileCtrl', [])
         .controller('editProfileCtrl', ['$scope', '$routeParams', '$location',
             'Patients', editRequest
         ]);

     function pickerDate() {
         $(function() {
             $("#dobinput").datepicker({
                 yearRange: "1915:2015",
                 changeMonth: true,
                 changeYear: true
             });
         });
     }
     // Returns array[0] object with 1 item..that is the State name
     function getStateByCode(dataArray, code) {
         return dataArray.filter(
             function(dataArray) {
                 return dataArray.code == code
             }
         );
     }

     function getIndexByCode(dataArray, strCode) {
     	var result = 3;
         for (var i in dataArray) {
         	if (dataArray[i].code == strCode) {
         		result = i;
         	};
         }
         return result;
     }

     function editRequest($scope, $routeParams, $window, Patients) {
         pickerDate();
         var patientStateIndex = 3; // index of AZ in the array stateList
         var queryOk = function(response) {
             console.log(response);
             $scope.patient = response;             
             patientStateIndex = getIndexByCode(stateList, response.state);

         $scope.selectedState = $scope.states[patientStateIndex];
         };
         var error = function(error) {
             alert('Data request error');
         };
         var errorEdit = function(error) {
             alert('Data edit request error');
         };
         var errorSave = function(error) {
             alert('Data save request error');
         };
         $scope.saveData = function() {
             var pid = ($routeParams.id) ? parseInt($routeParams.id) : 0;
             //alert(pid);
             if (pid && pid > 0) {
                 // Patients.post({id: pid}).$promise.then(queryOk, errorSave);

             };

         };
         $scope.loadPatientData = function() {
             var pid = ($routeParams.id) ? parseInt($routeParams.id) : 0;
             if (pid && pid > 0) {
                 Patients.get({
                     id: pid
                 }).$promise.then(queryOk, errorEdit);

             };
         };

         $scope.states = stateList;



     } // end of editRequest()

     var stateList = [{
         "name": "Alabama",
         "code": "AL"
     }, {
         "name": "Alaska",
         "code": "AK"
     }, {
         "name": "American Samoa",
         "code": "AS"
     }, {
         "name": "Arizona",
         "code": "AZ"
     }, {
         "name": "Arkansas",
         "code": "AR"
     }, {
         "name": "California",
         "code": "CA"
     }, {
         "name": "Colorado",
         "code": "CO"
     }, {
         "name": "Connecticut",
         "code": "CT"
     }, {
         "name": "Delaware",
         "code": "DE"
     }, {
         "name": "District Of Columbia",
         "code": "DC"
     }, {
         "name": "Federated States Of Micronesia",
         "code": "FM"
     }, {
         "name": "Florida",
         "code": "FL"
     }, {
         "name": "Georgia",
         "code": "GA"
     }, {
         "name": "Guam",
         "code": "GU"
     }, {
         "name": "Hawaii",
         "code": "HI"
     }, {
         "name": "Idaho",
         "code": "ID"
     }, {
         "name": "Illinois",
         "code": "IL"
     }, {
         "name": "Indiana",
         "code": "IN"
     }, {
         "name": "Iowa",
         "code": "IA"
     }, {
         "name": "Kansas",
         "code": "KS"
     }, {
         "name": "Kentucky",
         "code": "KY"
     }, {
         "name": "Louisiana",
         "code": "LA"
     }, {
         "name": "Maine",
         "code": "ME"
     }, {
         "name": "Marshall Islands",
         "code": "MH"
     }, {
         "name": "Maryland",
         "code": "MD"
     }, {
         "name": "Massachusetts",
         "code": "MA"
     }, {
         "name": "Michigan",
         "code": "MI"
     }, {
         "name": "Minnesota",
         "code": "MN"
     }, {
         "name": "Mississippi",
         "code": "MS"
     }, {
         "name": "Missouri",
         "code": "MO"
     }, {
         "name": "Montana",
         "code": "MT"
     }, {
         "name": "Nebraska",
         "code": "NE"
     }, {
         "name": "Nevada",
         "code": "NV"
     }, {
         "name": "New Hampshire",
         "code": "NH"
     }, {
         "name": "New Jersey",
         "code": "NJ"
     }, {
         "name": "New Mexico",
         "code": "NM"
     }, {
         "name": "New York",
         "code": "NY"
     }, {
         "name": "North Carolina",
         "code": "NC"
     }, {
         "name": "North Dakota",
         "code": "ND"
     }, {
         "name": "Northern Mariana Islands",
         "code": "MP"
     }, {
         "name": "Ohio",
         "code": "OH"
     }, {
         "name": "Oklahoma",
         "code": "OK"
     }, {
         "name": "Oregon",
         "code": "OR"
     }, {
         "name": "Palau",
         "code": "PW"
     }, {
         "name": "Pennsylvania",
         "code": "PA"
     }, {
         "name": "Puerto Rico",
         "code": "PR"
     }, {
         "name": "Rhode Island",
         "code": "RI"
     }, {
         "name": "South Carolina",
         "code": "SC"
     }, {
         "name": "South Dakota",
         "code": "SD"
     }, {
         "name": "Tennessee",
         "code": "TN"
     }, {
         "name": "Texas",
         "code": "TX"
     }, {
         "name": "Utah",
         "code": "UT"
     }, {
         "name": "Vermont",
         "code": "VT"
     }, {
         "name": "Virgin Islands",
         "code": "VI"
     }, {
         "name": "Virginia",
         "code": "VA"
     }, {
         "name": "Washington",
         "code": "WA"
     }, {
         "name": "West Virginia",
         "code": "WV"
     }, {
         "name": "Wisconsin",
         "code": "WI"
     }, {
         "name": "Wyoming",
         "code": "WY"
     }];



     // =================================================== end of script code ===========================

 })()
