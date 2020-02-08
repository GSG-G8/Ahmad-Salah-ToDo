//var test = require('tape');
var logic = require('./logic');

// test('Example test', function(t) {
//   t.pass();
//   t.end();
// });
const todo_lest = [{id: 1,description: 'smash', done: false},{id: 0,description: 'smash avocados',done: true},{id: 1,description: 'make coffee',done: false}]

test('add_todo() should return lest + the new obj.', function () {
  let actual = logic.addTodo(todo_lest,{
     id: 0,
     description: 'smash avocados',
     done: true,   
 });
 let expected = [...todo_lest,
   { id: 0,
   description: 'smash avocados',
   done: true,}];
   expect(actual).toEqual(expected);
   expect(actual).not.toBe(expected);

   });
 