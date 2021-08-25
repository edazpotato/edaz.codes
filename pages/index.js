import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home - Edazpotato</title>
			</Head>
			<section className={styles.wrapper}>
				<h1>Yo.</h1>
				<h2>
					I{"'"}m <span className={styles.name}>Edaz Potato</span>. I
					make <em className={styles.italic}>cool as</em> stuff.
				</h2>
				<nav className={styles.links}>
					<a href="https://github.com/edazpotato" rel="noopener">
						Github
					</a>
					<a href="https://discord.gg/mzR7eeZ" rel="noopener">
						Discord guild
					</a>
					<a
						href="https://youtube.com/channel/UCK1ME1J0XNbN31bCOV9UjKw"
						rel="noopener"
					>
						YouTube channel
					</a>
					<a href="https://twitter.com/edazpotato" rel="noopener">
						Twitter
					</a>
					<a href="https://edazpotato.github.io" rel="noopener">
						Old website
					</a>
				</nav>
			</section>
		</>
	);
}
