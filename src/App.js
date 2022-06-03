import logo from "./logo.svg";
import "./App.css";

function App() {
  const moviesdb = [
    {
      name: "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS",
      rating: "86%",
      poster:
        "https://resizing.flixster.com/SRkyGZltCSxA5L1j_CF9ILnCrFM=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzJjYjYwMDE3LWI2OTctNDcwOC04NDlmLThmNWU4NWY4NDA2YS5qcGc=",
      summary:
        "Journey into the unknown with Doctor Strange, who, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
      director: "Sam Raimi",
    },
    {
      name: "THE BATMAN",
      rating: "87%",
      poster:
        "https://i0.wp.com/batman-news.com/wp-content/uploads/2022/01/The-Batman-2022-Sunset-Poster-01.jpeg?fit=2764%2C4096&quality=80&strip=info&ssl=1",
      summary:
        "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis.",
      director: "Matt Reeves",
    },
    {
      name: "UNCHARTED",
      rating: "90%",
      poster: "https://flxt.tmsimg.com/assets/p19458781_v_v13_ad.jpg",
      summary:
        "Victor Sullivan recruits Nathan Drake to help him find the lost fortune of Ferdinand Magellan. However, they face competition from Santiago Moncada, who believes that the treasure belongs to him.",
      director: "Ruben Fleischer",
    },
    {
      name: "THE GENTLEMEN",
      rating: "84%",
      poster:
        "https://resizing.flixster.com/ApAPpZDqepKiMByMbdUo0NrhAr0=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzQzZjMyMThmLTBlMzYtNDcyYy05OGY2LWRlOTUyOTlkYzdkMy53ZWJw",
      summary:
        "When cannabis mogul Mickey Pearson plans to sell his profitable marijuana empire following his retirement, it stimulates an array of wrongdoings in the name of greed.",
      director: "Guy Ritchie",
    },
    {
      name: "STAR WARS: THE RISE OF SKYWALKER",
      rating: "86%",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
      summary:
        "The revival of Emperor Palpatine resurrects the battle between the Resistance and the First Order while the Jedi's legendary conflict with the Sith Lord comes to a head.",
      director: "J.J. Abrams",
    },
    {
      name: "DUNE",
      rating: "90%",
      poster:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2a5bb2105168471.5f733bb4cec20.jpg",
      summary:
        "Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource.",
      director: "Denis Villeneuve",
    },
    {
      name: "NO TIME TO DIE ",
      rating: "88%",
      poster:
        "https://www.heswallhall.co.uk/images/NoTimeToDie_02_Poster-1500x2224.jpg",
      summary:
        "The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
      director: "Cary Joji Fukunaga",
    },
  ];
  return (
    <div className="App">
      {moviesdb.map((movie) => (
        <MoviesApp
          name={movie.name}
          rating={movie.rating}
          poster={movie.poster}
          summary={movie.summary}
          director={movie.director}
        />
      ))}
    </div>
  );
}

export default App;
function MoviesApp({ name, rating, poster, director, summary }) {
  return (
    <div className="moviebox">
      <img ClassName="poster" src={poster} alt="movie poster" />
      <h1 className="moviename">{name}</h1>
      <h3 className="ratings">Audience Score:🍿 {rating}</h3>
      <h3 className="director">Director: {director}</h3>
      <p className="summary">{summary}</p>
    </div>
  );
}
