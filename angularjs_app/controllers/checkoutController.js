angular
  .module("sportsStore")
  .controller("cartSummaryController", function ($scope, cart) {
    $scope.cartData = cart.getProduct();

    $scope.total = function () {
      let total = 0;

      for (let i = 0; i < $scope.cartData.length; i++) {
        total += $scope.cartData[i].price * $scope.cartData[i].count;
      }

      return total;
    };

    $scope.remove = function (id) {
      cart.removeProduct(id);
    };
  });
