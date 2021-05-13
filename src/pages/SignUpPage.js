import React from 'react'
import {Redirect} from 'react-router-dom'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import SignUp from '../components/SignUp'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    isLogin: state.user.isLogin
})

const connector = connect(mapStateToProps)

class SignUpPage extends React.Component {
    
	render(){
        const {isLogin} = this.props 

        if(this.props.isLogin){
            return <Redirect
                        to={{
                            pathname: "/user",
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
                        <SignUp/>
                    </div>
                </div>
            </div>
		);
	}
}


export default connector(SignUpPage);