
(function() {
    'use strict';

    angular
        .module('meetup')
        .controller('LoginController', LoginController);

    //LoginController.$inject = [''];

    /* @ngInject */
    function LoginController($window, $state) {
        var vm = this;
        vm.signup = signup;
        vm.login = login;
        vm.error = false;
        vm.signuperror = false;

        function login() {
                if($window.localStorage.getItem('email')) {
                    if((vm.login.email === $window.localStorage.getItem('email')) && (vm.login.password === $window.localStorage.getItem('password'))) {
                        $state.go('main');
                    }
                    else {
                      vm.error = true;
                    }
                }
                else {
                    vm.signuperror = true;
                }
                vm.login.email = '';
                vm.login.password = '';
        }

        function signup() {
            vm.signuperror = false;
            vm.error = false;
            $window.localStorage.setItem('name', vm.signupName);
            $window.localStorage.setItem('email', vm.signupEmail);
            $window.localStorage.setItem('password', vm.signupPassword);
            vm.signupName = '';
            vm.signupEmail = '';
            vm.signupPassword = '';
            $state.go('home.login');
        }
    }
})();
