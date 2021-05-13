import React from 'react'

class TasksDoing extends React.Component {
	render(){
		const {task} = this.props.taskData
		const {content, user} = task
		return (
			<li className="list-group-item">
                <p className="task">{content}</p>
				<span className="author">
					<span className="glyphicon glyphicon-user" aria-hidden="true" />
					<i className="fas fa-user"/>  {user}
				</span>
            </li>
		);
	}
}


export default TasksDoing;
