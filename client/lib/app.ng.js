
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

            .state('courts.add', {
                url: 'add/',
                views: {
                    'sidebar-right@': {
                        controller: 'CourtsAddCtrl as vm',
                        templateUrl: 'client/views/courts/courts.add.ng.html',
                    }
                },
                onEnter: function($mdSidenav){
                    window.console.log('enter');
                    $mdSidenav('right').open().then(function () {
                        window.console.debug("open RIGHT is done");
                    });
                },

                onExit: function($mdSidenav){
                    window.console.log('close');
                    $mdSidenav('right').close().then(function () {
                        window.console.debug("close RIGHT is done");
                    });
                }
            })

            ;
    });


