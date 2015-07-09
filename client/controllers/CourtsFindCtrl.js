var ngModule = angular.module('open_courts');

function CourtsFindCtrl($meteor, $log) {
    var vm = this;
    vm.courts = $meteor.collection(Courts);

    vm.getLocation = function () {
        var location = Geolocation.latLng() || { lat: 0, lng: 0 };
        $log.log(location);
    }
}

ngModule.controller('CourtsFindCtrl', ['$meteor', '$log', CourtsFindCtrl]);

