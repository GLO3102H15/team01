loginApp.factory('loginResource', ["$resource", function($resource){
  return $resource("https://umovie-team01.herokuapp.com/login" , {}, {
    post:{
      method:"POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest: function (data, headersGetter) {
        var str = [];
        for (var d in data)
          str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
          return str.join("&");
     }
    }
  });
}]);
