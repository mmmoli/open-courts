var ngModule = angular.module('open_courts');

function CourtsFindCtrl($meteor) {
    var vm = this;
    vm.courts = $meteor.collection(Courts);
}

ngModule.controller('CourtsFindCtrl', ['$meteor', CourtsFindCtrl]);

