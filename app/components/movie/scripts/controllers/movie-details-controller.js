/**
 * Created by Antoine on 2015-09-14.
 */
movieApp.controller("movie-detail-controller", function ($scope, movieSelectionService, $routeParams, movieResource, movieSimilarResource, movieCommentResource, $rootScope, $location) {
    var movieId = $routeParams.movieId;
    $scope.isLoading = false;
    $scope.isLoadingSimilar = false;
    $scope.isSimilarError = false;
    var callSimilar = function (ombdID) {
        $scope.isLoadingSimilar = true;

        movieSimilarResource.get({id: ombdID}, function onSuccess(data) {
            $scope.similarMovies = data;
            $scope.isLoadingSimilar = false;
        }, function onError(data) {

            $scope.isSimilarError = true;
            $scope.isLoadingSimilar = false;
        });
    };


    $scope.initComment = function () {
        movieCommentResource.get({id: movieId}, function onSuccess(data) {
            $scope.movieComments = data;
        }, function onError(data) {

        });
    };
    $scope.clearTextField = function () {
        document.getElementById("commentTextArea").value = '';
    }
    $scope.initMovieDetail = function () {

        var selectedMovie = movieSelectionService.getSelectedMovie();
        var similarMovies;

        if (Object.keys(selectedMovie).length === 0) {
            $scope.isLoading = true;
            movieResource.get({id: movieId}, function onSuccess(data) {
                if (data.resultCount) {
                    selectedMovie = data.results[0];
                    $scope.movie = selectedMovie;
                    $scope.isLoading = false;
                    callSimilar(selectedMovie.omdbId);
                } else {
                    $location.path("/lost");
                }
            }, function onError(data) {

            });

        } else {
            $scope.movie = selectedMovie;
            callSimilar(selectedMovie.omdbId);
        }

        $scope.initComment();

    };


    $scope.selectMovie = function (selectedMovie) {
        movieSelectionService.setSelectedMovie(selectedMovie);
        $scope.initMovieDetail();

    };

    $scope.addComment = function (userComment) {
        var comment = {
            "username": $rootScope.user.username,
            "email": $rootScope.user.email,
            "id": movieId,
            "content": userComment,
        }

        movieCommentResource.post(comment, function onSuccess(data) {

            $scope.initComment();
            $scope.clearTextField();

        }, function onError(data) {

        });
    }

    $scope.initMovieDetail();

    $scope.slickFeatureConfig = {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5

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
