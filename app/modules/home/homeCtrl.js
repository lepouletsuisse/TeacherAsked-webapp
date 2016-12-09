(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:homeCtrl
	* @description
	* # homeCtrl
	* Controller of the app
	*/

  	angular
		.module('home')
		.controller('HomeCtrl', Home);

		Home.$inject = ['$state', 'toaster', 'HomeService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Home($state, toaster, HomeService) {
			/*jshint validthis: true */
			var vm = this;

			vm.usernameTeacher = "";
			vm.firstname = "";
			vm.lastname = "";
			vm.password = "";
			vm.usernameStudent = "";
			vm.roomId = "";

			vm.submitLogin = function(){
				if(vm.usernameTeacher == "" || vm.password == ""){
					toaster.pop('error',"Student login", "You didn't fill all the fields! Please process than submit again.");
					return;
				}
				if(HomeService.login(vm.usernameTeacher, vm.password) == true){
					toaster.pop('info', "Login", "Successful login! Welcome " + vm.usernameTeacher);
					$state.go('teacherprofile');
				}
			}

			vm.submitRegister = function(){
				if(vm.usernameTeacher == "" || vm.password == "" || vm.firstname == "" || vm.lastname == ""){
					toaster.pop('error',"Teacher register", "You didn't fill all the fields! Please process than submit again.");
					return;
				}
				if(HomeService.register(vm.usernameTeacher, vm.password, vm.firstname, vm.lastname) == true){
					toaster.pop('info', "Register", "Successful register! Welcome " + vm.usernameTeacher);
				}
			}

			vm.submitStudent = function(){
				if(vm.usernameStudent == "" || vm.roomId == ""){
					toaster.pop('error',"Enter room", "You didn't fill all the fields! Please process than submit again.");
					return;
				}
				if(HomeService.enterRoom(vm.usernameStudent, vm.roomId) == true){
					toaster.pop('info', "Enter room", "Successful enter in room " + vm.roomId + "! Welcome " + vm.usernameStudent);
					$state.go('roomstudent');
				}
			}
		}
})();
