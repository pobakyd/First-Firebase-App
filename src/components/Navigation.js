import React from 'react'
import {NavLink} from 'react-router-dom'

class Navigation extends React.Component {

    createMenus(){
        let menus = [
            {to: '/tasks', name: 'Tasks'}
        ]
        if(this.props.isLogin){
            menus.push({to: '/user', name: 'User'})
        }
        else{
            menus.push(
                {to: 'signup', name: 'Signup'}, 
                {to: 'signin', name: 'Signin'}
            )
        }
        return menus
    }
	render(){
		return (
			<ul className="list-group">
                {this.createMenus().map((menu,idx) => <NavLink className="list-group-item" to={menu.to} key={"MyKey" + idx}>{menu.name}</NavLink>)}
            </ul>
		);
	}
}


export default Navigation;
