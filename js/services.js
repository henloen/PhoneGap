"use strict";

/*Services for bodApp*/
angular.module("bodApp.services", [])
	
	//service that communicates with the REST API for answers
	.factory("Answers", function($http) {
		var rootUrl = "10.1.102.26:3000"
		return {
			//gets all answers with a boolean parameter to determine whether all answers or only unprocessed should be fetched
			getAll : function(viewAllArg) {
				return $http.get(rootUrl + "/answers", {
					params : {
						viewAll : viewAllArg
					}
				});
			},
			//get the answer with the specified id
			get : function(id) {
				return $http.get(rootUrl + "/answers/" + id);
			},
			//locks the answer with the specified id
			toggleLock : function(id) {
				return $http.put(rootUrl + "/toggleLockAnswer/" + id);
			},
			//updates the processed status of the answer with the specified id
			update : function(id) {
				return $http.put(rootUrl + "/answers/" + id);
			},
			//deletes all answers
			deleteAll : function() {
				return $http.delete(rootUrl + "/answers");
			},
			//creates a new answer based on the answer object passed in
			create : function(answer) {
				return $http.post(rootUrl + "/answers", answer);
			},
			//deletes the answer with the specified id
			delete : function(id) {
				return $http.delete(rootUrl + /answers/ + id);
			},
			export : function() {
				return $http.get(rootUrl + "/exportAnswers");
			}
		};
	})

	//service that communicates with the REST API for participants
	.factory("Participants", function($http) {
		return {
			//gets all participants
			getAll : function() {
				return $http.get(rootUrl + "/participants");
			},
			//deletes all participants
			deleteAll : function() {
				return $http.delete(rootUrl + "/participants");
			},
			//creates a new participant based on the participant object passed in
			create : function(participant) {
				return $http.post(rootUrl + "/participants", participant);
			},
			//marks the participant with that email as winner
			updateWinner: function(email) {
				return $http.post(rootUrl + "/winners/" + email);
			},
			//deletes all winners (sets the 'winner' field of all participants to 0)
			deleteWinners: function() {
				return $http.delete(rootUrl + "/winners");
			},
			export : function() {
				return $http.get(rootUrl + "/exportParticipants");
			}
		};
	});