//@ts-check

const Benchmark = require('benchmark');
const Fuse = require('fuse.js');

const list = [{ name: 'Mario' }, { name: 'Sam' }];
var options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1
  // keys: ['title', 'author.firstName']
};
var fuseInstance = new Fuse(list, options); // "list" is the item array

const suite = new Benchmark.Suite();
suite
  .add('Start#Chained', () => {
    fuseInstance.search('Ma');
  })
  .add('Start#NewInstance', () => {
    var fuse = new Fuse(list, options); // "list" is the item array
    fuse.search('Ma');
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ async: true });
