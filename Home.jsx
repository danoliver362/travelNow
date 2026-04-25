import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>TravelNow ✈️</h1>

      <Link to="/destinos">
        <button>Destinos</button>
      </Link>

      <br /><br />

      <Link to="/clima">
        <button>Clima</button>
      </Link>
    </div>
  );
}

export default Home;