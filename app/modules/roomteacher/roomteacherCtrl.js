(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:roomteacherCtrl
	* @description
	* # roomteacherCtrl
	* Controller of the app
	*/

  	angular
		.module('roomteacher')
		.controller('RoomteacherCtrl', Roomteacher);

		Roomteacher.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Roomteacher() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
