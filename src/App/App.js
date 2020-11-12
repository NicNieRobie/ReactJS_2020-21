import React from 'react';
import './App.css';
import TaskAdd from "../TaskAdd/TaskAdd";
import TaskList from "../TaskList/TaskList";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.changeCompletion = this.changeCompletion.bind(this);
    }

    addItem = (e, nameValue, descValue) => {
        if (nameValue.value !== "" && descValue.value !== "") {
            let newTask = {
                key: Date.now(),
                id: this.state.tasks.length + 1,
                name: nameValue.value,
                desc: descValue.value,
                completed: false
            };

            this.setState((prevState) => {
                return {
                    tasks: prevState.tasks.concat(newTask)
                };
            });
        }

        if (e !== undefined) {
            e.preventDefault();
        }
    }

    deleteItem = (index) => {
        const newTasks = [...this.state.tasks];
        newTasks.splice(index, 1);
        this.setState({tasks: newTasks});
    }

    changeCompletion = (index) => {
        const newTasks = [...this.state.tasks];
        newTasks[index].completed = !newTasks[index].completed;
        this.setState({newTasks});
    }


    render() {
        return (
            <div className="main">
                <TaskAdd addItem = {this.addItem.bind(this)}/>
                <div id = "tasks-list-header"><h2>Tasks</h2></div>
                <hr/>
                <TaskList tasks = {this.state.tasks} changeCompletion = {this.changeCompletion.bind(this)} deleteItem = {this.deleteItem.bind(this)}/>
            </div>
        )
    }
}


export default App;
