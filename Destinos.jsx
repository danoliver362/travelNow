import { Link } from "react-router-dom";

function Destinos() {
  return (
    <div>
      <h2>Destinos disponíveis ✈️</h2>

      <ul>
        <li>Rio de Janeiro</li>
        <li>São Paulo</li>
        <li>Paris</li>
        <li>Nova York</li>
      </ul>

      <br />
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Destinos;