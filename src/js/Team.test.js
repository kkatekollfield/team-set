import Team from './Team.js';
import Character from './Character.js';

describe('Team', () => {
    let team;
    let char1;
    let char2;

    beforeEach(() => {
        team = new Team();
        char1 = new Character('John');
        char2 = new Character('Jane');
    });

    test('add добавляет персонажа в команду', () => {
        team.add(char1);
        expect(team.members.has(char1)).toBe(true);
    });

    test('add бросает ошибку при повторном добавлении', () => {
        team.add(char1);
        expect(() => team.add(char1)).toThrow('Character already exists in the team');
    });

    test('addAll добавляет нескольких персонажей', () => {
        team.addAll(char1, char2);
        expect(team.members.size).toBe(2);
    });

    test('addAll не бросает ошибку при дубликате', () => {
        team.add(char1);
        expect(() => team.addAll(char1, char2)).not.toThrow();
        expect(team.members.size).toBe(2);
    });

    test('toArray возвращает массив', () => {
        team.addAll(char1, char2);
        const arr = team.toArray();
        expect(Array.isArray(arr)).toBe(true);
        expect(arr).toHaveLength(2);
    });
});