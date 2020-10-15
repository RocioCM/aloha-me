import {React} from 'react';
import HeaderBar from './app/components/Help';
import Filters from './app/components/Filters';
import Gallery from './app/components/Gallery';

function App() {
	return (
		<React.Fragment>
			<HeaderBar />
			<Filters />
			<Gallery />
		</React.Fragment>
	);
}

export default App;
