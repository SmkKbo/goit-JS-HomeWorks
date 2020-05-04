import users from "./users.js";

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть
// отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users =>
  users
    .reduce((totalSkills, curr) => {
      return [...totalSkills, ...curr.skills];
    }, [])
    .reduce((unique, skill) => unique.includes(skill) ? unique : [...unique, skill], [] )
    .sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit',
//  'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]