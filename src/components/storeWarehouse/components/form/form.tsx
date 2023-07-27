import { ChangeEvent } from 'react';
import './form.css'

interface Props {
	name: string;
	cost: number | '';
	amount: number | '';
	nameChange:  (event: ChangeEvent<HTMLInputElement>) => void;
	costChange:  (event: ChangeEvent<HTMLInputElement>) => void;
	amountChange:  (event: ChangeEvent<HTMLInputElement>) => void;
	addProduct: () => void;
}

const Form = ({ name, cost, amount, nameChange, costChange, amountChange, addProduct }: Props) => {
	return (
		<div className="form-container">
		<form className="form">
				<input
					className={"form-input"}
					placeholder="Название товара" type="text"
					value={name}
					onChange={nameChange} />
				<input
					className={"form-input"}
					placeholder="Сумма товара"
					type="number"
					value={cost}
					onChange={costChange} />
				<input
					className={"form-input"}
					placeholder="Количество товара"
					type="number"
					value={amount}
					onChange={amountChange} />
		</form>
		<button className={"form-button"} onClick={addProduct}>Добавить</button>
		</div>
	)
}

export default Form