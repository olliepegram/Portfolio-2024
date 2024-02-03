import HomepageHeader from './HomepageHeader';
import styles from './Homepage.module.css';
import AboutMe from './AboutMe';

function Homepage() {
	return (
		<div className={styles.homeWrapper}>
			<HomepageHeader />
			<AboutMe />
		</div>
	);
}

export default Homepage;
