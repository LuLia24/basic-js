const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const checkType = members.filter((member) => typeof member === 'string');
  if (checkType.length === 0) {
    return false;
  }

  const firstLettersArr = checkType.map((member) => member.trim().split('')[0].toUpperCase());
  const teamName = firstLettersArr.sort().join('');
  return teamName;
}

module.exports = {
  createDreamTeam,
};
