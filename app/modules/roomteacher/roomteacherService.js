(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:roomteacherService
	 * @description
	 * # roomteacherService
	 * Service of the app
	 */

  	angular
		.module('roomteacher')
		.factory('RoomteacherService', Roomteacher);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Roomteacher.$inject = ['$http'];

		function Roomteacher ($http) {

		}

})();
