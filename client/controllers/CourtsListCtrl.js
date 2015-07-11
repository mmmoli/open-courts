var ngModule = angular.module('open_courts');

ngModule.controller('CourtsListCtrl', ['$meteor', '$log', 'CourtService', CourtsListCtrl]);

function CourtsListCtrl($meteor, $log, CourtService) {
    var vm = this;

    vm.courts = CourtService.all();

    vm.remove = CourtService.remove;
}


