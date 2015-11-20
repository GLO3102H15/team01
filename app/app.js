'use strict';

// Declare app level module which depends on views, and components
var homeApp = angular.module('uMovie', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    'oblador.lazytube',
    'uMovie.user',
    'slickCarousel',
    'uMovie.movie',
    'uMovie.tvshow',
    'uMovie.actor',
    "uMovie.search",
    "uMovie.login",
    "uMovie.register"
]).run(['$rootScope', '$cookies', '$location', function ($rootScope, $cookies, $location) {

    if ($cookies.getObject('user')!= null){
        $rootScope.user = $cookies.getObject('user');
    }

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        if ( $cookies.getObject('user') == null ) {
            if ( next.templateUrl == "partials/login.html" ) {
                // already going to #login, no redirect needed
            } else {
                // not going to #login, we should redirect now
                $location.path( "/login" );
            }
        }
    });
}]);