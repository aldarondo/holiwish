// angular.module('starter.services', [])
// .service('UsersService', function ($http){
// 	var usersService = {};

// 	usersService.createUser = function(password, email, username) {
// 		var data = {
// 			'username': username,
// 			'credentials': {
// 				'password': password
// 			},
// 			'email': email
// 		};

// 		$http.post('http://localhost:3000/users', data).then(function() {
// 			debugger;
// 		});
// 	};

// 	return usersService;
// });
angular.module('starter.services', [])
.service('ListsService', function ($http){
	var ListsService = {};

	ListsService.lists = [];


	ListsService.createList = function (title) {
		// $http.post('http://localhost:3000/lists', {"title": title}).then(function() {
		// 	debugger;
		// });
		var id = Math.random() * 100;
		this.lists.push({"id":id, "title": title, "items": []});
	};

	ListsService.addToList = function (list, item) {
		this.lists[lists.indexOf(list)].push(item);
	};

	ListsService.getList = function (id) {
		return {
			"title": "Christmas List",
			"items": [
			{
				"title": "XBox"
			},
			{
				"title": "Socks"
			},
			{
				"title": "Pants"
			},
			{
				"title": "Toothbrush"
			}]
		};
	}

	ListsService.getAllLists = function () {
		return this.lists;
	}

	return ListsService;
});