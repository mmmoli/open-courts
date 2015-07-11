var ngModule = angular.module('open_courts');

ngModule.controller('CourtsAddCtrl', ['$meteor', '$log', CourtsAddCtrl]);

function CourtsAddCtrl($meteor, $log) {
    var vm = this;

    vm.courtTypes = COURT_TYPES;

    vm.courts = $meteor.collection(Courts, false);

    vm.court = {};

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

    vm.add = function() {
        vm.courts.save(vm.court).then(
            function(numberOfDocs){
                $log.log('save success doc affected ', numberOfDocs);
                vm.court = {};
            }, function(error){
                $log.log('save error', error);
            }
        );
    };

    vm.getLocation = function () {
        var location = Geolocation.latLng() || { lat: 0, lng: 0 };

        vm.court.location = {
            latitude: location.lat,
            longitude: location.lng
        };
    };
}


