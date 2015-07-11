var ngModule = angular.module('open_courts');

ngModule.controller('CourtsListCtrl', ['$meteor', '$log', 'CourtService', CourtsListCtrl]);

function CourtsListCtrl($meteor, $log) {
    var vm = this;

    vm.courts = $meteor.collection(Courts);
}


