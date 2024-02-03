import styles from './AboutMe.module.css';

function AboutMe() {
	return (
		<div className={styles.aboutSection}>
			<div className={styles.aboutWrapper}>
				<h4 className={styles.aboutHeader}>About Me</h4>
				<div className={styles.aboutText}>
					<p>
						Hey, I'm Ollie Pegram, where coding meets creativity! 👩‍💻 Passionate
						about crafting digital experiences, I enjoy basing my projects on my
						hobbies.
					</p>
					<p>
						Beyond the screen, you'll find me pounding the pavement in a run,
						exploring my creative side, or immersed in a good book.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
