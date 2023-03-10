import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState([]);
  
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  

  

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movie.map((movie) => (
            <Movie key={movie.id} title = {movie.title} coverImg ={movie.medium_cover_image} summary = {movie.summary} genres = {movie.genres}/>
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
