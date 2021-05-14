import { yupResolver } from '@hookform/resolvers/yup';
import firebase from 'firebase/app';
import {
	Avatar,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	makeStyles,
	TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { db, storage } from '../../Firebase/conect';

Create.propTypes = {
	reLoad: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
	large: {
		width: theme.spacing(15),
		height: theme.spacing(15),
		margin: '5px auto',
	},
	mid: {
		width: theme.spacing(25),
		margin: '0px auto',
	},
}));
function Create(props) {
	const { reLoad } = props;
	const [open, setOpen] = React.useState(false);
	const [avatar, setAvatar] = useState('');
	const classes = useStyles();
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const formatDate = (date) => {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();
		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	};
	const schema = yup.object().shape({
		name: yup
			.string()
			.required("Please enter candidate's full name")
			.test('Two words', 'Please enter at least two words', (value) => value.split(' ').length > 1),
		position: yup.string().required("Please enter candidate's position"),
	});
	const form = useForm({
		defaultValues: {
			name: '',
			position: '',
			calendar: formatDate(Date.now()),
			avatar: '',
		},
		resolver: yupResolver(schema),
	});
	const {
		formState: { errors },
	} = form;
	const uploadFile = async (event) => {
		if (avatar) {
			let storageRef = storage.ref('avatar/');
			let desertRef = storageRef.child(
				avatar.slice(avatar.indexOf('/o/') + 3, avatar.indexOf('.png') + 4)
			);

			desertRef
				.delete()
				.then(() => {
					setAvatar('');
				})
				.catch((error) => {
					console.error('Error adding document: ', error);
				});
		}
		var storageRef = storage.ref();
		let file = event.target.files[0];
		const fileRef = storageRef.child(file.name);
		await fileRef.put(file);
		fileRef.getDownloadURL().then((data) => {
			setAvatar(data);
		});
	};
	const submitChange = (data) => {
		db
			.collection('user')
			.add({
				avatar: avatar,
				name: data.name,
				calendar: firebase.firestore.Timestamp.fromDate(new Date(data.calendar)),
				favorite: false,
				position: data.position,
			})
			.then((docRef) => {
				setOpen(false);
				setAvatar('');
				form.setValue('name', '');
				form.setValue('position', '');
				reLoad();
			})
			.catch((error) => {
				console.error('Error adding document: ', error);
			});
	};
	const handleCancel = () => {
		if (avatar) {
			let storageRef = storage.ref();
			let desertRef = storageRef.child(
				avatar.slice(avatar.indexOf('/o/') + 3, avatar.indexOf('.png') + 4)
			);

			desertRef
				.delete()
				.then(() => {
					setAvatar('');
					setOpen(false);
					form.setValue('name', '');
					form.setValue('position', '');
				})
				.catch((error) => {
					console.error('Error adding document: ', error);
				});
		} else {
			setOpen(false);
			form.setValue('name', '');
			form.setValue('position', '');
		}
	};
	return (
		<>
			<div onClick={handleClickOpen}>Create new candidate</div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
				disableBackdropClick
				disableEscapeKeyDown
			>
				<DialogTitle id='form-dialog-title'>Create new candidate</DialogTitle>
				<DialogContent>
					<form className={'search'}>
						{avatar ? (
							<>
								<Avatar alt='' src={avatar} className={classes.large} />
								<div className={classes.mid}>
									<input type='file' name='myFile' onChange={uploadFile} />
								</div>
							</>
						) : (
							<div className={classes.mid}>
								<input type='file' name='myFile' onChange={uploadFile} />
							</div>
						)}
						<Controller
							name='name'
							control={form.control}
							render={({ field }) => (
								<TextField
									{...field}
									margin='dense'
									label='Name'
									variant='outlined'
									fullWidth
									error={!!errors['name']}
									defaultValue=''
									helperText={errors['name'] ? errors['name'].message : ''}
								/>
							)}
						/>
						<Controller
							name='position'
							control={form.control}
							render={({ field }) => (
								<TextField
									{...field}
									margin='dense'
									label='Position'
									variant='outlined'
									fullWidth
									error={!!errors['position']}
									helperText={errors['position'] ? errors['position'].message : ''}
								/>
							)}
						/>
						<Controller
							name='calendar'
							control={form.control}
							render={({ field }) => (
								<TextField
									{...field}
									margin='dense'
									label='Calendar'
									type='date'
									InputLabelProps={{
										shrink: true,
									}}
									fullWidth
								/>
							)}
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCancel} color='primary'>
						Cancel
					</Button>
					<Button onClick={form.handleSubmit(submitChange)} color='primary' disabled={avatar ? false : true}>
						Create
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default Create;
