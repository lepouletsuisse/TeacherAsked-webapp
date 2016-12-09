'use strict';

/**
 * @ngdoc function
 * @name app.route:roomteacherRoute
 * @description
 * # roomteacherRoute
 * Route of the app
 */

angular.module('roomteacher')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('roomteacher', {
				url:'/roomteacher',
				templateUrl: 'app/modules/roomteacher/roomteacher.html',
				controller: 'RoomteacherCtrl',
				controllerAs: 'vm'
			});

		
	}]);
