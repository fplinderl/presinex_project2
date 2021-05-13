import {
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
import Grid from '@material-ui/core/Grid';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SearchIcon from '@material-ui/icons/Search';
import SettingsInputCompositeIcon from '@material-ui/icons/SettingsInputComposite';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import './index.css';
Search.propTypes = {
	positions: PropTypes.array,
	handleSearch: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
	button: {
		border: 'none',
		'&:hover': {
			border: 'none',
			background: '#e6e6e6',
			color: '#0f25a0',
		},
	},
	red: {
		color: 'red',
	},
	gray: {
		color: 'gray',
	},
}));
function Search(props) {
	const { positions, handleSearch } = props;
	const classes = useStyles();
	const [openPosition, setOpenPosition] = useState(false);
	const [favorite, setFavorite] = useState(false);
	const [all, setAll] = useState(true);
	const [openCalendar, setOpenCalendar] = useState(false);
	const [search, setSearch] = useState({ name: '', from: '', to: '', position: [], like: 'all' });
	const [positionFilter, setPositionFilter] = useState([]);
	const [fakePositionFilter, setFakePositionFilter] = useState([]);
	const handleClickOpenPosition = () => {
		setOpenPosition(true);
	};
	const form = useForm({
		defaultValues: {
			from: '',
			to: '',
			name: '',
		},
	});
	const handleClosePosition = () => {
		setFakePositionFilter(positionFilter);
		setOpenPosition(false);
	};
	const handleDoneClosePosition = () => {
		setPositionFilter(fakePositionFilter);
		let fakeSearch = Object.assign({}, search);
		fakeSearch.position = fakePositionFilter;
		setSearch(fakeSearch);
		handleSearch(fakeSearch);
		setOpenPosition(false);
	};
	const handleClickOpenCalendar = () => {
		setOpenCalendar(true);
	};
	const handleCloseCalendar = () => {
		setOpenCalendar(false);
	};
	const submitClick = (values) => {
		values.position = positionFilter;
		setSearch(values);
		handleSearch(values);
		handleCloseCalendar();
	};
	const getPosition = (event) => {
		let data = [...fakePositionFilter];
		if (event.target.checked && data.indexOf(event.target.value) === -1) {
			data.push(event.target.value);
		}
		if (!event.target.checked && data.indexOf(event.target.value) !== -1) {
			data = data.filter((item) => item !== event.target.value);
		}
		setFakePositionFilter(data);
	};
	const submitSearchName = (values) => {
		values.position = positionFilter;
		setSearch(values);
		handleSearch(values);
	};
	const submitAllClickCalendar = (values) => {
		values.position = positionFilter;
		values.from = '';
		values.to = '';
		setSearch(values);
		handleSearch(values);
		handleCloseCalendar();
	};
	const likeFilter = () => {
		let fakeSearch = Object.assign({}, search);
		if (all) {
			setAll(false);
			setFavorite(true);
			fakeSearch.like = 'yes';
		} else {
			if (favorite) {
				setFavorite(false);
				fakeSearch.like = 'no';
			} else {
				setAll(true);
				fakeSearch.like = 'all';
			}
		}

		setSearch(fakeSearch);
		handleSearch(fakeSearch);
	};
	return (
		<div className='content_find size-20  main_color'>
			<div className={'search'}>
				<form className={'search'} onSubmit={form.handleSubmit(submitSearchName)}>
					<Controller
						name='name'
						control={form.control}
						fullWidth
						render={({ field }) => (
							<Grid container spacing={1} alignItems='flex-end'>
								<Grid item>
									<SearchIcon onClick={form.handleSubmit(submitClick)} />
								</Grid>
								<Grid item>
									<TextField {...field} id='input-with-icon-grid' label='Search name' />
								</Grid>
							</Grid>
						)}
					/>
				</form>
			</div>

			<p onClick={handleClickOpenPosition} className={classes.button}>
				<Button variant='outlined' color='primary' className={classes.button}>
					Position <PermIdentityIcon />
				</Button>
			</p>
			<Dialog
				open={openPosition}
				onClose={handleClosePosition}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>Choose position</DialogTitle>
				<DialogContent>
					{positions.map((position, index) => {
						if (fakePositionFilter.indexOf(position) === -1) {
							return (
								<FormControlLabel
									key={index}
									value={position}
									control={<Checkbox color='primary' />}
									label={position}
									labelPlacement='end'
									onChange={getPosition}
								/>
							);
						} else {
							return (
								<FormControlLabel
									key={index}
									checked={true}
									value={position}
									control={<Checkbox color='primary' />}
									label={position}
									labelPlacement='end'
									onChange={getPosition}
								/>
							);
						}
					})}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClosePosition} color='primary'>
						Disagree
					</Button>
					<Button onClick={handleDoneClosePosition} color='primary' autoFocus>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
			<p onClick={handleClickOpenCalendar} className={classes.button}>
				<Button variant='outlined' color='primary' className={classes.button}>
					More <SettingsInputCompositeIcon />
				</Button>
			</p>
			<p onClick={likeFilter}>
				Like: {all ? <span>all</span> : favorite ? <span>yes</span> : <span>no</span>}
			</p>
			<Dialog
				open={openCalendar}
				onClose={handleCloseCalendar}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>Set calendar</DialogTitle>
				<DialogContent>
					<form noValidate>
						<Controller
							name='from'
							control={form.control}
							fullWidth
							render={({ field }) => (
								<TextField
									{...field}
									label='From'
									type='date'
									InputLabelProps={{
										shrink: true,
									}}
								/>
							)}
						/>
					</form>
					<form noValidate>
						<Controller
							name='to'
							control={form.control}
							fullWidth
							render={({ field }) => (
								<TextField
									{...field}
									label='To'
									type='date'
									InputLabelProps={{
										shrink: true,
									}}
								/>
							)}
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={form.handleSubmit(submitAllClickCalendar)} color='primary'>
						All
					</Button>
					<Button onClick={handleCloseCalendar} color='primary'>
						Disagree
					</Button>
					<Button onClick={form.handleSubmit(submitClick)} color='primary' autoFocus>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default Search;
