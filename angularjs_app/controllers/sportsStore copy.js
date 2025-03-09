angular
  .module("sportsStore")
  .constant("dataUrl", "http://localhost:5000/products")
  .controller("sportsStoreCtrl", function (dataUrl, $scope, $http) {
    $scope.data = {};

    $http
      .get(dataUrl)
      .then(function (res) {
        $scope.data.products = res.data;
      })
      .catch(function (err) {
        console.error("데이터 로드 실패:", err);
      });
  });
