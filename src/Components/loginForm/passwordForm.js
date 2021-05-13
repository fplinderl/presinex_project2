import { IconButton, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
PasswordForm.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	fail: PropTypes.bool,
	form: PropTypes.object.isRequired,
};
const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(3),
		padding: theme.spacing(1),
	},
	icon_button: {
		'&:hover': {
			background: 'rgb(0 0 0 / 0%) !important',
		},
	},
}));
function PasswordForm(props) {
	const { name, label, form, fail } = props;
	const {
		formState: { errors },
	} = form;
	const classes = useStyles();
	const [values, setValues] = React.useState({
		showPassword: false,
	});
	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};
	return (
		<Controller
			name={name}
			control={form.control}
			fullWidth
			render={({ field }) => (
				<TextField
					{...field}
					type={values.showPassword ? 'text' : 'password'}
					className={classes.margin}
					label={label}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<LockIcon />
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position='end'>
								<IconButton
									className={classes.icon_button}
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
								>
									{values.showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						),
					}}
					error={fail || !!errors[name]}
					helperText={
						fail
							? 'The password is invalid or the user does not have a password.'
							: errors[name]
							? errors[name].message
							: 'thanhloc'
					}
				/>
			)}
		/>
	);
}

export default PasswordForm;
