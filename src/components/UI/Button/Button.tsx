import { MouseEventHandler } from 'react';
import './Button.css';
import { Link } from 'react-scroll';

interface Props {
	id: string;
	text: string;
	onClickHandler: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ id, text, onClickHandler }: Props) => {
	return (
		<Link
			to={id}
			smooth={true}
			duration={400}
			className="button"
			onClick={() => onClickHandler}
		>{text}</Link>
	);
}

export default Button;