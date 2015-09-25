/*global angular*/

(function (angular) {
  'use strict';

  var app = angular.module('mainApp', [
    '720kb.datepicker'
  ]);
  app.controller('actrl', ['$scope', function($scope){
  	$scope.dob = '10/01/2011';
  }]);
}(angular));
