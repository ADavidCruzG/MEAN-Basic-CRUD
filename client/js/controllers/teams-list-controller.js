/**
 * Created by David Cruz on 10/06/2017.
 */
'use strict';

angular.module('teams').controller('TeamListController',
    function ($scope, $rootScope, TeamService, toaster, $stateParams, $state, SweetAlert) {

        $scope.start = function () {
            $scope.$state = $state;
            $scope.teamsList = [];
            $scope.setDefaultFilters();
            $scope.getAllTeams();
        };

        $scope.getAllTeams = function () {

            TeamService.getAllTeams()
                .then(function (res) {
                    var teams = res.data;
                    $scope.total = teams.length;

                    if (teams.length > 0) {
                        for (var i = 0; i < teams.length; i++) {
                            $scope.teamsList.push(teams[i]);
                        }
                    }
                })
                .catch(function (err) {
                    console.log(err);
                });
        };

        $scope.deleteTeam = function (team) {

            SweetAlert.swal({
                    title: '¿Desea eliminar el equipo ' + team.name + '?',
                    text: 'Esta acción no se puede deshacer',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Si, eliminar',
                    cancelButtonText: 'No, cancelar',
                    closeOnConfirm: true,
                    closeOnCancel: true
                },
                function (isConfirm) {
                    if (isConfirm) {
                        TeamService.deleteTeam(team._id)
                            .then(function (res) {
                                console.log(res);
                                toaster.pop({
                                    type: 'success',
                                    title: 'Proceso exitoso',
                                    body: 'Se eliminó exitosamente el equipo ' + res.data.name,
                                    timeout: 4000,
                                    showCloseButton: true
                                });
                                $scope.start();
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
                            });
                    }
                });
        };

        $scope.setDefaultFilters = function () {
            $scope.filterName = 'name';
            $scope.filterFoundation = 'foundationYear';
            $scope.filterNickname = 'nickname';
            $scope.filterStadium = 'stadiumName';

            $scope.orderByFilter = $scope.filterName;
        };

        $scope.orderBy = function (orderParam) {
            $scope.reverse = ($scope.orderByFilter === orderParam) ? !$scope.reverse : false;
            $scope.orderByFilter = orderParam;
        };

        $scope.start();
    });