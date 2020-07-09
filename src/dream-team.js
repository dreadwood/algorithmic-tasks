module.exports = function createDreamTeam(members) {
  let message = false;
  
  if (Array.isArray(members)) {
    let possibleTeamName = members.reduce(function (teamName, item) {
      if (typeof(item) === 'string') {
        teamName.push(item.trim()[0].toUpperCase());
      }
      
      return teamName
    }, []);

    if (possibleTeamName !== []) {
      message = possibleTeamName.sort().join('');
    }
  }

  return message;
};