import React from 'react';
import DataCandidate from './dataCandidate';
import './index.css';
Mid.propTypes = {};

function Mid(props) {
	return (
		<div className='main'>
			<div className='main_header'>
				<div className='header-index'>
					<p>You need to hire</p>
					<p className='size-20'>
						View all<i className='ti-arrow-right'></i>
					</p>
				</div>
				<div className='header_infor'>
					<div className='header_infor-ele'>
						<div className='ele_number'>2</div>
						<div className='ele_text'>
							<div className='ele_text-name size-20'>Project manager</div>
							<div className='ele_text-number'>10 condidates</div>
						</div>
						<div className='ele_circle'>
							<svg viewBox='0 0 36 36' className='circular-chart pink'>
								<path
									className='circle-bg'
									d='M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831'
								/>
								<path
									className='circle'
									strokeDasharray='75, 100'
									d='M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831'
								/>
								<text x='18' y='20.35' className='percentage'>
									75%
								</text>
							</svg>
						</div>
					</div>
					<div className='header_infor-ele'>
						<div className='ele_number'>3</div>
						<div className='ele_text'>
							<div className='ele_text-name size-20'>Content manager</div>
							<div className='ele_text-number'>7 condidates</div>
						</div>
						<div className='ele_circle'>
							<svg viewBox='0 0 36 36' className='circular-chart blue'>
								<path
									className='circle-bg'
									d='M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831'
								/>
								<path
									className='circle'
									strokeDasharray='50, 100'
									d='M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831'
								/>
								<text x='18' y='20.35' className='percentage'>
									50%
								</text>
							</svg>
						</div>
					</div>
					<div className='header_infor-ele'>
						<div className='ele_number'>1</div>
						<div className='ele_text'>
							<div className='ele_text-name size-20'>Senior UI/UX Designer</div>
							<div className='ele_text-number'>3 condidates</div>
						</div>
						<div className='ele_circle'>
							<svg viewBox='0 0 36 36' className='circular-chart orange'>
								<path
									className='circle-bg'
									d='M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831'
								/>
								<path
									className='circle'
									strokeDasharray='0, 100'
									d='M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831'
								/>
								<text x='18' y='20.35' className='percentage'>
									0%
								</text>
							</svg>
						</div>
					</div>
					<div className='header_infor-ele'>
						<div className='ele_number'>8</div>
						<div className='ele_text'>
							<div className='ele_text-name size-20'>Javascript Developer</div>
							<div className='ele_text-number'>21 condidates</div>
						</div>
						<div className='ele_circle'>
							<svg viewBox='0 0 36 36' className='circular-chart mint'>
								<path
									className='circle-bg'
									d='M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831'
								/>
								<path
									className='circle'
									strokeDasharray='65, 100'
									d='M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831'
								/>
								<text x='18' y='20.35' className='percentage'>
									65%
								</text>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div className='main_content'>
				<DataCandidate></DataCandidate>
			</div>
		</div>
	);
}

export default Mid;
