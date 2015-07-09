
var ngModule = angular.module('open_courts', [
    'angular-meteor',
    'ui.router'
]);

ngModule.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/courts/');

        $stateProvider

            .state('main', {
                url: '',
                abstract: true,
                template: '<div ui-view></div>'
            })

            .state('main.courts', {
                url: '/courts',
                abstract: true,
                templateUrl: 'client/views/index.ng.html'
            })

            .state('main.courts.find', {
                url: '/',
                templateUrl: 'client/views/courts.find.ng.html'
            })

            .state('main.courts.add', {
                url: '/add',
                template: '<p>Hello Add</p>'
            })

        ;
    }]);
