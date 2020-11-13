import React, { findDOMNode } from 'react';
import PropTypes from 'prop-types';
import './TaskAdd.scss'

class TaskAdd extends React.Component {
    constructor(props) {
        super(props);
        this.wrapperName = React.createRef();
        this.wrapperDesc = React.createRef();
    }

    render() {
        return (
            <div className="add">
                <input className = "nameInput" placeholder="Enter task name" ref ={this.wrapperName}>
                </input><br/>
                <input className = "descInput" placeholder="Enter task description" ref ={this.wrapperDesc}>
                </input><br/>
                <button className="addButton" type="button" onClick={(e) => this.handleClick(e)}>Add task</button>
            </div>
        );
    }

    handleClick(e) {
        const name = this.wrapperName.current.value.trim();
        const desc = this.wrapperDesc.current.value.trim();
        this.props.onAddClick(name, desc);
    }
}

TaskAdd.propTypes = {
    onAddClick: PropTypes.func.isRequired
};

export default TaskAdd;