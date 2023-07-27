import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import SiteBuilder from '../SiteBuilder/SiteBuilder';
import Portfolio from '../Portfolio/Portfolio';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SiteBuilder />} />
				<Route path='/portfolio' element={<Portfolio />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;