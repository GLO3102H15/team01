tvShowApp.controller("tvshow-detail-controller", function ($scope, tvshowSelectionService, $routeParams, tvShowResource, tvShowEpisodesResource,tvShowSimilarResource, $sce) {

    var tvShowId = $routeParams.tvshowId;
    $scope.isLoading = false;
    $scope.modalShown = false;

    $scope.tvShowError = false;
    $scope.episodesError = false;
    $scope.similarTvshowError = false;

    var callSimilar = function(ombdID){
        $scope.isLoadingSimilar = true;

        tvShowSimilarResource.get({id: ombdID}, function onSuccess(data) {
            $scope.similarTvshows = data;
            $scope.isLoadingSimilar = false;
        }, function onError(data) {
            $scope.similarTvshowError = true;
            $scope.isLoadingSimilar = false;
        });
    };

    $scope.selectTvshow = function (selectedTvShow) {
        movieSelectionService.setSelectedTvShow(selectedTvShow);
        $scope.initTvShowDetail();
    };

    $scope.initTvShowDetail = function () {
        var selectedTvShow = tvshowSelectionService.getSelectedTvShow();
        var selectTvshowEpisodes = tvshowSelectionService.getSelectedTvShowEpisodes();

        if (Object.keys(selectedTvShow).length === 0) {
            $scope.isLoading = true;
            tvShowResource.get({id: tvShowId}, function onSuccess(data) {
                selectedTvShow = data.results[0];
                $scope.tvshow = selectedTvShow;
                console.log(selectedTvShow.omdbId);
                callSimilar(selectedTvShow.omdbId);
            }, function onError(errorData){
                $scope.tvShowError = true;
                $scope.isLoading = false;
            });
        } else {
            $scope.tvshow = selectedTvShow;
            callSimilar(selectedTvShow.omdbId);
        }

        if (Object.keys(selectTvshowEpisodes).length === 0) {
            tvShowEpisodesResource.get({id: tvShowId}, function onSuccess(data) {
                selectTvshowEpisodes = data;

                $scope.tvshowEpisodes = selectTvshowEpisodes;
                $scope.isLoading = false;
            }, function onError(errorData){
                $scope.episodesError = true;
                $scope.isLoading = false;
            });
        }
        else {
            $scope.tvshowEpisodes = selectTvshowEpisodes;
            $scope.isLoading = false;
        }
    };
    $scope.initTvShowDetail();

    $scope.toggleModal = function (item) {
        console.log(item);
        $scope.episodeModal = item;
        $scope.episodeModal.length = msToTime(item.trackTimeMillis);
        $scope.modalShown = true;
    };

    function msToTime(s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;

        return hrs + 'h ' + mins + 'min ' + secs + 'sec';
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
