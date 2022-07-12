import { Link } from 'react-router-dom';
import './erro.css'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
      <Link to="/">Retornar para página Inicial.</Link>
    </div>
  )
}

export default NotFound;