//import HeaderBar from './components/HeaderBar';
//import FiltersBar from './components/FiltersBar';
//import Gallery from './components/Gallery';
//import EmptyGallery from './components/EmptyGallery';
//import './styles/style.css';

class HomePage extends React.Component {
	constructor(props) {
		super();
		this.state = {
			selectedHotels: props.hotels,
			arrivalDate: null,
			leaveDate: null,
			country: null,
			price: null,
			size: null,
		};
	}

	//Not in use.
	handleCountryChange() {
		let hotels = this.props.hotels;
		if (!country) hotels = this.state.selectedHotels;
		let filteredHotels = hotels.filter(
			(hotel) => hotel.country === e.target.value
		);
		this.setState({selectedHotels: hotels});
	}

	//Not in use.
	handleFilters = (event) => {};

	handleFilter = (e) => {
		this.setState(
			{[e.target.name]: e.target.value !== '' ? e.target.value : null},
			() => {
				console.log(this.state); ///Should I here launch specific filters-state-change functions? */
			}
		);
	};

	getCountryOptions(hotels) {
		//Gets the list of all countries to choose. Outputs an Array of Formatted Objects.
		let countries = [];
		hotels.forEach((hotel) => {
			if (!countries.includes(hotel.country)) {
				countries.push(hotel.country);
			}
		});
		countries = countries.map((country) => {
			return {value: country, name: country};
		}); //Option format.
		countries.unshift({value: '', name: 'Todos los países'}); //default option.
		return countries;
	}

	render() {
		return (
			<React.Fragment>
				<HeaderBar {...this.state} />
				<FiltersBar
					countryOptions={this.getCountryOptions(this.props.hotels)}
					handleChange={this.handleFilter}
				/>
				{this.state.selectedHotels.length !== 0 ? (
					<Gallery hotels={this.state.selectedHotels} />
				) : (
					<EmptyGallery />
				)}
			</React.Fragment>
		);
	}
}

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

export default HomePage;
