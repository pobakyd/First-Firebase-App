import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import * as notifications from '../constants/Notification'
import {AlertContainer, Alert} from 'react-bs-notifier'

const mapStateToProps = (state) => ({
    type: state.notify.title,
    isShow: state.notify.isShow
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    closeNotify: () => dispatch(actions.actCloseNotify())
})

const connector = connect(mapStateToProps, mapDispatchToProps)

class Header extends React.Component {
    handleDismiss = () => {
        this.props.closeNotify()
    }

    checkTypeNotification = (type) => {
        switch (type) {
            case notifications.ADD_TASK_TITLE:
                return 'info'
            case notifications.COMPLETE_TASK_TITLE:
                return 'warning'
            case notifications.SIGNIN_FAIL_TITLE:
            case notifications.SIGNUP_FAIL_TITLE:
            case notifications.DELETE_TASK_TITLE:
            case notifications.CLEAR_TASK_TITLE:
                return 'danger'
            case notifications.SIGNIN_SUCCESSFUL_TITLE:
            case notifications.SIGNUP_SUCCESSFUL_TITLE:
                return 'success'
            default:
                break;
        }
    }

	render(){
        if(!this.props.isShow) return null
        const {title, content} = this.props
		return (
			<AlertContainer position="top-right">
                <Alert type={this.checkTypeNotification(this.props.type)} timeout={3000} onDismiss={this.handleDismiss} headline={title}>
                    {content}
                </Alert>
            </AlertContainer>
		);
	}
}


export default connector(Header);
