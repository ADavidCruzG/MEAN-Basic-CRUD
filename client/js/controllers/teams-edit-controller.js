/**
 * Created by David Cruz on 10/06/2017.
 */
'use strict';

angular.module('teams')
    .controller('TeamEditController', function ($scope, $rootScope, TeamService, $state, $stateParams, toaster) {

        $scope.start = function () {
            $scope.team = {};
            $scope.currentYear = new Date().getFullYear();
            $scope.getTeam($stateParams.id);
        };

        $scope.getTeam = function (teamId) {
            TeamService.getTeamById(teamId)
                .then(function (res) {
                    $scope.team = res.data;
                })
                .catch(function (err) {
                    console.log(err);
                    toaster.pop({
                        type: 'error',
                        title: 'Error',
                        body: err.statusText,
                        timeout: 4000,
                        showCloseButton: true
                    });
                    $state.go('home');
                });
        };

        $scope.updateTeam = function () {
            var teamToUpdate = $scope.team;

            delete teamToUpdate._id;

            TeamService.updateTeam($stateParams.id, teamToUpdate)
                .then(function () {
                    toaster.pop({
                        type: 'success',
                        title: 'Proceso exitoso',
                        body: 'El equipo se actualizó exitosamente',
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