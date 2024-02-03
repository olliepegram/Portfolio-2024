import HomepageHeader from './HomepageHeader';
import styles from './Homepage.module.css';
import AboutMe from './AboutMe';
import Project from './Project';

function Homepage() {
	return (
		<div className={styles.homeWrapper}>
			<HomepageHeader />
			<AboutMe />
			<Project />
		</div>
	);
}

export default Homepage;
