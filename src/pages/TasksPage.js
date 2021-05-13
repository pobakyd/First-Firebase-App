import React from 'react'
import {Redirect} from 'react-router-dom'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import TasksDoing from '../components/TasksDoing'
import TasksFinished from '../components/TasksFinished'
import {connect} from 'react-redux'
import * as actions from '../actions/index'

const mapStateToProps = (state) => ({
    isLogin: state.user.isLogin
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    openNotify: ({title, content}) => dispatch(actions.actOpenNotify({title, content}))
})

const connector = connect(mapStateToProps, mapDispatchToProps)

class TasksPage extends React.Component {
    
	render(){
        const {isLogin, openNotify} = this.props

        if(!this.props.isLogin){
            return <Redirect
                        to={{
                            pathname: "/signin",
                        }}
                    />
        }

		return (
		    <div>
                <Header/>
                <div className="row">
                    <div className="col col-lg-2">
                        <Navigation isLogin={isLogin}/>
                    </div>
                    <div className="col col-lg-10">
                        <div className="row">
                            <div className="col col-lg-6">
                                <TasksDoing openNotify={openNotify}/>
                            </div>
                            <div className="col col-lg-6">
                                <TasksFinished openNotify={openNotify}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}


export default connector(TasksPage);