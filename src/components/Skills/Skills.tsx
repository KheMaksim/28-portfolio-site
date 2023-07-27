import { MouseEventHandler } from 'react';
import Button from '../UI/Button/Button';
import Card from './Card/Card';
import './Skills.css';

interface Props {
	onClickHandler: MouseEventHandler<HTMLButtonElement>;
}

const cards: Card[] = [
	{ src: '/html.png', alt: 'HTML icon', text: 'html' },
	{ src: '/css.png', alt: 'css icon', text: 'css' },
	{ src: '/sass.png', alt: 'sass icon', text: 'sass' },
	{ src: '/bootstrap.png', alt: 'bootstrap icon', text: 'bootstrap' },
	{ src: '/jquery.png', alt: 'jquery icon', text: 'jquery' },
	{ src: '/javascript.png', alt: 'javascript icon', text: 'javascript' },
	{ src: '/typescript.png', alt: 'typescript icon', text: 'typescript' },
	{ src: '/react.png', alt: 'react icon', text: 'react' },
	{ src: '/firebase.png', alt: 'firebase icon', text: 'firebase' },
	{ src: '/ant-design.png', alt: 'ant-design icon', text: 'ant-design' },
	{ src: '/node.png', alt: 'node icon', text: 'node' },
	{ src: '/gitlab.png', alt: 'gitlab icon', text: 'gitlab' },
	{ src: '/github.png', alt: 'github icon', text: 'github' },
	{ src: '/linux.png', alt: 'linux icon', text: 'linux' },
	{ src: '/vscode.png', alt: 'vscode icon', text: 'vscode' },
]

const Skills = ({ onClickHandler }: Props) => {
	return (
		<section className='skills' id='skills'>
			<div className='skills__info'>
				<div className="skills__title">
					<div className="skills__top">
						<p className="skills__top-title">SKILLS</p>
					</div>
					<div className="skills__bot">
						<p className="skills__bot-title">SKILLS</p>
					</div>
				</div>
				<p className='skills__subtitle'>These are the technologies I've worked with :</p>
			</div>
			<div className='skills__cards'>
				{cards.map((card, index) =>
					<Card key={index} src={card.src} alt={card.alt} text={card.text} />)}
			</div>
			<Button id='contacts' text='Contacts&#8595;' onClickHandler={onClickHandler} />
		</section>
	);
}

export default Skills;