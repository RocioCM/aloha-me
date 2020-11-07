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

	handleFilter = (e) => {
		//Triggered when any of the filter value updates.
		//This updates the state and triggers the cards filter function.

		this.setState(
			{[e.target.name]: e.target.value !== '' ? e.target.value : null},
			() => {
				const filteredHotels = this.runFilters(this.props.hotels);
				this.setState({selectedHotels: filteredHotels});
			}
		);
	};

	runFilters = (hotels) => {
		//Runs the five different filters on the full hotels list.

		let filteredHotels = this.filterByDate(
			hotels,
			'availabilityFrom',
			this.state.arrivalDate
		);
		filteredHotels = this.filterByDate(
			filteredHotels,
			'availabilityTo',
			this.state.leaveDate
		);
		filteredHotels = this.filterByPropValue(
			filteredHotels,
			'country',
			this.state.country
		);
		filteredHotels = this.filterByPropValue(
			filteredHotels,
			'price',
			this.state.price
		);
		filteredHotels = this.filterBySize(filteredHotels, this.state.size);
		return filteredHotels;
	};

	filterByDate(hotels, property, value) {
		//Filters hotels list by date of arrival or leave.
		//'property´ param specifies if it's arrival or leave date.
		//'value' param is the ISO string of the selected date.

		if (!value) {
			return hotels;
		}

		const getDateObj = (formattedDate) => {
			const dateParams = formattedDate.split('-');
			return new Date(dateParams[0], dateParams[1] - 1, dateParams[2]);
		};

		const date = getDateObj(value).valueOf();

		switch (property) {
			case 'availabilityFrom':
				return hotels.filter(
					(hotel) =>
						hotel[property] <= date &&
						hotel['availabilityTo'] > date
				);
			case 'availabilityTo':
				return hotels.filter(
					(hotel) =>
						hotel[property] >= date &&
						hotel['availabilityFrom'] < date
				);
			default:
				return hotels;
		}
	}

	filterBySize(hotels, size) {
		//Filters hotels list by the number of rooms it has.

		switch (size) {
			case 'pequeño':
				return hotels.filter((hotel) => hotel.rooms <= 10);
			case 'mediano':
				return hotels.filter(
					(hotel) => hotel.rooms > 10 && hotel.rooms <= 20
				);
			case 'grande':
				return hotels.filter((hotel) => hotel.rooms > 20);
			default:
				return hotels;
		}
	}

	filterByPropValue(hotels, property, value) {
		//Filters hotels list by a given property.
		//Outputs a list of the objects which given 'property' has the given 'value'.

		if (!value) {
			//If value is null, it doesn´t filter.
			return hotels;
		}
		return hotels.filter((hotel) => hotel[property] == value);
	}

	getCountryOptions(hotels) {
		//Gets the list of all countries to choose.
		//Outputs an Array of Formatted-Country-Option-Objects.

		let countries = [];
		hotels.forEach((hotel) => {
			if (!countries.includes(hotel.country)) {
				countries.push(hotel.country);
			}
		});
		countries = countries.map((country) => {
			return {value: country, name: country}; //Option format.
		});
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

export default HomePage;
