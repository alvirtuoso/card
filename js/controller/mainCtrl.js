 (function(){


 angular.module('mainApp.mainCtrl', [])
  .controller('mainCtrl', ['$scope','$routeParams', 'Patients', requests]);
// myApp.controller('mainCtrl', function Main($scope, $http){
  
//   $http.get('http://api.randomuser.me/?results=24').success(function(data) {
//     $scope.users = data.results;
//   }).error(function(data, status) {
//     alert('get data error!');
//   });
 
// });

function requests($scope, $routeParams, Patients){

	var success = function(response){
		console.log(response.users);
		$scope.users = response.users;
	};
	// var queryOk = function(response){
	// 	console.log(response);
	// };
	var error = function(error){
		alert('Data request error');};

	var pid = ($routeParams.id) ? parseInt($routeParams.id) : 0;

    // alert(pid);
	Patients.get().$promise.then(success, error);
	// Patients.query(pid).$promise.then(queryOk, error);

}
 })()