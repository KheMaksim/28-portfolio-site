import { ReactNode } from 'react';
import './square.css'

interface Props {
	index: number;
	toggled: boolean;
	children: ReactNode;
	toggleSquare: (index: number) => void;
}

const Square = ({ index, toggled, children, toggleSquare }: Props) => {
	const squareClasses = toggled ? "square__toggled" : "square";
	const onClickHandler = () => {
		toggleSquare(index);
	};
	return (
		<div className={squareClasses} onClick={onClickHandler}>
			{children}
		</div>
	);
};

export default Square;