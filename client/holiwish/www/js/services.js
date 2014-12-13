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
		var that = this;
		$http.post('http://localhost:3000/api/lists', {"list-name": title, "list-id": 0, "created-by": "Claire", "id": 0}).then(function(response) {
			that.lists.push(response.data)	
		});
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
		var that = this;
	 	$http.get('http://localhost:3000/api/lists').then(function(response) {
	 		that.lists.length = 0;
	 		for (var i = 0; i < response.data.length; i++) {
	 			that.lists.push(response.data[i]);
	 		}
	 	});

		return this.lists;
	}

	return ListsService;
});