tvShowApp.controller("tvshow-detail-controller", function ($scope, tvshowSelectionService, $routeParams, tvShowResource, tvShowEpisodesResource, $sce) {

    var tvShowId = $routeParams.tvshowId;
    $scope.isLoading = false;
    $scope.modalShown = false;

    $scope.initTvShowDetail = function () {
        var selectedTvShow = tvshowSelectionService.getSelectedTvShow();
        var selectTvshowEpisodes = tvshowSelectionService.getSelectedTvShowEpisodes();

        if (Object.keys(selectedTvShow).length === 0) {
            $scope.isLoading = true;
            tvShowResource.get({id: tvShowId}, function onSuccess(data) {
                selectedTvShow = data.results[0];
                $scope.tvshow = selectedTvShow;
            }, function onError(data) {
            });
        } else {
            $scope.tvshow = selectedTvShow;
        }

        if (Object.keys(selectTvshowEpisodes).length === 0) {
            tvShowEpisodesResource.get({id: tvShowId}, function onSuccess(data) {
                selectTvshowEpisodes = data;

                $scope.tvshowEpisodes = selectTvshowEpisodes;
                $scope.isLoading = false;
            }, function onError(data) {

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

});
