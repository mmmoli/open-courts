var ngModule = angular.module('open_courts');

ngModule.controller('CourtsAddCtrl', ['$meteor', '$log', 'CourtService', CourtsAddCtrl]);

function CourtsAddCtrl($meteor, $log, CourtService) {
    var vm = this;

    vm.courtTypes = CourtService.types();

    vm.court = {
        type: CourtService.defaultCourtType.label
    };

    vm.mapDefaults = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 12,
        events: {},
        marker: {
            options: {
                draggable: false
            },
            events: {}
        }
    };

    ////////

    vm.getLocation = function () {
        var location = Geolocation.latLng() || { lat: 0, lng: 0 };

        vm.court.location = {
            latitude: location.lat,
            longitude: location.lng
        };
    };

    vm.add = CourtService.add;
}


