
var ngModule = angular.module('open_courts', [
    'angular-meteor',
    'ui.router',
    'uiGmapgoogle-maps',
    'ngMaterial'
]);

ngModule.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/courts/');

        $stateProvider

            .state('main', {
                url: '/',
                abstract: true,
                templateUrl: 'client/views/main.ng.html'
            })

            .state('main.courts', {
                url: 'courts',
                abstract: true,
                templateUrl: 'client/views/courts/courts.ng.html'
            })

            .state('main.courts.find', {
                url: '/',
                views: {
                    add: {
                        controller: 'CourtsAddCtrl as vm',
                        templateUrl: 'client/views/courts/courts.add.ng.html'
                    },
                    list: {
                        controller: 'CourtsListCtrl as vm',
                        templateUrl: 'client/views/courts/courts.list.ng.html'
                    }
                }
            })

            ;
    }]);


ngModule.config(['$mdThemingProvider', '$mdIconProvider',
    function($mdThemingProvider, $mdIconProvider){

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    }]);