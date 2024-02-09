import { useState } from 'react';
import styles from './HomepageHeader.module.css';
import icon from './assets/icon.png';

function HomepageHeader() {
	// const [active, setActive] = useState(false);

	// const handleNavClick = () => {
	// 	console.log(active);
	// 	setActive(!active);
	// };

	return (
		<section className={styles.heroSection}>
			{/* <div className={`${styles.offScreenMenu} ${active ? styles.active : ''}`}>
				<ul>
					<li>About</li>
					<li>Portfolio</li>
					<li>Contact</li>
				</ul>
			</div>
			<nav>
				<div
					onClick={handleNavClick}
					className={`${styles.hamMenu} ${active ? styles.active : ''}`}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</nav> */}
			<div className={styles.wrapper}>
				<div className={styles.wrapperText}>
					<h1 className={styles.longHeader}>Hello, my ‎</h1>
					<h1 className={styles.longHeader}>
						name is <span className={styles.highlightOllie}>Ollie.</span>
					</h1>
					<h1 className={styles.smallHeader}>
						Hello, my name is{' '}
						<span className={styles.highlightOllie}>Ollie.</span>
					</h1>
					<h3>
						<span className={styles.blueText}>Designing</span> and{' '}
						<span className={styles.blueText}>Developing</span> from Sydney,
						Australia.
					</h3>
				</div>
				<div className={styles.wrapperIcon}>
					<img src={icon} />
				</div>
			</div>
			<div className={styles.outerArrow}>
				<div className={styles.arrow}></div>
			</div>
		</section>
	);
}

export default HomepageHeader;
