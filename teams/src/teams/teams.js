class newTeamService {
  newTeam(tname) {
    var team = {
      name: tname,
      users: []
    };
    return team;
  }
}

class newUserService {
  newUser(fname, lname) {
    var user = {
      first: fname,
      last: lname
    };
    return user;
  }
}

angular
  .module('teamsList', [])
  .service('newUserService', newUserService)
  .service('newTeamService', newTeamService)
  .component('teamsList', {
    templateUrl: 'teams/teams.html',
    controller: function TeamsController($scope, newUserService, newTeamService) {
      $scope.sort = '+name';

      $scope.teams = [
        // This is preloaded so there's something interesting to look at
        {
          name: "Awesomesauce",
          users: [
            {
              first: 'Mike',
              last: 'Smith'
            }, {
              first: 'Fred',
              last: 'McGeorge'
            }, {
              first: 'Jill',
              last: 'Daniels'
            }
          ]
        }, {
          name: "Super Cool",
          users: [
            {
              first: 'Roger',
              last: 'Rabbit'
            }, {
              first: 'Jessica',
              last: 'Rabbit'
            }, {
              first: 'Bugs',
              last: 'Bunny'
            }
          ]
        }];

      $scope.sortBy = function(sortVal) {
        $scope.sort = sortVal;
      };

      $scope.addTeam = function(teamName) {
        $scope.teams.push(
          newTeamService.newTeam(teamName)
        );
      };

      $scope.removeTeam = function(team) {
        const teamIndex = $scope.teams.indexOf(team);
        if (teamIndex > -1) {
          $scope.teams.splice(teamIndex, 1);
        }
      };

      $scope.addUser = function(team, newFirst, newLast) {
        const teamIndex = $scope.teams.indexOf(team);
        if (teamIndex > -1) {
          var newUser = newUserService.newUser(newFirst, newLast);
          $scope.teams[teamIndex].users.push(newUser);
        }
      };

      $scope.removeUser = function(team, user) {
        const teamIndex = $scope.teams.indexOf(team);
        if (teamIndex > -1) {
          const userIndex = $scope.teams[teamIndex].users.indexOf(user);
          if (userIndex > -1) {
            $scope.teams[teamIndex].users.splice(userIndex, 1);
          }
        }
      };
    }
  });
