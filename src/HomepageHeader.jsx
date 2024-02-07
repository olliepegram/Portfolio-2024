import styles from './HomepageHeader.module.css';
import icon from './assets/icon.png';

function HomepageHeader() {
	return (
		<section className={styles.heroSection}>
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
		</section>
	);
}

export default HomepageHeader;
