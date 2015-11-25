
searchApp.controller("search-dashboard-controller", function ($scope, $location, movieSelectionService, tvshowSelectionService, searchResource, searchService) {

    $scope.query = "";

    $scope.movieResult = [];

    $scope.tvshowResult = [];

    $scope.actorResult = [];

    $scope.isMovieLoading = false;

    $scope.isTvShowLoading = false;

    $scope.isActorLoading = false;

    $scope.initSearch = function () {
        searchService.setMovieLoading(true);
        searchService.setTvShowLoading(true);

        //$scope.isActorLoading = true;

        $scope.movieSearch();
        $scope.tvshowSearch();
        //$scope.actorSearch();

        $location.path("/search");
        $scope.query = "";
    };

    $scope.loadResult = function () {
        $scope.movieResult = searchService.getMovieResults();
        $scope.tvshowResult = searchService.getTvShowResults();
        $scope.actorResult = searchService.getActorResults();
    };

    $scope.loadStatus = function () {
        $scope.isMovieLoading = searchService.getMovieLoading();
        $scope.isTvShowLoading = searchService.getTvShowLoading();
        $scope.isActorLoading = searchService.getActorLoading();
    };

    $scope.movieSearch = function () {

        searchResource.searchMovie({
            "q": $scope.query
        }, function onSuccess(successData) {
            for (var i = 0; i < successData.resultCount; i++) {
                $scope.movieResult.push({"movie": successData.results[i], "genre": successData.results[i].primaryGenreName});
            }
            searchService.setMovieResults($scope.movieResult);
            console.log($scope.movieResult);
            searchService.setMovieLoading(false);
        });

    };

    $scope.tvshowSearch = function () {

        searchResource.searchTvShows({
            "q": $scope.query
        }, function onSuccess(successData) {
            for (var i = 0; i < successData.resultCount; i++) {
                $scope.tvshowResult.push({"tvshow": successData.results[i], "genre": successData.results[i].primaryGenreName});
            }
            searchService.setTvShowResults($scope.tvshowResult);
            console.log($scope.tvshowResult);
            searchService.setTvShowLoading(false);
        });
    };

    $scope.actorSearch = function () {

        searchResource.searchActor({
            "q": $scope.query
        }, function onSuccess(successData) {
            searchService.setActorResults(successData.results);
            actorResult = successData.results;
            console.log(successData.results);
            searchService.setActorLoading(false);
        });
    };

    $scope.selectMovie = function(movie){
        movieSelectionService.setSelectedMovie(movie);
    };

    $scope.selectTvshow=function(tvshow){
        tvshowSelectionService.setSelectedTvShow(tvshow);
    };

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 20) {
            $scope.didScroll = true;
        }
    });

    $scope.loadResult();
    $scope.loadStatus();

    $scope.slickFeatureConfig = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
    };
});