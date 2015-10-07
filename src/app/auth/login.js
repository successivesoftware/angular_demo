angular.module( 'ngBoilerplate.login', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'login', {
            url: '/login',
            views: {
                "main": {
                    controller: 'LoginCtrl',
                    templateUrl: 'auth/login.tpl.html'
                }
            },
            data:{ pageTitle: 'Login' }
        });
    })

    .controller( 'LoginCtrl', function LoginCtrl( $scope ) {
        // This is simple a demo for UI Boostrap.

    })

;
