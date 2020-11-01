//import React from 'react';
//import HotelCard from './HotelCard';

function Gallery(props) {
	return (
		<section className='gallery'>
			{props.hotels.map((hotel) => (
				<HotelCard key={hotel.slug} {...hotel} />
			))}
		</section>
	);
}

export default Gallery;
