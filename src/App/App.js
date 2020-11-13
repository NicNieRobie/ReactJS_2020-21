import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import '../TaskList/taskList.scss';
import TaskAdd from "../TaskAdd/TaskAdd";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";
import { connect } from 'react-redux';
import { addTask, completeTask, setVisibilityFilter, VisibilityFilters } from '../actions';

class App extends React.Component {
    state = {
        theme: 'purple'
    }

    changeTheme() {
        if (this.state.theme === 'purple') {
            this.setState(() => ({
                theme: 'blue'
            }));
        } else {
            this.setState(() => ({
                theme: 'purple'
            }));
        }
    }

    render() {
        const { dispatch, visibleTasks, visibilityFilter} = this.props;
        return (
            <div className={`content ${this.state.theme === 'purple' ? 'theme-purple' : 'theme-blue'}`}>
                <div className="header">
                    <h1>Simple Task Manager</h1>
                </div>
                <div className="main">
                    <TaskAdd onAddClick={(name, desc) =>
                        dispatch(addTask(name, desc))
                    }/>
                    <div id = "tasks-list-header"><h2>Tasks</h2></div>
                    <hr/>
                    <div className='taskList'>
                        <TaskList tasks = {visibleTasks} changeCompletion = {index => dispatch(completeTask(index))}/>
                    </div>
                </div>
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter =>
                        dispatch(setVisibilityFilter(nextFilter))
                    }
                    onThemeChange={() => this.changeTheme()}
                />
            </div>
        )
    }
}

App.propTypes = {
    visibleTasks: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })),
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
};

function selectTodos(tasks, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return tasks;
        case VisibilityFilters.SHOW_COMPLETED:
            return tasks.filter(task => task.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return tasks.filter(task => !task.completed);
    }
}

function select(state) {
    return {
        visibleTasks: selectTodos(state.tasks, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}

export default connect(select)(App);
