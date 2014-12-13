angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, ListsService) {
  // Form data for the login modal
  $scope.listData = {};
  $scope.lists = ListsService.getAllLists();

  $ionicModal.fromTemplateUrl('templates/create_list.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.createListModal = modal;
  });

  $scope.create = function() {
    $scope.createListModal.show();
  };
  $scope.closeCreate = function() {
    $scope.createListModal.hide();
  };
  $scope.doCreate = function() {
    ListsService.createList($scope.listData.title);
    $scope.closeCreate();
  };
})

.controller('ListsCtrl', function($scope, ListsService) {
  $scope.lists = ListsService.getAllLists();
})

.controller('ListCtrl', function($scope, $stateParams, ListsService) {
  $scope.list = ListsService.getList($stateParams.listId);
  $scope.editing = false;

  $scope.toggleEdit = function() {
    $scope.editing = !$scope.editing;
  };
});
