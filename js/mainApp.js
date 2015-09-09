var myApp = angular.module('myApp', ['ngResource', 'mainApp.mainCtrl']);

myApp.factory('Patients', function($resource){
	return $resource('http://api.randomuser.me/?results=24');
});



