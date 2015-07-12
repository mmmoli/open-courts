var ngModule = angular.module('open_courts');

ngModule.controller('CourtsMapCtrl', CourtsMapCtrl);

function CourtsMapCtrl($meteor, $log) {
    var vm = this;

    vm.courts = $meteor.collection(Courts);
}


