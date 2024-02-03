import styles from './Project.module.css';

const latestWorkData = [
	{
		title: 'Run Ramp Up',
		body: `My biggest project to date, and something I’m proud of.

        Run Ramp Up will build you a running program based on your heart rate zones, allowing you to train efficiently and develop a big aerobic base. `,
		github: 'https://github.com/olliepegram/RunRampUp',
		bgColor: '#E6F1FC',
		tags: ['React', 'HTML', 'CSS'],
	},
	{
		title: 'Portfolio',
		body: `The site you're on!`,
		github: 'https://github.com/olliepegram/Portfolio-2024',
		bgColor: '#FDF1F1',
		tags: ['React', 'HTML', 'CSS'],
	},
];

function Project() {
	return (
		<div>
			{latestWorkData.map((work, index) => (
				<div
					style={{ backgroundColor: work.bgColor }}
					key={index}
					className={styles.projectSection}
				>
					<div className={styles.projectWrapper}>
						<div className={styles.projectText}>
							<h2>{work.title}</h2>
							{work.tags.map((tag) => (
								<div key={index}>{tag}</div>
							))}
							<p>{work.body}</p>
							<button>See this project</button>
						</div>
						<div className={styles.projectImg}></div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Project;
