import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';

//url da api: /movie/now_playing/?api_key=9cc78eada6d57a9a412ba7d3ab03a98c&language=pt-BR
const key_api = '9cc78eada6d57a9a412ba7d3ab03a98c';

const Home = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function loadFilmes() {
      const response = await api.get("/movie/now_playing/", {
        params: {
          api_key: key_api,
          language: "pt-BR",
          page: 1,
        }
      })
      //console.log(response.data.results);
      setFilmes(response.data.results.slice(0, 15));
      setLoading(false);
    }

    loadFilmes();


  }, [])

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando Filme...</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id} className="bannerFilm">
              <div className="title">
                <strong>{filme.title}</strong>
              </div>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} className="posterImg" />
              <div className="linkFilme">
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home;