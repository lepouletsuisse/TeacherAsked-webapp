(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:teacherprofileService
	 * @description
	 * # teacherprofileService
	 * Service of the app
	 */

  	angular
		.module('teacherprofile')
		.factory('TeacherprofileService', Teacherprofile);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Teacherprofile.$inject = ['$http'];

		function Teacherprofile ($http) {

		}

})();
