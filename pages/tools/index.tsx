import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Tools() {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Things by Edazpotato</title>
			</Head>
			<h1>Things I{"'"}ve made</h1>
			<section>
				<h2>Tools</h2>
				<ul>
					<li>
						<Link href={`${router.route}/outlinr`}>
							<a>Outlinr</a>
						</Link>{" "}
						- Simple note taking that saves to your browser storage.
					</li>
					<li>
						<a
							href="https://edazpotato.github.io/whiteboard/"
							rel="noopener noreferrer"
						>
							Whiteboard
						</a>{" "}
						- Very simple online drawing pad that <em>sometimes</em>{" "}
						autosaves.
					</li>
				</ul>
			</section>
			<section>
				<h2>Packages</h2>
				<ul>
					<li>
						<a
							href="https://npmjs.com/package/astro-feather-icons"
							rel="noopener noreferrer"
						>
							astro-feather-icons
						</a>{" "}
						- Feather icons as{" "}
						<a
							href="https://astro.build/"
							rel="noopener noreferrer"
						>
							Astro
						</a>{" "}
						components.{" "}
						<a
							href="https://github.com/edazpotato/astro-feather-icons"
							rel="noopener noreferrer"
						>
							Github repo
						</a>
						.
					</li>
				</ul>
			</section>
			<section>
				<h2>Apps</h2>
				<ul>
					<li>
						<a
							href="https://github.com/edazpotato/cool-looking-dashboard"
							rel="noopener noreferrer"
						>
							Cool-looking dashboard
						</a>{" "}
						- It looks{" "}
						<em>
							<strong>C O O L</strong>
						</em>
						.
					</li>
				</ul>
			</section>
			<hr />
			<section>
				<h2>Retired projects</h2>
				<ul>
					<li>
						<a
							href="https://github.com/edazpotato/senutila"
							rel="noopener noreferrer"
						>
							Senutila
						</a>{" "}
						- Simple Discord bot framework built around the
						Interactions API.
					</li>
				</ul>
			</section>
		</>
	);
}
