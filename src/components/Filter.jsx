//import React from 'react';

function Filter(props) {
	return (
		<article className='filter'>
			<i className={props.iconClass}></i>
			{props.type === 'date' ? (
				<input
					className='filter-input'
					type={props.type}
					name={props.name}
					min={props.minDate}
					onChange={props.handleChange}
				/>
			) : (
				<React.Fragment>
					<select
						className='filter-input'
						name={props.name}
						onChange={props.handleChange}
					>
						{props.options.map((option) => (
							<option key={option.name} value={option.value}>
								{option.name}
							</option>
						))}
					</select>
					<i className='fas fa-chevron-down'></i>
				</React.Fragment>
			)}
		</article>
	);
}

export default Filter;
