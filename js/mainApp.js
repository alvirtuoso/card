(function(){
'use strict';
angular.module('mainApp', ['ngResource', 'ngRoute', 'ui.bootstrap'])//, 'mainApp.mainCtrl', 'mainApp.editProfileCtrl'])

// app.factory('Patients', function($resource){
// 	return $resource('http://api.randomuser.me/?results=24');
// });

.factory('RestSvc', ['$resource', function($resource){
	return $resource('/openemr/api/patients/:id',{id:"@id"}, {
        query:  {method: 'GET', isArray: true},
        get:    {method: 'GET'},
        remove: {method: 'DELETE'},
        update:   {method: 'PUT'},
        add:    {method: 'POST'}
    });

}])	

    .directive('datepickerLocaldate', ['$parse', function ($parse) {
        var directive = {
            restrict: 'A',
            require: ['ngModel'],
            link: link
        };
        return directive;

        function link(scope, element, attr, ctrls) {
            var ngModelController = ctrls[0];

            // called with a JavaScript Date object when picked from the datepicker
            ngModelController.$parsers.push(function (viewValue) {
                // undo the timezone adjustment we did during the formatting
                viewValue.setMinutes(viewValue.getMinutes() - viewValue.getTimezoneOffset());
                // we just want a local date in ISO format
                return viewValue; //.toISOString().substring(0, 10);
            });

            // called with a 'yyyy-mm-dd' string to format
            ngModelController.$formatters.push(function (modelValue) {
                if (!modelValue) {
                    return undefined;
                }
                // date constructor will apply timezone deviations from UTC (i.e. if locale is behind UTC 'dt' will be one day behind)
                var dt = new Date(modelValue);
                // 'undo' the timezone offset again (so we end up on the original date again)
                dt.setMinutes(dt.getMinutes() + dt.getTimezoneOffset());
                return dt;
            });
        }
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
			controller: 'editProfileCtrl'
		})

		// any other
		.otherwise({ redirectTo: '/' });
});

	
})()
