import React from 'react';
import './TaskAdd.css'

class TaskAdd extends React.Component {
    render() {
        return (
            <div className="add">
                <form>
                    <input className = "nameInput" ref={(a) => this.nameValue = a}
                           placeholder="Enter task name">
                    </input><br/>
                    <input className = "descInput" ref={(a) => this.descValue = a}
                           placeholder="Enter task description">
                    </input><br/>
                    <button className="addButton" type="button" onClick={(e) => this.props.addItem(e, this.nameValue, this.descValue)}>Add task</button>
                </form>
            </div>
        );
    }
}

export default TaskAdd;