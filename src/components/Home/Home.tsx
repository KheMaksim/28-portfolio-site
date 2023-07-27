import { MouseEventHandler } from 'react';
import Button from '../UI/Button/Button';
import './Home.css';

interface Props {
	onClickHandler: MouseEventHandler<HTMLButtonElement>;
}

const Home = ({ onClickHandler }: Props) => {
	return (
		<section className='home'>
			<div className="home__container">
				<div className="home__info">
					<h2 className='home__title'>&lt;Welcome</h2>
					<p className='home__info-subtitle'>to=&#123;to&#125;</p>
					<p className='home__info-subtitle'>my=&#123;personal&#125;</p>
					<p className='home__info-subtitle'>page=&#123;site&#125;</p>
					<h2 className='home__title'>/&gt;;</h2>
				</div>
				<div className="home__info">
					<p className='home__subtitle'>if (continue)&#123;</p>
					<p className='home__subtitle'>pressButton(<Button id='about' text='About Me&#8595;' onClickHandler={onClickHandler} />);</p>
					<p className='home__subtitle'>&#125; else&#123;</p>
					<p className='home__subtitle'>return;</p>
					<p className='home__subtitle'>&#125;</p>
				</div>
			</div>
		</section>
	);
};

export default Home;