import Team from './js/Team.js';
import Character from './js/Character.js';

const team = new Team();
const john = new Character('John');
const jane = new Character('Jane');

team.addAll(john, jane);
console.log(team.toArray());