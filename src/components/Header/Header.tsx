import { MouseEventHandler, useState } from 'react';
import './header.css';
import { Link } from 'react-scroll';
interface Props {
	linkOnClickHandler: (index: number) => void;
	buttonOnClickHandler: MouseEventHandler<HTMLAnchorElement>;
}

interface MenuItem {
	label: string;
	link: string;
};

const menuItems: MenuItem[] = [
	{ label: 'About Me', link: 'about' },
	{ label: 'Skills', link: 'skills' },
	{ label: 'Portfolio', link: 'portfolio' },
	{ label: 'Contacts', link: 'contacts' },
];

const Header = ({ linkOnClickHandler, buttonOnClickHandler }: Props) => {
	const [showNav, setShowNav] = useState<boolean>(false);

	const handleClick = () => {
		setShowNav(!showNav);
		setTimeout(() => setShowNav(false), 5000);
	}

	return (
		<>
			<span id='home'></span>
			<header className="header">
				<Link
					to="home"
					smooth={true}
					duration={400}
					className="header__link"
					onClick={() => {
						linkOnClickHandler(0);
						setShowNav(false);
					}}>Home</Link>
				<div className="header__burger">
					<img
						className="header__burger-icon"
						src="/burger.png"
						alt="burger"
						onClick={handleClick} />
					{showNav ? (
						<nav className="header__menu-burger">
							{menuItems.map((item, index) => {
								if (item.label === 'Portfolio') {
									return (
										<a className="header__link" onClick={buttonOnClickHandler} key={index}>
											Portolio &#8594;
										</a>
									);
								} else {
									return (
										<Link
											key={index}
											to={item.link}
											smooth={true}
											duration={400}
											className="header__link"
											onClick={() => {
												linkOnClickHandler(index + 1);
												setShowNav(false)
											}}
										>
											{item.label}
										</Link>
									);
								}
							})}
						</nav>
					) : (
						<nav className="header__menu">
							{menuItems.map((item, index) => {
								if (item.label === 'Portfolio') {
									return (
										<a className="header__link" onClick={buttonOnClickHandler} key={index}>
											Portolio &#8594;
										</a>
									);
								} else {
									return (
										<Link
											key={index}
											to={item.link}
											smooth={true}
											duration={400}
											className="header__link"
											onClick={() => {
												linkOnClickHandler(index + 1);
												setShowNav(false)
											}}
										>
											{item.label}
										</Link>
									);
								}
							})}
						</nav>)}
				</div>
			</header>
		</>
	);
};

export default Header;