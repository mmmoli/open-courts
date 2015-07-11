var ngModule = angular.module('open_courts');

ngModule.service('CourtService', ['$meteor', '$log', CourtService]);

function CourtService($meteor, $log) {

    var courts = $meteor.collection(Courts);

    var courtTypes = [
        {
            label: 'Basketball'
        },
        {
            label: 'Tennis'
        }
    ];

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

        courtTypes: courtTypes,

        defaultCourtType: courtTypes[0]
    };

    return courtService;
}