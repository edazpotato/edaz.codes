import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Tools.module.css";
import { useRouter } from "next/router";

export default function Tools() {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Tools by Edazpotato</title>
			</Head>
			<h1 className={styles.title}>Tools I{"'"}ve made</h1>
			<ul>
				<li>
					<Link href={`${router.route}/outlinr`}>
						<a>Outlinr</a>
					</Link>{" "}
					- Simple note taking that saves to your browser storage.
				</li>
				<li>
					<a
						href="https://senutila.edaz.codes/"
						rel="noopener noreferrer"
						target="_blank"
					>
						Senutila
					</a>{" "}
					- Simple Discord bot framework built around the Interactions
					API.
				</li>
				<li>
					<a
						href="https://edazpotato.github.io/whiteboard/"
						rel="noopener noreferrer"
						target="_blank"
					>
						Whiteboard
					</a>{" "}
					- Very simple online drawing pad that sometimes saves to
					localstorage.
				</li>
			</ul>
		</>
	);
}
