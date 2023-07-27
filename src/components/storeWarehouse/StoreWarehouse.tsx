import Form from '@/components/storeWarehouse/components/form/form';
import Product from '@/components/storeWarehouse/components/product/product';
import SortButton from '@/components/storeWarehouse/components/sortButton/sortButton';
import { ChangeEvent, useState } from 'react';
import './StoreWarehouse.css'

interface Product {
	name: string;
	cost: number;
	amount: number;
}

const StoreWarehouse = () => {
	const [products, setProducts] = useState<Product[]>([
		{ name: 'Acer Predator', cost: 1500, amount: 10 },
		{ name: 'Samsung Monitor', cost: 3000, amount: 0 },
		{ name: 'Tea', cost: 30, amount: 20 },
		{ name: 'Logitech Mouse', cost: 300, amount: 5 },
	]);
	const [name, setName] = useState('');
	const [cost, setCost] = useState<number | ''>('');
	const [amount, setAmount] = useState<number | ''>('');
	const [sorted, setSorted] = useState(false)
	const [nameSorted, setNameSorted] = useState(false);
	const [costSorted, setCostSorted] = useState(false);
	const [amountSorted, setAmountSorted] = useState(false);

	const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const handleCostChange = (event: ChangeEvent<HTMLInputElement>) => {
		isNaN(parseInt(event.target.value)) === true ? setCost(0) : setCost(parseInt(event.target.value))
	};

	const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
		isNaN(parseInt(event.target.value)) === true ? setAmount(0) : setAmount(parseInt(event.target.value));
	};

	const handleSubmit = () => {
		const copyProducts = [...products];
		const newProduct = {
			name: name,
			cost: Number(cost),
			amount: Number(amount)
		};
		if (newProduct.name.trim() === '' && newProduct.cost <= 0 && newProduct.amount <= 0) return;
		let foundProduct = false;
		for (let i = 0; i < copyProducts.length; i++) {
			const product = copyProducts[i];
			const newProductName = newProduct.name.toLowerCase();
			const productName = product.name.toLowerCase();
			if (newProductName === productName) {
				foundProduct = true;
				product.amount += Number(amount);
				product.cost = Number(cost);
				break;
			}
		}
		if (!foundProduct) copyProducts.push(newProduct);
		setProducts(copyProducts);
		setName('');
		setCost('');
		setAmount('');
	};

	const nameSort = () => {
		const sortedProducts = [...products];
		if (!sorted) {
			sortedProducts.sort((prevProduct, nextProduct) => {
				setNameSorted(true);
				return prevProduct.name.localeCompare(nextProduct.name);
			})
			setProducts(sortedProducts);
			setSorted(true);
		}
		else {
			sortedProducts.sort((prevProduct, nextProduct) => {
				setNameSorted(false);
				return nextProduct.name.localeCompare(prevProduct.name);
			});
			setProducts(sortedProducts);
			setSorted(false);
		}
	}

	const numberSort = (name: string) => {
		const sortedProducts = [...products];
		if (!sorted) {
			sortedProducts.sort((prevProduct, nextProduct) => {
				if (name === 'cost') {
					setCostSorted(true);
					return prevProduct.cost - nextProduct.cost;
				}
				else {
					setAmountSorted(true);
					return prevProduct.amount - nextProduct.amount;
				}
			});
			setProducts(sortedProducts);
			setSorted(true);
		}
		else {
			sortedProducts.sort((prevProduct, nextProduct) => {
				setAmountSorted(false);
				setNameSorted(false);
				setCostSorted(false);
				if (name === 'cost') return (prevProduct.cost - nextProduct.cost) * -1;
				return (prevProduct.amount - nextProduct.amount) * -1;
			})
			setProducts(sortedProducts);
			setSorted(false);
		}
	}

	const handleDecrease = (index: number) => {
		const copyProducts = products.reduce((result: Product[], product, currentIndex) => {
			if (currentIndex === index) product.amount -= 1;
			result.push(product);
			return result;
		}, [])
		setProducts(copyProducts);
	};

	const buttons = [
		{ text: 'Product Name', sorted: nameSorted, sort: nameSort },
		{ text: 'Product Price', sorted: costSorted, sort: () => numberSort('cost') },
		{ text: 'Product Quantity', sorted: amountSorted, sort: () => numberSort('amount') },
	]

	return (
		<div className='storewarehouse__container'>
			<h1 className='form-title'>Store warehouse.</h1>
			<Form
				name={name}
				cost={cost}
				amount={amount}
				nameChange={handleNameChange}
				costChange={handleCostChange}
				amountChange={handleAmountChange}
				addProduct={handleSubmit}
			/>
			<div className="products-table">
				{buttons.map((button, index) => (
					<SortButton
						key={index}
						text={button.text}
						sorted={button.sorted}
						sort={button.sort} />
				))}
			</div>
			{products.length > 0 ? (
				products.map((product, index) => (
					<Product
						key={index}
						name={product.name}
						cost={product.cost}
						amount={product.amount}
						decreaseFn={() => handleDecrease(index)} />
				))) : (
				<div className="product">No available products</div>
			)}
		</div>
	);
}

export default StoreWarehouse;