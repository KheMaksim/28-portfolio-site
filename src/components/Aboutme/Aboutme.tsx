import { MouseEventHandler } from 'react';
import Button from '../UI/Button/Button';
import './Aboutme.css';

interface Props {
	onClickHandler: MouseEventHandler<HTMLButtonElement>;
}

const Aboutme = ({ onClickHandler }: Props) => {
	return (
		<section className='about' id='about'>
			<div className="about__photo">
				<div className="about__background"></div>
				<div className="about__background-second"></div>
				<img src="/photo.jpg" alt="photo" className="about__image" />
			</div>
			<div className="about__content">
				<h2 className='about__title'>About Me</h2>
				<p className='about__text'>Hello! I'm a junior web developer with a focus on JavaScript, TypeScript, and React. My goal is to create high-quality web applications with an amazing user experience. I have strong frontend development skills, including JavaScript, TypeScript, and experience with React. I'm also studying full-stack development, including server-side development and databases. My aim is to become a full-fledged full-stack web developer capable of creating fully functional web applications from start to finish. I'm always ready for new challenges and thrive in collaborative teamwork to build exceptional web applications. Let's get in touch and create something amazing together!</p>
				<Button id='skills' text='Skills&#8595;' onClickHandler={onClickHandler} />
			</div>
		</section>
	);
}

export default Aboutme;