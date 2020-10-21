function HotelCard(props) {
	const {
		slug,
		name,
		photo,
		description,
		availabilityFrom,
		availabilityTo,
		rooms,
		city,
		country,
		price,
	} = props;

	return (
		<article>
			<img src={photo} alt={name} />
			<div>
				<h2>{name}</h2>
				<p>{description}</p>
				<div>
					<h3>
						<i></i>
						{[city, country].join(', ')}
					</h3>
					<h3>
						<i></i>
						{rooms}
					</h3>
					<i>
						<span></span>
						<span></span>
					</i>
				</div>
			</div>
			<button>Reservar</button>
		</article>
	);
}

export default HotelCard;
