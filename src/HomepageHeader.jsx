import styles from './HomepageHeader.module.css';
import icon from './assets/icon.png';

function HomepageHeader() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperText}>
				<h1>Hello, my name is Ollie.</h1>
				<h3>Designing and developing from Sydney, Australia.</h3>
			</div>
			<div className={styles.wrapperIcon}>
				<img src={icon} />
			</div>
		</div>
	);
}

export default HomepageHeader;
