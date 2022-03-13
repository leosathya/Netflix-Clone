import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
	return (
		<div className="App">
			<Nav />
			<Banner />
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={request.fetchActionMovies}
				isLargeRow
			/>

			<Row title="Top Rated" fetchUrl={request.fetchTopRated} isLargeRow />
			<Row title="Trending Now" fetchUrl={request.fetchTrending} isLargeRow />
			<Row
				title="Comedy Movies"
				fetchUrl={request.fetchComedyMovies}
				isLargeRow
			/>
			<Row
				title="Action Movies"
				fetchUrl={request.fetchActionMovies}
				isLargeRow
			/>
			<Row
				title="Horror Movies"
				fetchUrl={request.fetchHorrorMovies}
				isLargeRow
			/>
			<Row
				title="Romance Movies"
				fetchUrl={request.fetchRomanceMovies}
				isLargeRow
			/>
			<Row
				title="Documentaries"
				fetchUrl={request.fetchDocumentaries}
				isLargeRow
			/>
		</div>
	);
}

export default App;
