import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../loginForm';
import { login } from './userSlice';
function Login(props) {
	const [fail, setFail] = useState('no');
	const dispatch = useDispatch();
	const handleSubmit = async (values) => {
		try {
			const action = login(values);
			const resultAction = await dispatch(action);
			const data = unwrapResult(resultAction);
			if (data.code === 'auth/wrong-password') {
				setFail('password');
			}
			if (data.code === 'auth/user-not-found') {
				setFail('name');
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<LoginForm clickSubmit={handleSubmit} fail={fail}></LoginForm>
		</div>
	);
}

export default Login;
