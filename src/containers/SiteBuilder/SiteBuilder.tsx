import Header from '@/components/Header/Header';
import Home from '@/components/Home/Home';
import Aboutme from '@/components/Aboutme/Aboutme';
import Skills from '@/components/Skills/Skills';
import Contacts from '@/components/Contacts/Contacts';
import { useNavigate } from 'react-router-dom';

const SiteBuilder = () => {
	const navigate = useNavigate()

	const onClickHandler = () => {
		navigate({ pathname: '/portfolio' });
	}

	const linkOnClickHandler = (id: string): void => {
		navigate({ pathname: id });
	}

	return (
		<div>
			<Header linkOnClickHandler={() => linkOnClickHandler} buttonOnClickHandler={onClickHandler} />
			<Home onClickHandler={() => { }} />
			<Aboutme onClickHandler={() => { }} />
			<Skills onClickHandler={() => { }} />
			<Contacts onClickHandler={onClickHandler} />
		</div>
	);
};

export default SiteBuilder;