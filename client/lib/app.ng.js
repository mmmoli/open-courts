
var ngModule = angular.module('open_courts', [
    'angular-meteor',
    'ui.router',
    'uiGmapgoogle-maps',
    'ngMaterial'
]);

ngModule.config(function($urlRouterProvider, $stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/courts/');

        $stateProvider

            .state('courts', {
                url: '/',
                views: {
                    add: {
                        templateUrl: 'client/views/courts/courts.add.ng.html'
                    },
                    list: {
                        templateUrl: 'client/views/courts/courts.list.ng.html'
                    }
                }
            })

            ;
    });


