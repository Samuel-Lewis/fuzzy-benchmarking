//@ts-check
const Fuse = require('fuse.js');

const list = [
  'Erika Lambert',
  'Jamiya Vincent',
  'Harley Preston',
  'Quinn Cardenas',
  'Lamar Duncan',
  'Jasper Golden',
  'Roberto Romero',
  'Laylah Jacobs',
  'Celeste Gardner',
  'Julia Velasquez',
  'Alyson Dickerson',
  'Chase Keller',
  'Houston Mullen',
  'Nikhil Johnston',
  'Dayanara Haas',
  'Mila Boyle',
  'Marlie Sampson',
  'Alden Bolton',
  'Gillian Cameron',
  'Peyton Mathews',
  'Stacy Daniel',
  'Virginia Shelton',
  'Mikayla Chavez',
  'Jessie Wilkinson',
  'Alvin Mcclure',
  'Alayna Collier',
  'Liam Fry',
  'Edward Farmer',
  'Maya Carney',
  'Deshawn Weaver',
  'Isabel House',
  'Elias Randall',
  'Kian Moreno',
  'Jose Petty',
  'Agustin Tucker',
  'Katelynn Flynn',
  'Georgia Terrell',
  'Daphne Howard',
  'Julian Fernandez',
  'Curtis Morris',
  'Miranda Gibson',
  'Mackenzie Lucero',
  'Clarence Barber',
  'Cyrus Moran',
  'Ahmed Trujillo',
  'Yusuf Pace',
  'Carley Mcclure',
  'Lindsey Simmons',
  'James Carey',
  'Ryland Young'
];

const query = 'Dj';

const fuse = new Fuse(list, {});
const result = fuse.search(query);
console.log(result);
