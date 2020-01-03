import React from 'react';
import './App.css';

const listOfTodo = [
  {
    id: 1,
    description: "Buy a bottle of milk",
    done: true,
  },
  {
    id: 2,
    description: "Practice english",
    done: false,
  },
  {
    id: 3,
    description: "Go to the gym",
    done: false,
  },
]

let getStatus = (todo) => (todo.done) ? "DONE" : "TODO";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: listOfTodo,
    }

    this.onDismiss = this.onDismiss.bind(this);
    this.onDone = this.onSwitch.bind(this);
  };

  onSwitch (id) {
    const updateTodos = this.state.todos.map(item => {
      if (item.id !== id) {
        return item;
      } else {
        item.done = !item.done;
        return item;
      }
    });
    this.setState({todos: updateTodos});
  };

  onDismiss (id) {
    console.log("clicked on user with id " + id);
    const updateTodos = this.state.todos.filter(item => item.id !== id);
    this.setState({todos: updateTodos});
  };

  render () {
   return (
      <div className="App">
      <h1>My ToDo list</h1>
      {
      /*
         - function() {} is equivalent to () => {}
         - with one parameter we can remove (): item => {} is OK
         - Finally we can remove { return ... } with ES6 and it returns what we have
           after the arrow.
      */
      this.state.todos.map(item =>
         <div>
           <span>[{getStatus(item)}] </span>
           <span>{item.description} </span>
           <span>
             <button onClick={() => this.onSwitch(item.id)}
                     type = "button">
                Done/Todo switch
             </button>
           </span>
           <span>
             <button onClick={() => this.onDismiss(item.id)}
                     type = "button">
                Dismiss
             </button>
           </span>
         </div>
       )
     }
     </div>
   );
  }
}

export default App;
