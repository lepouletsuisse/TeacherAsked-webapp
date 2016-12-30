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

		Roomteacher.$inject = ['$state', '$stateParams', '$localStorage', 'toaster', 'RoomteacherService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Roomteacher($state, $stateParams, $localStorage, toaster, RoomteacherService) {
			/*jshint validthis: true */
			var vm = this;

			vm.roomId;

			var currentRoom = $stateParams.roomId;
			var teacher;
			var room;

			if($localStorage.token == undefined){
				toaster.pop('error', "Room Teacher", 'No token! Log in please!');
				return $state.go('home');
			}

			RoomteacherService.getRoom(currentRoom)
			.then(function(res){
				if(res.status != 200){
					toaster.pop('error', "Room Teacher", "Room id invalid!");
					return $state.go('teacherprofile');
				}else{
					room = res.data;
					vm.roomId = room.roomConnectionId;
				}
			});


			/*RoomteacherService.getTeacher($localStorage.token)
			.then(function(res){
				if(res.status == 200){
					teacher = res.data;
				}else{
					toaster.pop('error', "Room Teacher", "Token invalid, please log again!");
					$state.go('home');
				}
			});*/

		}

})();
