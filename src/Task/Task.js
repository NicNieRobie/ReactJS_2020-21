import React from 'react';
import classNames from 'classnames/bind';
import './Task.scss';
import styles from './Task.scss';
const cx = classNames.bind(styles);

class Task extends React.Component {

    render() {

        return(
            <div className={cx('container')}>
            <h2 className={cx('task-header')}>{this.props.task.name}</h2>
                <hr/>
            <div className={cx('description')}>
                <p>{this.props.task.desc}</p>
            </div>
            <span className={cx('status', {green: this.props.task.completed, red: !this.props.task.completed})}>Completed: {this.props.task.completed.toString()}</span>
            <div className={cx('completion-button')}>
                <button onClick={() => {this.props.changeCompletion()}}>
                    Change completion status
                </button>
            </div>
        </div>
        );
    }
}

export default Task;