homeApp.controller("home-controller", function ($scope, movieSelectionService, tvshowSelectionService, homeResource, loginService) {
    $scope.movies = [];

    $scope.tvshows = [];

    $scope.isMovieLoading = false;

    $scope.isTvShowLoading = false;

    $scope.movieError = false;

    $scope.tvError = false;

    $scope.initializeMovie = function () {
        $scope.isMovieLoading = true;

        homeResource.getPopularMovies({},function onSuccess(successData) {
            $scope.movies = successData;

            $scope.isMovieLoading = false;
        }, function onError(errorData){
            $scope.movieError = true;
            $scope.isMovieLoading = false;
        });
    };

    $scope.selectMovie = function(movie){
        movieSelectionService.setSelectedMovie(movie);
    }

    $scope.selectTvshow=function(tvshow){
        tvshowSelectionService.setSelectedTvShow(tvshow);
    }

    $scope.initializeTvShow = function () {
        $scope.isTvShowLoading = true;

        homeResource.getPopularTvShows({},function onSuccess(successData) {
            $scope.tvshows = successData;

            $scope.isTvShowLoading = false;
        }, function onError(errorData){
            $scope.tvError = true;
            $scope.isTvShowLoading = false;
        });
    };
    $scope.slickMoviesConfig = {
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
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }]
    };

    $scope.slickTvShowsConfig = {
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
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }]
    }



    $scope.initializeMovie();
    $scope.initializeTvShow();
})
