(function () {
'use strict';

var shoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Juice",
    quantity: "30"
  },
  {
    name: "Coffe",
    quantity: "50"
  },
  {
    name: "Honey",
    quantity: "10"
  },
  {
    name: "Chips",
    quantity: "35"
  }
];

var BoughtList = [];

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('ToBuyShowController', ShoppingListShowController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ShoppingListShowController.$inject = ['ShoppingListCheckOffService'];
function ShoppingListShowController(ShoppingListCheckOffService) {
  var showList = this;
  showList.items = ShoppingListCheckOffService.getItems();
  showList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}


function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
  };

  service.removeItem = function (itemIndex) {
    BoughtList.push(shoppingList[itemIndex]);
    shoppingList.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return shoppingList;
  };
}

ToBuyController.$inject = ['$scope'];
function ToBuyController($scope) {
  $scope.shoppingList = shoppingList;

  $scope.addToList = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.shoppingList.push(newItem);
  };
}

AlreadyBoughtController.$inject = ['$scope'];
function AlreadyBoughtController($scope) {
  $scope.BoughtList = BoughtList;
}

})();
