import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import './filme.css';
import '../Home/home.css';
import { toast } from "react-toastify";


const Filme = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const key_api = '9cc78eada6d57a9a412ba7d3ab03a98c';
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`/movie/${id}`, {
        params: {
          api_key: key_api,
          language: "pt-BR",
        }
      }).then((response) => {
        setFilme(response.data);
        setLoading(false);
      }).catch(() => {
        console.log("FILME NÃO ENCONTRADO.");
        navigate("/", { replace: true })
        return;
      })

    }

    loadFilme();
  }, [id, navigate]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@favoritos");

    let favoritos = JSON.parse(minhaLista) || [];

    const hasFilme = favoritos.some((filmesSalvos) => filmesSalvos.id === filme.id);

    if (hasFilme) {
      toast.warn("filme já está na Lista de favoritos")
      return;
    }
    favoritos.push(filme);
    localStorage.setItem("@favoritos", JSON.stringify(favoritos));
    alert(`Filme [${filme.title}] salvo com sucesso!`)
    toast.success()
  }

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando Filme...</h2>
      </div>
    )
  }

  return (
    <div className="detalhesFilme">
      <h2>{filme.title}</h2>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} className="posterImg" />
      <p><strong>Data Lançamento:</strong> {filme.release_date}</p>
      <hr />
      <p><strong>Sinópse: </strong>{filme.overview}</p>
      <p><strong>Popularidade:</strong> {filme.popularity}</p>
      <div className="area-button">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}

export default Filme;