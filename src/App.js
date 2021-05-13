import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Start from './Components/start';
import Home from './Components/home';
import { useSelector } from 'react-redux';

function App() {
	const loginUser = useSelector((state) => state.user.current);
	const isLogin = !!loginUser.email;
	return (
		<Switch>
			{!isLogin ? (
				<>
					<Redirect from='/' to='/' />
					<Route path='/' component={Start} exact />
				</>
			) : (
				<>
					<Redirect from='/' to='/home' />
					<Route path='/home' component={Home} exact />
				</>
			)}
		</Switch>
	);
}

export default App;
