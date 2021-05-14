import {
	Avatar,
	Button,
	Checkbox,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControlLabel,
	makeStyles,
	TextField,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import firebase from 'firebase/app';
import { storage } from '../../Firebase/conect';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { db } from '../../Firebase/conect';
import './index.css';
Candidate.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	position: PropTypes.string,
	favorite: PropTypes.bool,
	calendar: PropTypes.object,
	id: PropTypes.string,
	reLoad: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
	red: {
		color: 'red',
		cursor: 'pointer',
		zIndex: '10',
	},
	gray: {
		color: 'gray',
		cursor: 'pointer',
		zIndex: '10',
	},
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
function Candidate(props) {
	const { name, position, avatar, favorite, calendar, id, reLoad } = props;
	const [avatarChange, setAvatarChange] = useState(avatar);
	const classes = useStyles();
	const [like, setLike] = useState(favorite);
	const [open, setOpen] = React.useState(false);

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
	const form = useForm({
		defaultValues: {
			name: name,
			position: position,
			calendar: formatDate(calendar.toDate()),
			avatar: avatar,
		},
	});
	const clickLike = (id) => {
		db
			.collection('user')
			.doc(id)
			.update({
				favorite: !favorite,
			})
			.then(() => {
				setLike(!like);
			})
			.catch((error) => {
				console.error('Error updating document: ', error);
			});
	};
	const submitChange = (values) => {
		console.log(values);
		db
			.collection('user')
			.doc(id)
			.update({
				name: values.name,
				position: values.position,
				calendar: firebase.firestore.Timestamp.fromDate(new Date(values.calendar)),
				avatar: avatarChange,
			})
			.then(() => {
				if (avatarChange !== avatar) {
					let storageRef = storage.ref();
					let desertRef = storageRef.child(
						avatar.slice(avatar.indexOf('/o/') + 3, avatar.indexOf('.png') + 4)
					);

					return desertRef.delete();
				}
				reLoad();
			})
			.then(() => {
				setOpen(false);
				reLoad();
			})
			.catch((error) => {
				console.error('Error updating document: ', error);
			});
	};
	const uploadFile = async (event) => {
		var storageRef = storage.ref();
		let file = event.target.files[0];
		const fileRef = storageRef.child(file.name);
		await fileRef.put(file);
		fileRef.getDownloadURL().then((data) => {
			setAvatarChange(data);
		});
	};
	const cancelAndClose = () => {
		if (avatarChange !== avatar) {
			let storageRef = storage.ref();
			let desertRef = storageRef.child(
				avatarChange.slice(avatarChange.indexOf('/o/') + 3, avatarChange.indexOf('.png') + 4)
			);

			desertRef
				.delete()
				.then(() => {
					setAvatarChange(avatar);
				})
				.catch((error) => {
					console.error('Error adding document: ', error);
				});
		}

		form.setValue('name', name);
		form.setValue('avatar', '');
		form.setValue('position', position);
		form.setValue('calendar', formatDate(calendar.toDate()));
		setOpen(false);
	};
	const handleDelete = (id) => {
		db
			.collection('user')
			.doc(id)
			.delete()
			.then(() => {
				let storageRef = storage.ref();
				let desertRef = storageRef.child(
					avatar.slice(avatar.indexOf('/o/') + 3, avatar.indexOf('.png') + 4)
				);

				return desertRef.delete();
			})
			.then(() => {
				setOpen(false);
				reLoad();
			})
			.catch((error) => {
				console.error('Error removing document: ', error);
			});
	};
	return (
		<>
			<div className='content_people-one' id={id}>
				<div className='people_infor size-20'>
					<img src={avatar} alt={name} onClick={handleClickOpen} />
					<p onClick={handleClickOpen} className='peope_name'>
						{name}
					</p>
					<p onClick={handleClickOpen} className='peope_job main_color'>
						{position}
					</p>
					<span onClick={handleClickOpen}>{calendar.toDate().toDateString()}</span>
					<p className='people_icon'>
						<FavoriteIcon
							onClick={() => {
								clickLike(id);
							}}
							className={like ? classes.red : classes.gray}
						/>
					</p>
				</div>
			</div>
			<Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
				<DialogContent>
					<Avatar alt={name} src={avatarChange} className={classes.large} />
					<div className={classes.mid}>
						<input type='file' name='myFile' onChange={uploadFile} />
					</div>
					<form className={'search'} onSubmit={form.handleSubmit(submitChange)}>
						<Controller
							name='name'
							control={form.control}
							render={({ field }) => (
								<TextField margin='dense' {...field} label='Name' variant='outlined' fullWidth />
							)}
						/>
						<Controller
							name='position'
							control={form.control}
							render={({ field }) => (
								<TextField {...field} label='Position' variant='outlined' fullWidth margin='dense' />
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
					<FavoriteIcon
						onClick={() => {
							clickLike(id);
						}}
						className={like ? classes.red : classes.gray}
					/>
					<Button onClick={cancelAndClose} color='primary'>
						Cancel
					</Button>
					<Button
						onClick={() => {
							handleDelete(id);
						}}
						color='primary'
					>
						Delete
					</Button>
					<Button onClick={form.handleSubmit(submitChange)} color='primary'>
						Subscribe
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default Candidate;
