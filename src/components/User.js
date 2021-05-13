import React from 'react'
import {connect} from 'react-redux'
import {firebaseApp} from '../firebase'
import * as actions from '../actions/index'
import * as notifications from '../constants/Notification'

const mapStateToProps = (state) => ({
    userInfo: state.user.userInfo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    openNotify: ({title, content}) => dispatch(actions.actOpenNotify({title, content}))
})

const connector = connect(mapStateToProps, mapDispatchToProps)

class User extends React.Component {
    handleLogout = () => {
        firebaseApp.auth().signOut()
        this.props.openNotify({
            title: notifications.SIGNOUT_SUCCESSFUL_TITLE, 
            content: notifications.SIGNOUT_SUCCESSFUL_MESSAGE
        })
    }

	render(){
        const {uid, isAdmin, email, website} = this.props.userInfo
		return (
			<div className="card">
                <div className="card-header bg-info">
                    <h3>User Information</h3>
                </div>
                <div className="card-body">
                    <h5>UserID: <small className="text-primary"><i>{uid}</i></small></h5>
                    <h5>Email: <small className="text-primary"><i>{email}</i></small></h5>
                    <h5>Admin: <small className="text-primary"><i>{String(isAdmin)}</i></small></h5>
                    <h5>Website: <small className="text-primary"><i>{website}</i></small></h5>
                    <button type="button" className="btn btn-success" onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
		);
	}
}


export default connector(User);
