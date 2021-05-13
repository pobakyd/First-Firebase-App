import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'
import TasksPage from '../pages/TasksPage'
import UserPage from '../pages/UserPage'

const routes = [
	{path: '/', exact: true, main: TasksPage},
	{path: '/signin', exact: true, main: SignInPage},
	{path: '/signup', exact: true, main: SignUpPage},
	{path: '/tasks', exact: true, main: TasksPage},
	{path: '/user', exact: true, main: UserPage}
]

function App() {
	return (
		<Router>
			<div className="App">
				<div className="container">
					<Switch>
						{routes.map((route,index) => <Route path={route.path} exact={route.exact} component={route.main} key={"MyKey" + index}></Route>)}
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
