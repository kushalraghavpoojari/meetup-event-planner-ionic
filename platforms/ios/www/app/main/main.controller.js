
(function() {
    'use strict';

    angular
        .module('meetup')
        .controller('MainController', MainController);

    //MainController.$inject = [''];

    /* @ngInject */
    function MainController($window, ionicDatePicker, $state) {
        var vm = this;
        vm.createEvent = createEvent;
        vm.name = $window.localStorage.getItem('name');
        vm.openStartDatePicker = openStartDatePicker;
        vm.openEndDatePicker = openEndDatePicker;
        vm.logout = logout;
        vm.events = [];
        var ipObj1 = {
          callback: function (val) {
            vm.startVal = moment(val).format('MMM Do YYYY');
          }
        };
        var ipObj2 = {
          callback: function (val) {
            vm.endVal = moment(val).format('MMM Do YYYY');
          }
        };
        function openStartDatePicker() {
            ionicDatePicker.openDatePicker(ipObj1);
        }
        function openEndDatePicker() {
            ionicDatePicker.openDatePicker(ipObj2);
        }

        function logout() {
            $window.localStorage.clear();
            $state.go('home');
        }

        function createEvent() {
            var event = {
                name: vm.eventName,
                type: vm.eventType,
                host: vm.eventHostName,
                start: vm.startVal,
                end: vm.endVal,
                guests: vm.eventGuestList,
                location: vm.eventLocation,
                message: vm.eventMessage
            };
            console.log(event);
            vm.eventName = '';
            vm.eventType = '';
            vm.eventHostName = '';
            vm.startVal = '';vm.endVal = '';
            vm.eventLocation = '';
            vm.eventMessage = '';
            vm.eventGuestList = '';
            //$state.go('events');
            vm.events.push(event);
            // console.log(vm.events);
            // $window.localStorage.setItem('events', vm.events);
            $state.go('events', {events: vm.events});
        }
    }
})();
