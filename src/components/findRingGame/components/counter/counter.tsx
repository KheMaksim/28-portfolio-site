import "./counter.css"

interface Props {
	value: number;
}

const Counter = ({ value }: Props) => {
	let counterClasses = 'counter';
	if (value >= 0 && value <= 6) counterClasses = "counter zone-green";
	else if (value > 6 && value <= 18) counterClasses = "counter zone-yellow";
	else if (value > 18 && value <= 30) counterClasses = "counter zone-orange";
	else counterClasses = "counter zone-red";
	return (
		<p className={counterClasses}>Tries: {value}</p>
	)
}

export default Counter;