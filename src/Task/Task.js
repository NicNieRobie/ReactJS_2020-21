import React from 'react';
import './Task.css';

class Task extends React.Component {

    render() {

        return(
            <div className="task">
            <h2 className="task-header">{this.props.task.name}</h2>
                <hr/>
            <div className="description">
                <p>{this.props.task.desc}</p>
            </div>
            <span className="status">Completed: {this.props.task.completed.toString()}</span>
            <div className="completion-button">
                <button onClick={() => {this.props.changeCompletion()}}>
                    Change completion status
                </button>
            </div>
                <div className="deletion-button">
                    <button onClick={() => {this.props.deleteItem()}}>
                        Delete item
                    </button>
                </div>
        </div>
        );
    }
}

export default Task;