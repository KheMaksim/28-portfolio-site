import './sortButton.css'

interface Props {
	text: string;
	sorted: boolean;
	sort: () => void;
}

const SortButton = ({ text, sorted, sort}: Props) => {
	return (
		<p className='table-title'>{text} 
			<button
				onClick={sort}
				className='table-sort'>
				{sorted ?
						<img className='button-img' src="https://www.svgrepo.com/show/510303/up-chevron.svg" /> :
						<img className='button-img' src="https://www.svgrepo.com/show/509899/down-chevron.svg" />
					}</button>
			</p>
	)
}

export default SortButton