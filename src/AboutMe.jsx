import styles from './AboutMe.module.css';

function AboutMe() {
	return (
		<div className={styles.aboutSection}>
			<h4 className={styles.aboutHeader}>About Me</h4>
			<div className={styles.aboutWrapper}>
				<div className={styles.aboutText}>
					<span className={styles.readMe}>
						olliepegram/README<span className={styles.md}>.md</span>
					</span>
					<h3>Howdy 👋</h3>
					<hr />
					<p>
						I'm Ollie Pegram, currently working with React and creating some fun
						projects! 👩‍💻 Passionate about crafting digital experiences, I enjoy
						basing my projects on my hobbies.
					</p>
					<p>
						Beyond the screen, you'll find me pounding the pavement in a run,
						exploring my creative side, or immersed in a good book.
					</p>
					<p></p>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
