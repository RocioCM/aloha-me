function HotelCard(props) {
	const maxPrice = 4;
	const getPriceIconsClasses = () => {
		let iconsClasses = [];
		for (let i = 0; i < maxPrice; i++) {
			iconsClasses.push(
				`fas fa-dollar-sign ${i >= price ? 'transparentize' : ''}`
			);
		}
		return iconsClasses;
	};

	const {slug, name, photo, description, rooms, city, country, price} = props;
	const priceIcons = getPriceIconsClasses();

	return (
		<article className='hotel-card'>
			<img src={photo} alt={slug} />
			<div className='hotel-info'>
				<h2>{name}</h2>
				<p>{description}</p>
				<div className='icons-info-ctn'>
					<h3>
						<i className='fas fa-map-marker blue-icon-ctn'></i>
						{[city, country].join(', ')}
					</h3>
					<br />
					<h3>
						<i className='fas fa-bed blue-icon-ctn'></i>
						{rooms} Habitaciones
					</h3>
					<span className='blue-icon-ctn'>
						{priceIcons.map((classes, i) => (
							<i className={classes} key={i}></i>
						))}
					</span>
				</div>
			</div>
			<button
				className='reserve-btn'
				onClick={() => alert('Próximamente: vas a poder reservar')}
			>
				Reservar
			</button>
		</article>
	);
}
