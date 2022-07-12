import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import '../Home';
import './favoritos.css';

const Favoritos = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const favoritos = localStorage.getItem("@favoritos");
    setFilmes(JSON.parse(favoritos) || []);
  }, [])

  function removerFilme(id) {
    let listaFilmes = filmes.filter(filme => {
      return (filme.id !== id)
    });
    setFilmes(listaFilmes);
    localStorage.setItem("@favoritos", JSON.stringify(listaFilmes));
    toast.success('Filme removido com sucesso')
    //alert('Filme removido com sucesso');
  }

  return (
    <div className="container">

      <div className="lista-filmes">
        <h1>Lista de Favoritos</h1>
        {filmes.length === 0 && <span>Você não Possui nenhum filme</span>}
        {filmes.map((filme) => {
          return (
            <article key={filme.id} className="bannerFilm">
              <div className="title">
                <strong>{filme.title}</strong>
              </div>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} className="posterImg" />
              <button className="remover" onClick={() => removerFilme(filme.id)}>
                <label>Remover</label>
              </button>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Favoritos;