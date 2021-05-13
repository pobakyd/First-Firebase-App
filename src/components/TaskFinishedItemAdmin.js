import React from 'react'
import {connect} from 'react-redux'
import {tasksCompletedRef} from '../firebase'

import * as actions from '../actions/index'
import * as notifications from '../constants/Notification'

const mapDispatchToProps = (dispatch, ownProps) => ({
    openNotify: ({title, content}) => dispatch(actions.actOpenNotify({title, content}))
})

const connector = connect(null, mapDispatchToProps)

class TasksDoing extends React.Component {
	handleDeleteTask = (key) => {
		tasksCompletedRef.child(key).remove()
		this.props.openNotify({
            title: notifications.DELETE_TASK_TITLE,
            content: notifications.DELETE_TASK_MESSAGE
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
                <button type="button" className="btn btn-danger btn-xs" onClick={() => this.handleDeleteTask(key)}>Delete</button>
            </li>
		);
	}
}


export default connector(TasksDoing);
