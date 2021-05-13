import React from 'react'
import {connect} from 'react-redux'
import {firebaseApp} from '../firebase'
import * as actions from '../actions/index'
import * as notifications from '../constants/Notification'

const mapDispatchToProps = (dispatch, ownProps) => ({
    openNotify: ({title, content}) => dispatch(actions.actOpenNotify({title, content}))
})

const connector = connect(null, mapDispatchToProps)

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '', 
            password: '', 
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        const {email, password} = this.state
        e.preventDefault() 
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                this.props.openNotify({
                    title: notifications.SIGNIN_SUCCESSFUL_TITLE, 
                    content: notifications.SIGNIN_SUCCESSFUL_MESSAGE
                })
            })
            .catch(err => {
                this.props.openNotify({
                    title: notifications.SIGNIN_FAIL_TITLE, 
                    content: err.message
                })
            });
    }
	render(){
		return (
			<div className="card">
                <div className="card-header bg-info">
                    <h3>Sign in</h3>
                </div>
                <div className="card-body">
                    <form method="get" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email" className="col-lg-2"><strong>Email</strong></label>
                            <div className="col-lg-6 d-inline-block">
                                <input id="email" className="form-control" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="col-lg-2"><strong>Password</strong></label>
                            <div className="col-lg-6 d-inline-block">
                                <input id="password" className="form-control" type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="offset-lg-2 form-group">
                            <div className="col-lg-6 pl--lg-20px">
                                <button type="submit" className="btn btn-success">Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
		);
	}
}


export default connector(SignIn);
