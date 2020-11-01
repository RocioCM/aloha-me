//import React from 'react';
//import Filter from './Filter';

function FiltersBar(props) {
	const today = new Date().toISOString().slice(0, 10);

	const filtersProps = [
		{
			name: 'arrivalDate',
			type: 'date',
			minDate: today,
			iconClass: 'fas fa-sign-in-alt',
		},
		{
			name: 'leaveDate',
			type: 'date',
			minDate: today,
			iconClass: 'fas fa-sign-out-alt',
		},
		{
			name: 'country',
			type: 'select',
			iconClass: 'fas fa-globe',
			options: props.countryOptions,
		},
		{
			name: 'price',
			type: 'select',
			iconClass: 'fas fa-dollar-sign',
			options: [
				{value: '', name: 'Cualquier precio'},
				{value: '1', name: '$'},
				{value: '2', name: '$$'},
				{value: '3', name: '$$$'},
				{value: '4', name: '$$$$'},
			],
		},
		{
			name: 'size',
			type: 'select',
			iconClass: 'fas fa-bed',
			options: [
				{value: '', name: 'Cualquier tamaño'},
				{value: 'pequeño', name: 'Hotel pequeño'},
				{value: 'mediano', name: 'Hotel mediano'},
				{value: 'grande', name: 'Hotel grande'},
			],
		},
	];

	return (
		<form className='filters-ctn'>
			{filtersProps.map((filterData) => (
				<Filter
					key={filterData.name}
					handleChange={props.handleChange}
					{...filterData}
				/>
			))}
		</form>
	);
}

export default FiltersBar;
