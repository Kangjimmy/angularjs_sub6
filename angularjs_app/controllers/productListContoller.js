angular
  .module("sportsStore")
  .constant("productListActiveClass", "btn-primary")
  .constant("productListPageCount", 3)
  .controller(
    "productListCtrl",
    function (
      $scope,
      $filter,
      productListActiveClass,
      productListPageCount,
      cart
    ) {
      let selectedCategory = null;
      $scope.pageSize = productListPageCount;
      $scope.selectedPage = 1;

      $scope.selectCategory = function (newCategory) {
        selectedCategory = newCategory;
        $scope.selectedPage = 1;
      };

      $scope.selectPage = function (newPage) {
        $scope.selectedPage = newPage;
      };

      $scope.categoryFilterFn = function (product) {
        return selectedCategory == null || product.category == selectedCategory;
      };

      $scope.getCategoryClass = function (category) {
        return selectedCategory == category ? productListActiveClass : "";
      };
      $scope.getPageClass = function (page) {
        return $scope.selectedPage == page
          ? productListActiveClass
          : "btn-outline-primary";
      };
      $scope.addProductToCart = function (product) {
        cart.addProduct(product.id, product.name, product.price);
      };
    }
  );
