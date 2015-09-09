(function(){

angular.module('mainApp', ['ngResource', 'ngRoute', 'mainApp.mainCtrl'])

// app.factory('Patients', function($resource){
// 	return $resource('http://api.randomuser.me/?results=24');
// });

.factory('Patients', ['$resource', function($resource){
	return $resource('/openemr/api/patients/:id',{id:"@id"});

}])	

.config(function($routeProvider) {
	$routeProvider
		// route for the home page. ex  /openemr/searchbox/searchbox.html#/1
		.when('/', {
			templateUrl : '/card/partial/main.html',
			controller : 'mainCtrl'
		})

		// route for new patient
		.when('/new', {
			templateUrl: '/card/partial/addNew.html',
			controller: 'mainCtrl'
		})

		// route for patient profile
		.when('/editProfile/:id', {
			templateUrl: '/card/partial/editProfile.html',
			controller: 'mainCtrl'
		})

		// any other
		.otherwise({ redirectTo: '/' });
});

	
})()
