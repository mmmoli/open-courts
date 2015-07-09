var ngModule = angular.module('open_courts');

ngModule.controller('CourtsFindCtrl', ['$meteor', '$log', CourtsFindCtrl]);

function CourtsFindCtrl($meteor, $log) {
    var vm = this;

    vm.courts = $meteor.collection(Courts);
    vm.newCourt = {};

    vm.mapDefaults = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 12,
        events: {}
    };

    ////////

    vm.getLocation = function () {
        var location = Geolocation.latLng() || { lat: 0, lng: 0 };

        vm.newCourt.location = {
            latitude: location.lat,
            longitude: location.lng
        };
    }
}


