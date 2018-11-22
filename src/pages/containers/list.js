import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoLayout from '../components/todo-layout';
import TodoHead from '../../todo/components/todo-head';
import TodoList from '../../todo/components/todo-list';

import HandleError from '../../error/containers/handle-error';

class List extends Component {
  state = {
    totalTask: Object.keys(this.props.TodoList).length
  }
  handleAddTask = (event) => {
    event.preventDefault();
    this.props.dispatch ({
      type: 'ADD_TASK',
      payload: {
        id: (this.state.totalTask+1).toString(),
        name: this.input.value,
      }
    })
    this.setState({
      totalTask: this.state.totalTask+1
    })
  }
  handleRemoveTask = (id) => {
    this.props.dispatch ({
      type: 'REMOVE_TASK',
      payload: {
        id: parseInt(id)
      }
    })
  }
  setInputRef = element => {
    this.input = element;
  }
  setSpanRef = element => {
    this.span = element;
  }
  render() {
    return (
      <HandleError>
        <TodoLayout>
          <TodoHead
            handleAddTask={this.handleAddTask}
            setRef={this.setInputRef}
          />
          <TodoList
            handleChecked={this.handleChecked}
            setRef={this.setSpanRef}
            list={this.props.TodoList}
            handleRemoveTask={this.handleRemoveTask}
          />
        </TodoLayout>
      </HandleError>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    TodoList: state.List
  }
}

export default connect(mapStateToProps)(List);
