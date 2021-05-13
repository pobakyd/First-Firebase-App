import React from 'react'
import {connect} from 'react-redux'

import TaskFinishedItem from './TaskFinishedItem'
import TaskFinishedItemAdmin from './TaskFinishedItemAdmin'
import {tasksCompletedRef} from '../firebase'
import * as notifications from '../constants/Notification'

const mapStateToProps = (state) => ({
    isAdmin: state.user.userInfo.isAdmin
})

const connector = connect(mapStateToProps)

class TasksDoing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasksFinished: []
        }
    }

    componentDidMount() {
        tasksCompletedRef.on('value', (data) => {
            let tasksFinishedData = []
            const tasksFinished = data.val()
            for (const key in tasksFinished){
                tasksFinishedData.push({
                    key, 
                    task: tasksFinished[key]})
            }
            this.setState({tasksFinished: tasksFinishedData})
        })
    }

    handleClearAllTask = () => {
        tasksCompletedRef.remove()
        this.props.openNotify({
            title: notifications.CLEAR_TASK_TITLE,
            content: notifications.CLEAR_TASK_MESSAGE
        })
    }

    renderTaskFinishedItem = (isAdmin) => {
        if(isAdmin) {
            return this.state.tasksFinished.map((task,idx) => <TaskFinishedItemAdmin taskData={task} key={"MyKey" + idx}/>)
        }
        else{
            return this.state.tasksFinished.map((task,idx) => <TaskFinishedItem taskData={task} key={"MyKey" + idx}/>)
        }
    }

    renderClearAllButton = (isAdmin) => {
        if(isAdmin) {
            return <button type="submit" className="btn btn-danger float-right" onClick = {this.handleClearAllTask}>Clear All</button>
        }
        else{
            return null
        }
    }

	render(){
		return (
			<div className="card">
                <div className="card-header bg-danger">
                    <h3>Tasks Finished</h3>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {this.renderTaskFinishedItem(this.props.isAdmin)}
                    </ul>
                </div>
                <div className="card-footer">
                    {this.renderClearAllButton(this.props.isAdmin)}
                </div>
            </div>
		);
	}
}


export default connector(TasksDoing);
