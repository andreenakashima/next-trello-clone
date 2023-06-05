import { Board } from "@/components/Board";
import Header from "@/components/Header";

export default function Home() {
	return (
		<main>
			<Header />
			<h1>Trello AI clone</h1>
			<Board />
		</main>
	);
}
