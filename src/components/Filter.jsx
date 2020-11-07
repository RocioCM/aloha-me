//import React from 'react';

function Filter(props) {
	const {
		iconClass,
		type,
		name,
		handleChange,
		options,
		placeHolder,
		minDate,
	} = props;

	return (
		<article className='filter'>
			<i className={iconClass}></i>
			{props.type === 'date' ? (
				<input
					className='filter-input'
					type={type}
					name={name}
					placeholder={placeHolder}
					min={minDate}
					onChange={handleChange}
				/>
			) : (
				<React.Fragment>
					<select
						className='filter-input'
						name={name}
						onChange={handleChange}
					>
						{options.map((option) => (
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
