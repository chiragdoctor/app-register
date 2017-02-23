angular.module('RegisterApp', ['ngRoute', 'ngResource']);

angular.module('RegisterApp').config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
            when('/', {templateUrl: '/partials/register', controller: 'registerCtrl'});
});


angular.module('RegisterApp').controller('registerCtrl', function ($scope) {
    $scope.name =   'Chirag Doctor';
});
