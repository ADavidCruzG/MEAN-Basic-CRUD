/**
 * Created by David Cruz on 10/06/2017.
 */
'use strict';

angular.module('teams')
    .controller('TeamCreateController', function ($scope, $rootScope, TeamService, $state, toaster) {

        $scope.start = function () {
            $scope.team = {};
            $scope.currentYear = new Date().getFullYear();
        };

        $scope.createTeam = function () {
            var teamToCreate = $scope.team;

            TeamService.createTeam(teamToCreate)
                .then(function () {
                    toaster.pop({
                        type: 'success',
                        title: 'Proceso exitoso',
                        body: 'El equipo se creó exitosamente',
                        timeout: 4000,
                        showCloseButton: true
                    });
                    $state.go('teams_list');
                })
                .catch(function (err) {
                    console.log(err);
                });
        };

        $scope.start();
    });