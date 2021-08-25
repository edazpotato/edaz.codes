import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<section className={styles.title}>
				<h1>
					Yo, I{"'"}m <span className={styles.name}>Edaz Potato</span>
					.
				</h1>
				<h2>
					I make <em className={styles.italic}>cool as</em> stuff.
				</h2>
			</section>
			<ul className={styles.links}>
				<li>
					<a
						href="https://github.com/edazpotato"
						rel="noopener noreferrer"
						target="_blank"
					>
						Github
					</a>
				</li>
				<li>
					<a
						href="https://discord.gg/mzR7eeZ"
						rel="noopener noreferrer"
						target="_blank"
					>
						Discord guild
					</a>
				</li>
				<li>
					<a
						href="https://youtube.com/channel/UCK1ME1J0XNbN31bCOV9UjKw"
						rel="noopener noreferrer"
						target="_blank"
					>
						YouTube channel
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com/edazpotato"
						rel="noopener noreferrer"
						target="_blank"
					>
						Twitter
					</a>
				</li>
				<li>
					<a
						href="https://edazpotato.github.io"
						rel="noopener noreferrer"
						target="_blank"
					>
						Old website
					</a>
				</li>
			</ul>
		</>
	);
}
