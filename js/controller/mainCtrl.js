 angular.module('mainApp.mainCtrl', [])
  .controller('mainCtrl', ['$scope', 'Patients', requests]);
// myApp.controller('mainCtrl', function Main($scope, $http){
  
//   $http.get('http://api.randomuser.me/?results=24').success(function(data) {
//     $scope.users = data.results;
//   }).error(function(data, status) {
//     alert('get data error!');
//   });
 
// });

function requests($scope, Patients){

	var success = function(response){
		console.log(response.results);
		$scope.users = response.results;
	};
	var error = function(error){
		alert('Get data error');};
	Patients.get().$promise.then(success, error);

}