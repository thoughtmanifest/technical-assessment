class newTeamService {
  newTeam(tname) {
    const team = {
      name: tname,
      users: []
    };
    return team;
  }
}

class newUserService {
  newUser(fname, lname) {
    const user = {
      first: fname,
      last: lname
    };
    return user;
  }
}

function TeamsController(newUserService, newTeamService) {
  this.sort = '+name';

  this.teams = [
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

  this.sortBy = function (sortVal) {
    this.sort = ((sortVal === 'asc') ? '+name' : '-name');
  };

  this.addTeam = function (teamName) {
    if (teamName.length > 1) {
      this.teams.push(
        newTeamService.newTeam(teamName)
      );
    }
  };

  this.removeTeam = function (team) {
    const teamIndex = this.teams.indexOf(team);
    if (teamIndex > -1) {
      this.teams.splice(teamIndex, 1);
    }
  };

  this.addUser = function (team, newFirst, newLast) {
    const teamIndex = this.teams.indexOf(team);
    if (teamIndex > -1 && (newFirst.length > 1 || newLast.length > 1)) {
      const newUser = newUserService.newUser(newFirst, newLast);
      this.teams[teamIndex].users.push(newUser);
    }
  };

  this.removeUser = function (team, user) {
    const teamIndex = this.teams.indexOf(team);
    if (teamIndex > -1) {
      const userIndex = this.teams[teamIndex].users.indexOf(user);
      if (userIndex > -1) {
        this.teams[teamIndex].users.splice(userIndex, 1);
      }
    }
  };
}

angular
  .module('teams')
  .service('newUserService', newUserService)
  .service('newTeamService', newTeamService)
  .component('teamsList', {
    templateUrl: 'teams/teams.template.html',
    controller: TeamsController
  });
