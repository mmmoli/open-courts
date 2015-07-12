
var ngModule = angular.module('open_courts', [
    'angular-meteor',
    'ui.router',
    'uiGmapgoogle-maps',
    'ngMaterial'
]);

ngModule.config(function($urlRouterProvider, $stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('courts', {
                url: '/',
                views: {
                    'sidebar-left': {
                        templateUrl: 'client/views/courts/courts.sidebar--left.ng.html'
                    },
                    map: {
                        controller: 'CourtsMapCtrl as vm',
                        templateUrl: 'client/views/courts/courts.map.ng.html'
                    }
                }
            })

            ;
    });


