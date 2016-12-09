(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('teacherasked-webapp', [
		'ngResource',
		'ngAria',
		 'ui.bootstrap',
		 'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		//'ngTouch',
		'ngSanitize',
		'ui.router',
		'home',
		'teacherprofile',
		'roomstudent',
		'roomteacher',
	]);

})();
