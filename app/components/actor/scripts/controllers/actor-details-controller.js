actorApp.controller("actor-detail-controller", function ($scope, $cookies, $location, $routeParams, actorResource, actorMovieResource) {
    var actorId = $routeParams.actorId;

    var movies = {};
    $scope.isLoading = false;
    $scope.isMovieLoading = false;

    $scope.initActor = function () {
        $scope.isLoading = true;
        actorResource.get({id: actorId}, function onSuccess(data) {
            if (data.resultCount) {
                var selectedActor = data.results[0];
                $scope.actor = selectedActor;
                $scope.isLoading = false;
            } else {
                $location.path("/lost");
            }
        }, function error(data) {
            $location.path("/lost");
        });

    };

    $scope.initMovieActor = function () {
        var selectedMovies = {};
        if (Object.keys(selectedMovies).length === 0) {
            actorMovieResource.get({id: actorId}, function onSuccess(data) {
                selectedMovies = data.results;
                $scope.movies = selectedMovies;

            }, function error(data) {
                $scope.movieError = true;
                $scope.isMovieLoading = false;
            });
        } else {
            $scope.movies = selectedMovies;
        }
    };

    $scope.initActor();
    $scope.initMovieActor();

    $scope.slickFeatureConfig = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth:true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }]
    };

});
