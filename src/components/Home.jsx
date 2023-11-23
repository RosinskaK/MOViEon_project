import BarNavigation from "./BarNavigation";
import Banner from "./Banner";
import Row from "./Row";
import Footer from "./Footer";


function Home() {

  return (
    <div className="home-main-container">
      <BarNavigation />
      <Banner />
      <Row
        title="Najpopularniejsze filmy"
        fetchUrl={
          `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`
        }
        isLargeRow
        isFilm
      />
      <Row
        title="Najnowsze trendy filmowe i TV"
        fetchUrl={`https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}`}
        isFilm
        isSerial
      />
      <Row
        title="Nadchodzące premiery filmowe"
        fetchUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`}
        isFilm
      />
      <Row
        title="Najwyżej oceniane filmy"
        fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`}
        isFilm
      />
      <Row
        title="Najpopularniejsze seriale w TV"
        fetchUrl={`https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_API_KEY}`}
      />
      <Row
        title="Najwyżej oceniane seriale w TV"
        fetchUrl={`https://api.themoviedb.org/3/tv/top_rated?api_key=${import.meta.env.VITE_API_KEY}`}
      />
      <Footer />
    </div>
  );
}

export default Home;
