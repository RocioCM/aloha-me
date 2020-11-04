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

export default HomePage;
