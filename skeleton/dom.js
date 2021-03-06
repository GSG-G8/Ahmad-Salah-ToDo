// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application

(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener
    todoNode.addEventListener('click',()=>{
      var newState = todoFunctions.markTodo(state, todo.id);
      //console.log(newState)
      update(newState);
    })


    // add span holding description
    var desc = document.createElement('span');
    desc.textContent=todo.description
    todoNode.appendChild(desc);
    if(todo.done) todoNode.classList.toggle("checked")

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    deleteButtonNode.textContent="Delete"
    // aDd classes for css
    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      var description = document.getElementById("description"); // event.target ....
      event.preventDefault();
         const newTodo = {id: todoFunctions.generateId(),description: description.value,done: false,}
         const newState = todoFunctions.addTodo(state, newTodo);
        //  console.log(newState)
         update(newState);  
      });
    }
      
   
  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };
  if (container) renderState(state);
  // todoFunctions.sortTodos(state,'id')
})();
