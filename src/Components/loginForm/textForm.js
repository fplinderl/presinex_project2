import { InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { AccountCircle } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
TextForm.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	form: PropTypes.object.isRequired,
	fail: PropTypes.bool,
};
const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(3),
		padding: theme.spacing(1),
	},
}));
function TextForm(props) {
	const { form, name, label, fail } = props;
	const classes = useStyles();
	const {
		formState: { errors },
	} = form;
	return (
		<Controller
			name={name}
			control={form.control}
			fullWidth
			render={({ field }) => (
				<TextField
					{...field}
					className={classes.margin}
					label={label}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<AccountCircle />
							</InputAdornment>
						),
					}}
					error={fail || !!errors[name]}
					helperText={
						fail
							? 'There is no user record corresponding to this identifier. The user may have been deleted.'
							: errors[name]
							? errors[name].message
							: '1st.loclau@gmail.com'
					}
				/>
			)}
		/>
	);
}
export default TextForm;
