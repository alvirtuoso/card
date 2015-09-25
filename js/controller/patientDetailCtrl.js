(function(){

	'use strict';

	angular.module('mainApp')
	.controller('patientDetailCtrl', ['$scope', '$routeParams', '$modal','RestSvc' processDetail]);

	function processDetail($scope, $routeParams, $modal, RestSvc){
		var pid = 0;
         var queryOk = function(response) {
             console.log(response);
             $scope.patientDetail = response;                          
         
         };
         var error = function(error) {
             alert('Data request error');
         };

         $scope.loadPatientDetail = function() {
             var pid = ($routeParams.id) ? parseInt($routeParams.id) : 0;
             if (pid && pid > 0) {
                 RestSvc.get({
                     id: pid
                 }).$promise.then(queryOk, error);

             };
         };

		$scope.openEditForm = function(){

			var modObj = $modal.open({
				animation: true,
				templateUrl: '/card/partial/editProfile.html',
				controller: 'editProfileCtrl',
				resolve: {patient: $scope.patientDetail}
			});

			modObj.result.then(function(){
				$scope.loadPatientDetail();
			});
		};

	}

	function _openDetail(){

	}

})()