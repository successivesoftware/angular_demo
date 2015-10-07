/**
 * Created by successive on 7/10/15.
 */
angular.module( 'ngBoilerplate.signup', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'signup', {
            url: '/signup',
            views: {
                "main": {
                    controller: 'SignupCtrl',
                    templateUrl: 'auth/signup.tpl.html'
                }
            },
            data:{ pageTitle: 'Sign Up' }
        });
    })

    .controller( 'SignupCtrl', function SignupCtrl( $scope ) {
        // This is simple a demo for UI Boostrap.

    })

;
