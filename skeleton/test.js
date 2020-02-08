//var test = require('tape');
var logic = require('./logic');

// test('Example test', function(t) {
//   t.pass();
//   t.end();
// });
const todo_lest = [
  {id: 1,description: 'smash', done: false},
  {id: 0,description: 'smash avocados',done: true},
  {id: 2,description: 'make coffee',done: false}]

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


   test('genarateid must return unique id', function () {
    expect(logic.generateId()).not.toBe(logic.generateId());
   })
   
  
   test('delete todo must return arry without the todo you deleted', function () {
         expect(typeof(logic.deleteTodo(todo_lest,0))).toBe(typeof(logic.deleteTodo(todo_lest)));
         expect(logic.deleteTodo(todo_lest,0)).not.toEqual(logic.deleteTodo(todo_lest));
         expect(logic.deleteTodo(todo_lest,0)).toEqual(logic.deleteTodo([
          {id: 1,description: 'smash', done: false}
          ,{id: 2,description: 'make coffee',done: false}]          
          ));
   })
   
test('mark todo should return array done for the object id arg',()=>{
        actual=logic.markTodo(todo_lest,1)
        expected=[{id: 1,description: 'smash', done: true},{id: 0,description: 'smash avocados',done: true},{id: 2,description: 'make coffee',done: false}]
        expect(typeof(actual)).toBe(typeof(expected))
        expect(actual).toEqual(expected)
        expect(actual).not.toBe(expected)
})
   
test('sort function must return array of objects sortinfg by function you send', function(){
  actual=logic.sortTodos(todo_lest,"id")
  expected=[{id: 1,description: 'smash', done: false},{id: 0,description: 'smash avocados',done: true},{id: 2,description: 'make coffee',done: false}]
  expected2=[
    {id: 0,description: 'smash avocados',done: true},
    {id: 1,description: 'smash', done: false},
    {id: 2,description: 'make coffee',done: false}]
    expect(actual).not.toBe(expected)
    expect(actual).toEqual(expected)
  // expect(actual).toEqual(expected2)
  })
