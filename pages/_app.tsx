import "../styles/globals.css";
import "@fontsource/inter";

import Head from "next/head";
import { Navbar } from "../components/index";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Edazpotato</title>
			</Head>
			<main>
				<Navbar />
				<article>
					<Component {...pageProps} />
				</article>
			</main>
		</>
	);
}
