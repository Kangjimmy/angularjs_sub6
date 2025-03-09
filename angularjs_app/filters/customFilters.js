angular
  .module("customFilters", [])
  .filter("unique", function () {
    return function (data, propertyName) {
      if (angular.isArray(data) && angular.isString(propertyName)) {
        let results = [];
        let keys = {};
        for (var i = 0; i < data.length; i++) {
          let val = data[i][propertyName];
          if (angular.isUndefined(keys[val])) {
            keys[val] = true;
            results.push(val);
          }
        }
        return results;
      } else {
        return data;
      }
    };
  })
  .filter("range", function ($filter) {
    return function (data, page, size) {
      if (
        angular.isArray(data) &&
        angular.isNumber(page) &&
        angular.isNumber(size)
      ) {
        let start_idx = (page - 1) * size;
        if (data.length < start_idx) {
          return [];
        } else {
          return $filter("limitTo")(data.slice(start_idx), size);
        }
      } else {
        return data;
      }
    };
  })
  .filter("pageCount", function () {
    return function (data, size) {
      if (angular.isArray(data)) {
        let results = [];
        for (var i = 0; i < Math.ceil(data.length / size); i++) {
          results.push(i);
        }
        return results;
      } else {
        return data;
      }
    };
  });
