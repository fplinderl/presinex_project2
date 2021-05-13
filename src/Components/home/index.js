import React from 'react';
import Left from '../left';
import Mid from '../mid';
import Right from '../right';
import './index.css';
function Home(props) {
	return (
		<div className='body'>
			<Left></Left>
			<Mid></Mid>
			<Right></Right>
		</div>
	);
}
export default Home;
