/**
 * Created by David Cruz on 10/06/2017.
 */
'use strict';

var teamsModule = angular.module('teams', [])
    .config(function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
        teamsModule.controller = $controllerProvider.register;
        teamsModule.directive = $compileProvider.directive;
        teamsModule.filter = $filterProvider.register;
        teamsModule.factory = $provide.factory;
        teamsModule.service = $provide.service;
        teamsModule.constant = $provide.constant;
        teamsModule.value = $provide.value;
    });