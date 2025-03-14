angular
  .module("cart", [])
  .factory("cart", function () {
    let cartData = [];

    return {
      addProduct: function (id, name, price) {
        var addedToExistingItem = false;
        for (var i = 0; i < cartData.length; i++) {
          if (cartData[i].id == id) {
            cartData[i].count++;
            addedToExistingItem = true;
            break;
          }
        }

        if (!addedToExistingItem) {
          cartData.push({ count: 1, id, name, price });
        }
      },

      removeProduct: function (id) {
        for (let i = 0; i < cartData.length; i++) {
          if (cartData[i].id == id) {
            cartData.splice(i, 1);
            break;
          }
        }
      },

      getProduct: function () {
        return cartData;
      },
    };
  })
  .directive("cartSummary", function (cart) {
    return {
      restrict: "E",
      templateUrl: "components/cart/cartSummary.html",
      controller: function ($scope) {
        var cartData = cart.getProduct();

        $scope.total = function () {
          let total = 0;
          for (let i = 0; i < cartData.length; i++) {
            total += cartData[i].price * cartData[i].count;
          }
          return total;
        };

        $scope.itemCount = function () {
          let count = 0;
          for (let i = 0; i < cartData.legnth; i++) {
            count += cartData[i].count;
          }
          return count;
        };
      },
    };
  });
