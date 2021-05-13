import { yupResolver } from '@hookform/resolvers/yup';
import { Button, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PasswordForm from './passwordForm';
import TextForm from './textForm';
LoginForm.propTypes = {
	clickSubmit: PropTypes.func.isRequired,
	fail: PropTypes.string,
};
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& .MuiTextField-root': {
			marginBottom: theme.spacing(1),
			width: '90%',
		},
	},
	buttonLogin: {
		background: '#3f51b5',
		color: 'white',
		'&:hover': {
			background: '#303f9f',
		},
		margin: theme.spacing(3),
	},
}));
function LoginForm(props) {
	const { fail } = props;
	const classes = useStyles();
	const schema = yup.object().shape({
		email: yup.string().email('Please enter your email').required('Please enter your email'),
		password: yup
			.string()
			.required('Please enter your password')
			.min(6, 'Please enter at least six characters'),
	});
	const form = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(schema),
	});
	const submitClick = (values) => {
		const { clickSubmit } = props;
		clickSubmit(values);
	};
	return (
		<form className={classes.root} onSubmit={form.handleSubmit(submitClick)}>
			<TextForm form={form} name='email' label='Email' fail={fail === 'name' ? true : false}></TextForm>
			<PasswordForm
				form={form}
				name='password'
				label='Password'
				fail={fail === 'password' ? true : false}
			></PasswordForm>
			<Button className={classes.buttonLogin} type='submit' color='primary' fullWidth>
				Done
			</Button>
		</form>
	);
}

export default LoginForm;
