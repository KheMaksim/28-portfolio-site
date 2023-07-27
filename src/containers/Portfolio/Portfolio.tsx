import Header from '@/components/Header/Header';
import './Portfolio.css'
import { useNavigate } from 'react-router-dom';
import MusicPlayer from '@/components/musicPlayer/MusicPlayer';
import GameArea from '@/components/findRingGame/gameArea';
import Countries from '@/components/countries/Countries';
import StoreWarehouse from '@/components/storeWarehouse/StoreWarehouse';

const Portfolio = () => {
	const navigate = useNavigate()
	let counter = 0;
	return (
		<div>
			<Header linkOnClickHandler={() => navigate(-1)} buttonOnClickHandler={() => navigate({ pathname: '/portfolio' })} />
			<div className="portfolio__container" id='portfolio'>
				<div className="player__app">
					<h2 className='app__name'>{counter += 1}. Music Player app.</h2>
					<MusicPlayer />
				</div>
				<div className="countries__app">
					<Countries />
					<h2 className='app__name'>{counter += 1}. Countries information app.</h2>
				</div>
				<div className="storewarehouse__app">
					<h2 className='app__name'>{counter += 1}. Store warehouse app.</h2>
					<StoreWarehouse />
				</div>
				<div className="game__app">
					<GameArea />
					<h2 className='app__name'>{counter += 1}. Find Ring game app.</h2>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;