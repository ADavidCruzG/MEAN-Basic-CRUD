/**
 * Created by David Cruz on 10/06/2017.
 */
'use strict';

angular.module('teams')
    .factory('TeamService', function ($http, globalConfig) {
        var url = '';
        return {
            createTeam: function (teamToCreate) {
                url = globalConfig.apiAddress + '/teams';
                return $http.post(url, teamToCreate);
            },
            getAllTeams: function () {
                url = globalConfig.apiAddress + '/teams';
                return $http.get(url);
            },
            getTeamById: function (id) {
                url = globalConfig.apiAddress + '/teams/' + id;
                return $http.get(url);
            },
            updateTeam: function (teamId, teamToUpdate) {
                url = globalConfig.apiAddress + '/teams/' + teamId;
                return $http.put(url, teamToUpdate);
            },
            deleteTeam: function (id) {
                url = globalConfig.apiAddress + '/teams/' + id;
                return $http.delete(url);
            }
        };
    });