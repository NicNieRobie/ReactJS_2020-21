import React from "react";
import Task from "../Task/Task";

class TaskList extends React.Component {

    render() {
        return (this.props.tasks.map((taskItem, index) => <Task task = {taskItem} changeCompletion = {() => this.props.changeCompletion(index)} deleteItem = {() => this.props.deleteItem(index)}/>));
    }
}

export default TaskList;