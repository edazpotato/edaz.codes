import Head from "next/head";
import styles from "../styles/Datapacks.module.css";

type Datapack = {
	name: string;
	date: number;
	id: string;
	description?: string;
	testedVersions?: string[];
	links: { url: string; label: string; download?: boolean }[];
};

const datapacks: Datapack[] = [
	{
		id: "loot_chests",
		name: "Loot chests",
		date: 1629547200000,
		description: "Simple loot chests for Minecraft map creators.",
		testedVersions: ["1.17.1"],
		links: [
			{
				label: "Downloads",
				url: "https://github.com/edazpotato/loot-chests-datapack/releases",
			},
			{
				label: "Github",
				url: "https://github.com/edazpotato/loot-chests-datapack",
			},
			{
				label: "Video",
				url: "https://youtu.be/G2LA07Z1tI0",
			},
		],
	},
	{
		id: "maple_syrup",
		name: "Maple syrup",
		date: 1601290800000,
		description:
			"Made for Code_Zealot's 2020 autum datapack competition, this datapack adds maple syrup to your minecraft world!",
		testedVersions: ["1.16.4"],
		links: [
			{
				label: "Download",
				url: "https://edazpotato.github.io/legacy/datapacks/packs/Maple_syrup_1.16.3_UNZIP_ME.zip",
				download: true,
			},
			{
				label: "Video",
				url: "https://youtu.be/Dj8gQIxkGQs",
			},
		],
	},
	{
		id: "magic_staves",
		name: "Magic Staves",
		date: 1598702400000,
		description:
			"A datapack that adds a bunch of magical staves to your world.",
		testedVersions: ["1.14.4"],
		links: [
			{
				label: "Download",
				url: "https://edazpotato.github.io/legacy/datapacks/packs/Maple_syrup_1.16.3_UNZIP_ME.zip",
				download: true,
			},
			{
				label: "Video",
				url: "https://youtu.be/XvpHfUOliiI",
			},
		],
	},
];

export default function Datapacks(props: { datapacks: Datapack[] }) {
	return (
		<>
			<Head>
				<title>Datapacks by Edazpotato</title>
			</Head>

			<h1 className={styles.title}>
				My <b className={styles.bold}>datapacks</b>:
			</h1>
			<ul className={styles.datapacks}>
				{props.datapacks
					.sort((a, b) => (a.date > b.date ? a.date : b.date))
					.map((datapack) => (
						<li
							className={styles.datapack}
							key={datapack.id}
							id={datapack.id}
						>
							<section className={styles.datapackTitle}>
								<h1>{datapack.name}</h1>
								<h3>
									Last updated{" "}
									{new Date(
										datapack.date
									).toLocaleDateString()}
								</h3>
							</section>
							{datapack.testedVersions && (
								<h2>
									Tested on{" "}
									{datapack.testedVersions.sort().join(", ")}.
								</h2>
							)}
							<p>{datapack.description}</p>
							<ul>
								{datapack.links.map((link) => (
									<li key={link.url}>
										<a
											rel="noopener noreferrer"
											href={link.url}
											target="_blank"
											download={link.download}
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</li>
					))}
			</ul>
		</>
	);
}

export function getStaticProps() {
	return {
		props: {
			datapacks,
		},
	};
}
