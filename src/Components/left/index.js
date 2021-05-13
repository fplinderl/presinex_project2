import React from 'react';
import './index.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import PeopleIcon from '@material-ui/icons/People';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import ChatIcon from '@material-ui/icons/Chat';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { Button, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { logout } from '../login/userSlice';
Left.propTypes = {};
const useStyles = makeStyles((theme) => ({
	nav_icon: {
		marginRight: '15px',
	},
}));
function Left(props) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const logOut = () => {
		const action = logout();
		dispatch(action);
	};
	return (
		<div className='left'>
			<div className='left_logo'>
				<img src='/image/HRM.png' alt='logo' />
			</div>
			<div className='left_nav size-20 main_color'>
				<div className='nav_tool'>
					<p className='index'>Tools</p>
					<p className='nav_element'>
						<DashboardIcon className={classes.nav_icon} /> Dashboard
					</p>
					<p className='nav_element'>
						<EventAvailableIcon className={classes.nav_icon} /> Offers
					</p>
					<p className='nav_element'>
						<PeopleIcon className={classes.nav_icon} /> People
					</p>
					<p className='nav_element'>
						<SignalCellularAltIcon className={classes.nav_icon} /> Statistics
					</p>
					<p className='nav_element'>
						<DescriptionIcon className={classes.nav_icon} /> Documents
					</p>
				</div>
				<div className='nav_other'>
					<p className='index'>Other</p>
					<p className='nav_element'>
						<ChatIcon className={classes.nav_icon} /> Chat<span className='nav_ele-number'>5</span>
					</p>
					<p className='nav_element'>
						<LiveHelpIcon className={classes.nav_icon} /> Support
					</p>
					<p className='nav_element'>
						<DateRangeIcon className={classes.nav_icon} /> Calendar
					</p>
				</div>
			</div>
			<div className='left_user'>
				<img src='/image/user_avartar.png' alt='user avartar' />
				<div className='user_infor size-20'>
					<p className='user_name'>{localStorage.getItem('user_email')}</p>
					<p className='user_author'>Admin</p>
				</div>
			</div>
			<Button className='left_logout' variant='contained' color='primary' onClick={logOut}>
				Log out
			</Button>
		</div>
	);
}

export default Left;
