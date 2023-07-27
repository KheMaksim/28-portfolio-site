import './resetbutton.css';

interface Props {
	onClick: () => void;
	children: string;
}

const ResetButton = ({ onClick, children }: Props) => {
	return (
		<button className="button__reset" onClick={onClick}>{children}</button>
	)
}

export default ResetButton;