//@ts-check

const Benchmark = require('benchmark');

const query = '';
const list = [];

const suite = new Benchmark.Suite();
suite
  .add('Empty#Fuse', () => {
    const Fuse = require('fuse.js');
    const fuse = new Fuse(list, {});
    fuse.search(query);
  })
  .add('Empty#Fuzzysort', () => {
    const fuzzysort = require('fuzzysort');
    fuzzysort.go(query, list);
  })
  .add('Empty#Fuzzaldrin', () => {
    const fuzzaldrin = require('fuzzaldrin');
    fuzzaldrin.filter(list, query);
  })
  .add('Empty#Fuzzy', () => {
    const fuzzy = require('fuzzy');
    fuzzy.filter(query, list);
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('error', e => {
    throw e.target.error;
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ async: true });
