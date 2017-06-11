/**
 * Created by David Cruz on 10/06/2017.
 */
'use strict';

angular.module('teams')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/views/home-view.html'
        }).state('teams_create', {
            url: '/teams/create',
            templateUrl: '/views/teams-create-view.html',
            controller: 'TeamCreateController'
        }).state('teams_list', {
            url: '/teams/list',
            templateUrl: '/views/teams-list-view.html',
            controller: 'TeamListController'
        }).state('teams_edit', {
            url: '/teams/:id/edit',
            templateUrl: '/views/teams-edit-view.html',
            controller: 'TeamEditController'
        });
    })
    .constant('globalConfig', {
        apiAddress: 'http://localhost:3000/api'
    });