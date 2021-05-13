import React from 'react'
import Notifier from './Notifier'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    notify: state.notify
})

const connector = connect(mapStateToProps, null)

class Header extends React.Component {
	render(){
		const {isShow, title, content} = this.props.notify
		const notifyEle = isShow ? <Notifier title={title} content={content} /> : null
		return (
			<div className="pb-2 mt-4 mb-4 border-bottom page-header">
				{notifyEle}
				<h1 className="pb-1 pt-1">Project - Firebase Application<small className="text-muted"> ReactJS </small></h1>
			</div>
		);
	}
}


export default connector(Header);
