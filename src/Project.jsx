import styles from './Project.module.css';
import macbook from './assets/macbook.png';
import runrampup from './assets/runrampup.png';

const latestWorkData = [
	{
		title: 'Run Ramp Up',
		body: `My biggest project to date, and something I’m proud of.

        Run Ramp Up will build you a running program based on your heart rate zones, allowing you to train efficiently and develop a big aerobic base. `,
		github: 'https://github.com/olliepegram/RunRampUp',
		bgColor: '#E6F1FC',
		tags: ['React', 'HTML', 'CSS'],
		img: runrampup,
		second: false,
		height: '250px',
	},
	{
		title: 'Portfolio',
		body: `The site you're on! Spent more time designing this than I did coding it and was a lot of fun to create.`,
		github: 'https://github.com/olliepegram/Portfolio-2024',
		bgColor: '#FDF1F1',
		tags: ['React', 'HTML', 'CSS'],
		img: macbook,
		second: true,
		height: '250px',
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
					<div
						className={`${styles.projectWrapper} ${
							work.second ? styles.second : ''
						}`}
					>
						<div className={styles.projectText}>
							<h2>{work.title}</h2>
							{work.tags.map((tag) => (
								<div
									className={styles.tags}
									key={index}
								>
									<span>{tag}</span>
								</div>
							))}
							<p>{work.body}</p>
							<button>Read More</button>
						</div>
						<div className={styles.projectImg}>
							<img
								style={{ height: work.height }}
								src={work.img}
							/>
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export default Project;
