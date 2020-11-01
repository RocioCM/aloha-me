function HotelCard(props) {
	const getPriceIconsClasses = () => {
		let iconsClasses = [];
		for (let i = 0; i < 4; i++) {
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
						<i className='fas fa-map-marker single-icon'></i>
						{[city, country].join(', ')}
					</h3>
					<br />
					<h3>
						<i className='fas fa-bed single-icon'></i>
						{rooms} Habitaciones
					</h3>
					<span className='single-icon'>
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
