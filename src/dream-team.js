import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam( members ) {
  
  if (typeof(members)!=='object') {
    return false
  }

  members.sort()
  
  let name = ''

  for (let i = 0; i < members[i]; i++) {
    if (typeof(members[i]) !== 'string') {
      continue
    }
    name+=members[i][0]
  }
  return name
}
