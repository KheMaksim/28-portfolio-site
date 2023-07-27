import './product.css'

interface Props {
	name: string;
	cost: number;
	amount: number;
	decreaseFn: () => void;
}

const Product = ({ name, cost, amount, decreaseFn }: Props) => {
	return (
		<div className="product">
			<div className='product-info'>
				<p className="product-name">{name}</p>
				<p className="product-cost">{cost <= 0 ? 'Free' : `${cost} KZT`}</p>
			</div>
			<div className='product-container'>
				<p className="product-cost">{amount <= 0 ? 'Not available' : (`${amount} PCS`)} </p>
				{amount <= 0 ? null : <button className="product-button" onClick={decreaseFn}>-</button>}
			</div>
		</div>
	)
}

export default Product