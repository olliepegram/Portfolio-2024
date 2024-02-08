import HomepageHeader from './HomepageHeader';
import styles from './Homepage.module.css';
import AboutMe from './AboutMe';
import Project from './Project';
import Footer from './Footer';

function Homepage() {
	return (
		<div className={styles.homeWrapper}>
			<HomepageHeader />
			<AboutMe />
			<Project />
			<Footer />
		</div>
	);
}

export default Homepage;
