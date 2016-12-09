(function() {
	'use strict';

	/**
	 * Service of the home
	 */

  	angular
		.module('home')
		.factory('HomeService', Home);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Home.$inject = ['$http'];

		function Home ($http) {

			var apiBaseURL = "http://localhost:3000";

			return {
				//Login
				login: function(username, password){
					//$http.defaults.headers.get = {"Access-Control-Allow-Origin":"*"};
					//$http.defaults.headers.get = {"Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"};
					return $http({
						url: apiBaseURL + "/auth", 
						method: "GET", 
						params: {
							"username": username, 
							"password": password
						},
					})
					.success(function(res){
						console.log(res);
						return true;
					})
					.error(function(data){
						return data;				
					});
				},
				//register
				register: function(username, password, firstname, lastname){
					/*return $http({url: "/api/register", method: "POST", params: 
						{"username": username, 
						"password": password, 
						"firstname": firstname, 
						"lastname": lastname}})
					.success(function(res){
						return res[0];
					})
					.error(function(data){
						return data;				
					});*/
					return true;
				},
				enterRoom: function(username, roomId){
					return true;
				}
			}
		}

})();
