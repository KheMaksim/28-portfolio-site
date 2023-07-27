import { useEffect, useState } from 'react';
import Ring from './components/ring/ring';
import Square from './components/square/square';
import Counter from './components/counter/counter';
import ResetButton from './components/resetButtton/resetButton';
import Modal from './components/modal/modal';
import './gameArea.css'

interface ISquare {
	key: number,
	index: number,
	isWin: boolean,
	toggled: boolean,
}

const GameArea = () => {
	const [squares, setSquares] = useState<ISquare[]>([]);
	const [counter, setCounter] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const addSquares = () => {
		const copySquares = [];
		const randomWinIndex = Math.floor(Math.random() * 36);
		for (let i = 0; i < 36; i++) {
			copySquares.push({
				key: i,
				isWin: i === randomWinIndex,
				index: i,
				toggled: false,
			});
		}
		setSquares(copySquares);
	};

	const resetSquares = () => {
		setSquares([]);
		addSquares();
		setCounter(0);
	}

	const toggleSquare = (index: number) => {
		if (!squares[index].toggled) setCounter(counter + 1);

		if (squares[index].isWin) {
			const updatedSquares = squares.map((square) => ({ ...square, toggled: true }));
			setSquares(updatedSquares);
			setIsOpen(true);
		}
		else {
			const updatedSquares = squares.map((square) =>
				square.index === index ? { ...square, toggled: true } : square);
			setSquares(updatedSquares);
		}
	};

	const render = () => {
		return squares.map((square) => {
			return square.isWin ? (
				<Square
					key={square.key}
					index={square.index}
					toggled={square.toggled}
					toggleSquare={toggleSquare}>
					<Ring guessed={square.toggled} />
				</Square>
			) : (
				<Square
					key={square.key}
					index={square.index}
					toggled={square.toggled}
					toggleSquare={toggleSquare}
					children={null}></Square>
			);
		});
	}

	useEffect(() => {
		addSquares();
	}, []);

	return (
		<div className='gamearea__container'>
			<div className="gamearea">
				{render()}
			</div>
			<Counter value={counter} />
			<ResetButton onClick={resetSquares}>reset</ResetButton>
			<div>
				<Modal isOpen={isOpen} >
					<h2 className='game__modal-title'>Поздравляем!</h2>
					<p className='game__modal-subtitle'>Вы победили с {counter} попытки.</p>
					<ResetButton onClick={() => {
						setIsOpen(false);
						resetSquares()
					}}>Закрыть</ResetButton>
				</Modal>
			</div>
		</div>
	);
};

export default GameArea;