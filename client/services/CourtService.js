var ngModule = angular.module('open_courts');

ngModule.service('CourtService', ['$meteor', '$log', CourtService]);

function CourtService($meteor, $log) {

    var courts = $meteor.collection(Courts);

    var courtService = {

        all: function() {
            return courts;
        },

        add: function(newCourt) {
            courts.save(newCourt);
            newCourt = {};
        },

        remove: function(court) {
            courts.remove(court);
        },

        types: function() {
            return [
                {
                    label: 'Basketball'
                },
                {
                    label: 'Tennis'
                }
            ];
        },

        defaultCourtType: function() {
            return courtService.types[0];
        }
    };

    return courtService;
}