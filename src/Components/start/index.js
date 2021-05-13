import { Button, ButtonGroup, IconButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { useState } from 'react';
import Login from '../login';
import './index.css';
function Start(props) {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div className='group_button'>
			<ButtonGroup disableElevation variant='contained' color='primary'>
				<Button className={'group_aButton'} onClick={handleClickOpen}>
					Log in
				</Button>
				<Button className={'group_aButton'}>Create new admin</Button>
			</ButtonGroup>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
				disableEscapeKeyDown
				disableBackdropClick
			>
				<DialogTitle id='form-dialog-title'>Login</DialogTitle>
				<IconButton onClick={handleClose} className='icon-button'>
					<CloseIcon />
				</IconButton>
				<DialogContent>
					<Login />
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default Start;
