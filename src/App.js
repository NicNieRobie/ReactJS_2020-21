import React from 'react';
import './App.css';
import './styles.css';



class App extends React.Component {
  state = {
    tasks: [
    {
      id: 1,
      name: 'Task 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper vel mi eget varius.',
      completed: true
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'Pellentesque porttitor quam in tincidunt aliquet.',
      completed: false
    },
    {
      id: 3,
      name: 'Task 3',
      description: 'Etiam dapibus rutrum lectus, eu rhoncus ex lacinia sit amet.',
      completed: true
    }
    ]
  }

  render() {
    return (
      this.state.tasks.map((task) => (
      <div class = "task">
        <h2 class = "task-header">{task.name}</h2>
        <div class = "description">
          <p>{task.description}</p>
        </div>
        <span class="status">Completed: {task.completed.toString()}</span>
        <div class = "completion-button">
          <button onClick={() => console.log("Task: " + task.name + " completed status = " + task.completed.toString())}>Change completion status</button>
        </div>
      </div>
      ))
    );
  }
}

export default App;
