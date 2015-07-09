var ngModule = angular.module('open_courts');

function CourtsFindCtrl() {
    var vm = this;
    vm.courts = ['court 1', 'court 2'];
}

ngModule.controller('CourtsFindCtrl', CourtsFindCtrl);

