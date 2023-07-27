import './Card.css';

interface Card {
	src: string;
	alt: string;
	text: string;
}

const Card = ({ src, alt, text }: Card) => {
	return (
		<div className='card'>
			<img className='card__image' src={src} alt={alt} />
			<p className='card__title'>{text}</p>
		</div>
	);
}

export default Card;