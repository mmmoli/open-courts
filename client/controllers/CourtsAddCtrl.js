var ngModule = angular.module('open_courts');

ngModule.controller('CourtsAddCtrl', ['$meteor', '$log', 'CourtService', '$rootScope', CourtsAddCtrl]);

function CourtsAddCtrl($meteor, $log, CourtService, $rootScope) {
    var vm = this;

    vm.courtTypes = CourtService.courtTypes;

    vm.court = {
        type: CourtService.defaultCourtType.label,
        owner: $rootScope.currentUser._id,
        location: {
            latitude: 45,
            longitude: -73
        }
    };

    vm.mapDefaults = {
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


