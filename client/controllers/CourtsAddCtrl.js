var ngModule = angular.module('open_courts');

ngModule.controller('CourtsAddCtrl', ['$meteor', '$log', CourtsAddCtrl]);

function CourtsAddCtrl($meteor, $log) {
    var vm = this;

    vm.courtTypes = [
        {
            label: 'Basketball'
        },
        {
            label: 'Tennis'
        }
    ];

    vm.court = {
        type: vm.courtTypes[0].label
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
    }
}


