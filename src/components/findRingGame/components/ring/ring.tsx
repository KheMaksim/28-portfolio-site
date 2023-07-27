import './ring.css';

interface Props {
	guessed: boolean;
}

const Ring = ({ guessed }: Props) => {
	const ringClasses = guessed ? "ring guessed" : "ring";
	return <p className={ringClasses}>О</p>;
};

export default Ring;