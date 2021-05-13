import React from 'react';
import './index.css';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
Right.propTypes = {};

function Right(props) {
	return (
		<div className='right'>
			<div className='right_calendar'>
				<div id='name'>Calendar</div>
				<DateRangeIcon />
			</div>
			<div className='date_list'>
				<div className='right_date'>
					<div className='right_date-now main_color'>
						02 February
						<MoreHorizIcon />
					</div>
					<div className='right_date-mission'>
						<div className='mission_time'>09:00</div>
						<div className='mission_tag'>
							<div className='mission_tag-name main_color'>UX Designer</div>
							<div className='mission_tag-infor'>Tech intervew</div>
						</div>
					</div>
					<div className='right_date-mission'>
						<div className='mission_time'>10:00</div>
						<div className='mission_tag'>
							<div className='mission_tag-name main_color'>Node.js Developer</div>
							<div className='mission_tag-infor'>Resume review</div>
						</div>
					</div>
				</div>
				<div className='right_date'>
					<div className='right_date-now main_color'>
						11 February
						<MoreHorizIcon />
					</div>
					<div className='right_date-mission'>
						<div className='mission_time'>09:00</div>
						<div className='mission_tag'>
							<div className='mission_tag-name main_color'>QA Engineer</div>
							<div className='mission_tag-infor'>Send test task</div>
						</div>
					</div>
					<div className='right_date-mission'>
						<div className='mission_time'>11:00</div>
						<div className='mission_tag'>
							<div className='mission_tag-name main_color'>Back-end Developer</div>
							<div className='mission_tag-infor'>Meeting</div>
						</div>
					</div>
					<div className='right_date-mission'>
						<div className='mission_time'>13:00</div>
						<div className='mission_tag'>
							<div className='mission_tag-name main_color'>Font-end Developer</div>
							<div className='mission_tag-infor'>Final interview</div>
						</div>
					</div>
				</div>
				<div className='right_date'>
					<div className='right_date-now main_color'>
						12 February
						<MoreHorizIcon />
					</div>
					<div className='right_date-mission'>
						<div className='mission_time'>08:30</div>
						<div className='mission_tag'>
							<div className='mission_tag-name main_color'>UI Designer</div>
							<div className='mission_tag-infor'>Platform concept</div>
						</div>
					</div>
					<div className='right_date-mission'>
						<div className='mission_time'>10:00</div>
						<div className='mission_tag'>
							<div className='mission_tag-name main_color'>Marketing</div>
							<div className='mission_tag-infor'>2 post for instagram</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Right;
