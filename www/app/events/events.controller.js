
(function() {
    'use strict';

    angular
        .module('meetup')
        .controller('EventController', EventController);

    //EventController.$inject = [''];

    /* @ngInject */
    function EventController($window, $stateParams, $state) {
        var vm = this;
        vm.logout = logout;
        vm.name = $window.localStorage.getItem('name');
        //vm.events = $window.localStorage.getItem('events');
        //vm.events.push($stateParams.event);
        vm.events = $stateParams.events;
        console.log(vm.events);
        function logout() {
            $window.localStorage.clear();
            $state.go('home');
        }

    }
})();
