function HeaderBar(props) {
	const {arrivalDate, leaveDate, country, price, size} = props;

	const formatDate = (date) => {
		const dateParams = date.split('-');
		return new Date(
			dateParams[0],
			dateParams[1] - 1,
			dateParams[2]
		).toLocaleDateString();
	};

	const formatPrice = (price) => {
		let strPrice = '';
		for (let i = 0; i < price; i++) {
			strPrice += '$';
		}
		return strPrice;
	};

	return (
		<header className='header-bar'>
			<h1>Hoteles</h1>
			<p>
				{arrivalDate && (
					<span>
						Desde el <b>{formatDate(arrivalDate)} </b>
					</span>
				)}
				{leaveDate && (
					<span>
						hasta el <b>{formatDate(leaveDate)} </b> <br />
					</span>
				)}
				{country && (
					<span>
						en <b>{country} </b>
					</span>
				)}
				{price && (
					<span>
						con costo <b>{formatPrice(price)} </b> <br />
					</span>
				)}
				{size && (
					<span>
						de tamaño <b>{size} </b>
					</span>
				)}
			</p>
		</header>
	);
}

export default HeaderBar;
