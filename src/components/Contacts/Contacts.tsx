import { MouseEventHandler } from 'react';
import './Contacts.css';

interface Props {
	onClickHandler: MouseEventHandler<HTMLButtonElement>;
}

interface ILink {
	href: string;
	src: string;
	alt: string;
	text: string;
}

const links: ILink[] = [
	{ href: '#', src: '/phone.png', alt: 'phone', text: 'Telefon number: +7(702)-681-65-04', },
	{ href: '#', src: '/mail.png', alt: 'mail', text: 'Mail: maksim160100@gmail.com', },
	{ href: 'https://github.com/KheMaksim?tab=repositories', src: '/github.png', alt: 'github', text: 'Github: KheMaksim', },
	{ href: 'https://t.me/haaengbog', src: '/telegram.png', alt: 'telegram', text: 'Telegram: @haaengbog', },
	{ href: 'https://wa.me/+77026816504', src: '/whatsapp.png', alt: 'whatsapp', text: 'Whatsapp: +7(702)-681-65-04', }
]

const Contacts = ({ onClickHandler }: Props) => {
	return (
		<section className='contacts__container' id='contacts'>
			<div className="contacts">
				<h2 className='contacts__title'>If u want more details check my portfolio</h2>
				<button className="button" onClick={onClickHandler}>Portolio &#8594;</button>
				<h2 className='contacts__title'>Contacts</h2>
			</div>
			<footer className="footer">
				<img className='footer__laptop' src="/laptop.png" alt="laptop" />
				<img className='footer__provod' src="/provoda.png" alt="provoda" />
				<img className='footer__cabel' src="/cabel.png" alt="provoda" />
				<div className="contacts__content">
					{links.map((link, index) => <a key={index} className='contacts__info' href={link.href}>
						<img className='contacts__logo' src={link.src} alt={link.alt} />{link.text}</a>
					)}
				</div>
			</footer>
		</section>
	);
}

export default Contacts;