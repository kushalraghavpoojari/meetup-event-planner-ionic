(function() {

    'use strict';

    angular.module('meetup').config(configuration);

    function configuration($stateProvider, $urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/home.html'
            })
            .state('main', {
                url: '/main',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'mainVm'
            })
            .state('events', {
                url: '/events',
                templateUrl: 'app/events/events.html',
                 params: { events: undefined },
                controller: 'EventController',
                controllerAs: 'eventVm'
            })
            .state('home.login', {
            url: '/login',
            views: {
              'tab-login': {
                templateUrl: 'app/login/login.html',
                controller: 'LoginController',
                controllerAs: 'loginVm'
              }
            }
          })
          .state('home.signup', {
          url: '/signup',
          views: {
            'tab-signup': {
              templateUrl: 'app/login/signup.html',
              controller: 'LoginController',
              controllerAs: 'loginVm'
            }
          }
        });
        $urlRouterProvider.otherwise('/home/login');
    }
})();
