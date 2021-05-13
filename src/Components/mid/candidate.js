import { makeStyles } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { db } from '../../Firebase/conect';
import './index.css';
Candidate.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	position: PropTypes.string,
	favorite: PropTypes.bool,
	calendar: PropTypes.object,
	id: PropTypes.string,
};
const useStyles = makeStyles((theme) => ({
	red: {
		color: 'red',
		cursor: 'pointer',
	},
	gray: {
		color: 'gray',
		cursor: 'pointer',
	},
}));
function Candidate(props) {
	const { name, position, avatar, favorite, calendar, id } = props;
	const classes = useStyles();
	const [like, setLike] = useState(favorite);
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
	return (
		<div className='content_people-one' id={id}>
			<div className='people_infor size-20'>
				<img src={`/image/${avatar}.png`} alt='' />
				<p className='peope_name'>{name}</p>
				<p className='peope_job main_color'>{position}</p>
				<span>{calendar.toDate().toDateString()}</span>
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
	);
}

export default Candidate;
