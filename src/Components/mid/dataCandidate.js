import React, { useEffect, useState } from 'react';
import { db } from '../../Firebase/conect';
import Candidate from './candidate';
import Create from './create';
import Search from './search';
function DataCandidate(props) {
	const [dataCandidates, setDataCandidates] = useState([]);
	const [reRender, setReRender] = useState(Math.random());
	const [dataShow, setDataShow] = useState([]);
	const [dataPosition, setDataPosition] = useState([]);
	const [search, setSearch] = useState(['', '', '', [], 'all']);
	const [load, setLoad] = useState(false);
	useEffect(() => {
		const candidates = [];
		const positions = [];
		db
			.collection('user')
			.orderBy('name')
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					let candidate = doc.data();
					candidate.id = doc.id;
					candidates.push(candidate);
					if (positions.indexOf(doc.data().position) === -1) {
						positions.push(doc.data().position);
					}
				});
				setDataCandidates(candidates);
				setDataShow(candidates);
				setDataPosition(positions);
				if (load) {
					setLoad(false);
				}
			});
	}, [load]);
	const handleSearch = (values) => {
		let fakeSearch = [...search];
		fakeSearch[0] = values.name;
		fakeSearch[1] = values.from;
		fakeSearch[2] = values.to;
		fakeSearch[3] = values.position;
		fakeSearch[4] = values.like;
		setSearch(fakeSearch);
	};
	useEffect(() => {
		let dataShowToSearch = dataCandidates;
		if (search[0] !== '') {
			let fakeData = [...dataShowToSearch];
			fakeData = fakeData.filter((element) => element.name.includes(search[0]));
			dataShowToSearch = fakeData;
			setDataPosition(() => {
				const positions = [];
				fakeData.forEach((element) => {
					if (positions.indexOf(element.position) === -1) {
						positions.push(element.position);
					}
				});
				return positions;
			});
		} else {
			setDataShow(dataShowToSearch);
			setDataPosition(() => {
				const positions = [];
				dataCandidates.forEach((element) => {
					if (positions.indexOf(element.position) === -1) {
						positions.push(element.position);
					}
				});
				return positions;
			});
		}
		if (search[3].length > 0) {
			let fakeDataShow = [...dataShowToSearch];
			fakeDataShow = fakeDataShow.filter((element) => search[3].indexOf(element.position) !== -1);
			dataShowToSearch = fakeDataShow;
		}
		if (search[1] !== '') {
			let fakeDataShow = [...dataShowToSearch];
			fakeDataShow = fakeDataShow.filter(
				(element) =>
					element.calendar.toDate() >= new Date(search[1]) && element.calendar.toDate() <= new Date(search[2])
			);
			dataShowToSearch = fakeDataShow;
		}
		let likeFilterData = [...dataShowToSearch];
		switch (search[4]) {
			case 'all':
				likeFilterData = likeFilterData.filter((element) => element);
				dataShowToSearch = likeFilterData;
				break;
			case 'yes':
				likeFilterData = likeFilterData.filter((element) => element.favorite);
				dataShowToSearch = likeFilterData;
				break;
			case 'no':
				likeFilterData = likeFilterData.filter((element) => !element.favorite);
				dataShowToSearch = likeFilterData;
				break;
			default:
				break;
		}
		setDataShow(dataShowToSearch);
	}, [search, dataCandidates]);
	const reLoad = () => {
		setLoad(true);
	};
	const clickReRender = () => {
		setReRender(Math.random());
	};
	return (
		<>
			<div className='content_header'>
				<p>{dataShow.length} Candidates</p>
				<p className='size-20'>
					<Create reLoad={reLoad} reRender={clickReRender} ok={reRender} />
				</p>
			</div>
			<Search handleSearch={handleSearch} positions={dataPosition}></Search>
			<div className='content_people'>
				{dataShow.length > 0 ? (
					dataShow.map((item, index) => (
						<Candidate
							key={item.id}
							avatar={item.avatar}
							name={item.name}
							position={item.position}
							favorite={item.favorite}
							calendar={item.calendar}
							id={item.id}
							reLoad={reLoad}
						/>
					))
				) : (
					<div
						style={{
							textAlign: 'center',
							width: '100%',
							fontWeight: '800',
							fontSize: '20px',
							marginTop: '20px',
						}}
					>
						There are no candidates
					</div>
				)}
			</div>
		</>
	);
}

export default DataCandidate;
