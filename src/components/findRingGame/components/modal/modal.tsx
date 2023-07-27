import { ReactNode, useEffect, useState } from 'react';
import './modal.css'

interface Props {
	isOpen: boolean;
	children: ReactNode;
}

const Modal = ({ isOpen, children }: Props) => {
	const [isVisible, setIsVisible] = useState(isOpen);

	useEffect(() => {
		setIsVisible(isOpen);
	}, [isOpen]);

	return (
		isVisible ? (
			<div className="game__modal">
				<div className="game__content">
					{children}
				</div>
			</div>
		) : null
	);
};

export default Modal;