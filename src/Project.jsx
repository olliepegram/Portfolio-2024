import styles from './Project.module.css';
import macbook from './assets/macbook.png';
import runrampup from './assets/runrampup.png';

const latestWorkData = [
	{
		title: 'Run Ramp Up',
		body: `My biggest project to date, and something I’m proud of.

        Run Ramp Up will build you a running program based on your heart rate zones, allowing you to train efficiently and develop a big aerobic base. `,
		url: 'https://runrampup.com/',
		github: 'https://github.com/olliepegram/RunRampUp',
		bgColor: '#E6F1FC',
		tags: ['React', 'HTML', 'CSS'],
		img: runrampup,
		second: false,
		id: crypto.randomUUID(),
	},
	{
		title: 'Portfolio',
		body: `The site you're on! Spent more time designing this than I did coding it and was a lot of fun to create.`,
		url: 'https://olliepegram.com/',
		github: 'https://github.com/olliepegram/Portfolio-2024',
		bgColor: '#FDF1F1',
		tags: ['React', 'HTML', 'CSS'],
		img: macbook,
		second: true,
		id: crypto.randomUUID(),
	},
];

function Project() {
	return (
		<>
			{latestWorkData.map((work, index) => (
				<div
					style={{ backgroundColor: work.bgColor }}
					key={index}
					className={styles.projectSection}
				>
					<h4 className={styles.latestText}>LATEST WORK</h4>
					<div className={`${styles.projectWrapper}`}>
						<div className={styles.projectText}>
							<h2>{work.title}</h2>
							{work.tags.map((tag, i) => (
								<div
									className={styles.tags}
									key={i}
								>
									<span>{tag}</span>
								</div>
							))}
							<p>{work.body}</p>
							<a
								href={work.github}
								target='_blank'
								rel='noopener noreferrer'
							>
								<button>See More</button>
							</a>
							<a
								href={work.url}
								target='_blank'
								rel='noopener noreferrer'
								className={styles.liveLink}
							>
								<span>Live Link</span>
							</a>
						</div>
						<div className={styles.projectImg}>
							<img src={work.img} />
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export default Project;
