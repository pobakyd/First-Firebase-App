import React from 'react'
import {connect} from 'react-redux'
import TaskDoingItem from './TaskDoingItem'
import {tasksRef} from '../firebase'
import * as notifications from '../constants/Notification'

const mapStateToProps = (state) => ({
    notify: state.notify,
    userInfo: state.user.userInfo
})

const connector = connect(mapStateToProps)

class TasksDoing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            task: ''
        }
    }
    
    componentDidMount() {
        tasksRef.on('value', data => {
            let tasksData = []
            const tasks = data.val()
            for(const key in tasks){
                tasksData.push({
                    key, 
                    task: tasks[key]
                })
            }
            this.setState({tasks: tasksData})
        })   
    }

    handleChange = (e) => {
        this.setState({task: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        tasksRef.push({
            content: this.state.task,
            user: this.props.userInfo.email
        })
        this.props.openNotify({
            title: notifications.ADD_TASK_TITLE,
            content: notifications.ADD_TASK_MESSAGE
        })
        this.setState({
            task: ''
        })
    }
    
	render(){
		return (
			<div className="card">
                <div className="card-header bg-info">
                    <h3>Tasks Doing</h3>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {this.state.tasks.map((task,idx) => <TaskDoingItem taskData={task} key={"MyKey" + idx}/>)}
                    </ul>
                </div>
                <div className="card-footer">
                    <form className="form-inline float-right" method="get" onSubmit={this.handleSubmit}>
                        <div className="form-group mr-2">
                            <input type="text" name="task" className="form-control" placeholder="Task" value={this.state.task} onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-info">Add</button>
                    </form>
                </div>
            </div>
		);
	}
}


export default connector(TasksDoing);
