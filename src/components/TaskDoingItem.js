import React from 'react'
import {connect} from 'react-redux'
import {tasksRef, tasksCompletedRef} from '../firebase'
import * as actions from '../actions/index'
import * as notifications from '../constants/Notification'

const mapDispatchToProps = (dispatch, ownProps) => ({
    openNotify: ({title, content}) => dispatch(actions.actOpenNotify({title, content}))
})

const connector = connect(null, mapDispatchToProps)

class TaskDoingItem extends React.Component {
	handleCompleted = (key,task) => {
		tasksRef.child(key).remove() 
		tasksCompletedRef.push(task)
		this.props.openNotify({
            title: notifications.ADD_TASK_TITLE,
            content: notifications.ADD_TASK_MESSAGE
        })
	}

	render(){
		const {key, task} = this.props.taskData
		const {content, user} = task
		return (
			<li className="list-group-item">
                <p className="task">{content}</p>
				<span className="author">
					<span className="glyphicon glyphicon-user" aria-hidden="true" />
					<i className="fas fa-user"/>  {user}
				</span>
                <button type="button" className="btn btn-warning btn-xs" onClick={() => this.handleCompleted(key,task)}>Completed</button>
            </li>
		);
	}
}


export default connector(TaskDoingItem);
