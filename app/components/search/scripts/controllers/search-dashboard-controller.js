
searchApp.controller("search-dashboard-controller", function ($scope, movieSelectionService, tvshowSelectionService, actorSelectionService, searchService, searchResource) {

    $scope.query = "";

    $scope.queryType = [];

    $scope.movieResult = [];

    $scope.tvshowResult = [];

    $scope.actorResult = [];

    $scope.userResult = [];

    $scope.movieGenre = [];

    $scope.movieFilter = {};

    $scope.movieFilterSelected = {};

    $scope.tvshowGenre = [];

    $scope.tvshowFilter = {};

    $scope.tvshowFilterSelected = {};

    $scope.isMovieLoading = false;

    $scope.isTvShowLoading = false;

    $scope.isActorLoading = false;

    $scope.isUserLoading = false;

    $scope.showMovieResult = false;

    $scope.showTvShowResult = false;

    $scope.showActorResult = false;

    $scope.showUserResult = false;


    $scope.initSearch = function () {
        for (var i = 0; i < $scope.queryType.length; i++) {
            $scope.search($scope.queryType[i]);
        }
    };

    $scope.searchAll = function () {
        $scope.movieSearch();
        $scope.tvshowSearch();
        $scope.actorSearch();
        //$scope.userSearch();
    };

    $scope.search = function (queryType) {
        if (queryType === "All"){
            $scope.showMovieResult = true;
            $scope.showTvShowResult = true;
            $scope.showActorResult = true;
            $scope.showUserResult = true;
            $scope.searchAll();
        }
        if (queryType === "Movies"){
            $scope.showMovieResult = true;
            $scope.movieSearch();
        }
        if (queryType === "TvShows"){
            $scope.showTvShowResult = true;
            $scope.tvshowSearch();
        }
        if (queryType === "Actors"){
            $scope.showActorResult = true;
            $scope.actorSearch();
        }
        if (queryType === "Users"){
            $scope.showUserResult = true;
            $scope.userSearch();
        }
    };

    $scope.movieSearch = function () {
        $scope.isMovieLoading = true;
        searchResource.searchMovie({
            "q": $scope.query
        }, function onSuccess(successData) {
            for (var i = 0; i < successData.resultCount; i++) {
                $scope.movieResult.push({"movie": successData.results[i], "genre": successData.results[i].primaryGenreName});
            }
            $scope.uniqueMovieGenre();
            $scope.isMovieLoading = false;
            console.log($scope.movieResult);
        });
    };

    $scope.tvshowSearch = function () {
        $scope.isTvShowLoading = true;
        searchResource.searchTvShows({
            "q": $scope.query
        }, function onSuccess(successData) {
            for (var i = 0; i < successData.resultCount; i++) {
                $scope.tvshowResult.push({"tvshow": successData.results[i], "genre": successData.results[i].primaryGenreName});
            }
            $scope.uniqueTvshowGenre();
            $scope.isTvShowLoading = false;
            console.log($scope.tvshowResult);
        });
    };

    $scope.actorSearch = function () {
        $scope.isActorLoading = true;
        searchResource.searchActor({
            "q": $scope.query
        }, function onSuccess(successData) {
            for (var i = 0; i < successData.resultCount; i++) {
                $scope.actorResult.push({"actor": successData.results[i]});
            }
            $scope.isActorLoading = false;
            console.log($scope.actorResult);
        });
    };

    $scope.userSearch = function () {
    };

    $scope.selectMovie = function(movie){
        movieSelectionService.setSelectedMovie(movie);
    };

    $scope.selectTvshow = function(tvshow){
        tvshowSelectionService.setSelectedTvShow(tvshow);
    };

    $scope.selectActor = function(actor){
        tvshowSelectionService.setSelectedTvShow(actor);
    };

    $scope.uniqueMovieGenre = function(){
        $scope.movieGenre.push("All");
        $.each($scope.movieResult, function(index, value){
            if($.inArray(value.genre, $scope.movieGenre) === -1) {
                $scope.movieGenre.push(value.genre);
            }
        });
    };

    $scope.uniqueTvshowGenre = function(){
        $scope.tvshowGenre.push("All");
        $.each($scope.tvshowResult, function(index, value){
            if($.inArray(value.genre, $scope.tvshowGenre) === -1) {
                $scope.tvshowGenre.push(value.genre);
            }
        });
    };


    $scope.setMovieFilter = function() {
        if ($scope.movieFilterSelected === "All"){
            $scope.movieFilter = {};
        }
        else {
            $scope.movieFilter = $scope.movieFilterSelected;
        }
    };

    $scope.setTvshowFilter = function() {
        if ($scope.tvshowFilterSelected === "All"){
            $scope.tvshowFilter = {};
        }
        else {
            $scope.tvshowFilter = $scope.tvshowFilterSelected;
        }
    };

    $scope.query = searchService.getQuery();
    $scope.queryType.push(searchService.getQueryType());

    console.log($scope.queryType);

    if ($scope.query !== ""){
        $scope.initSearch();
    }

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