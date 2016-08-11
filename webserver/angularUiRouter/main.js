var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/home.html'
        })
        .state('photos', {
            url: '/photos',
            templateUrl: 'app/photos.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/about.html'
        })
        .state('about.page1', {
            url: '/about',
            templateUrl: 'app/about.html'
        })
        .state('about.page2', {
            url: '/about',
            templateUrl: 'app/about.html'
        })
        .state('about.page3', {
            url: '/about',
            templateUrl: 'app/about.html'
        })
});
