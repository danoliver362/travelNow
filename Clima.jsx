import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Clima() {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=-22.9&longitude=-43.2&current_weather=true")
      .then(res => res.json())
      .then(data => {
        setTemp(data.current_weather.temperature);
      });
  }, []);

  return (
    <div>
      <h2>Clima 🌡️</h2>

      {temp ? <p>{temp} °C</p> : <p>Carregando...</p>}

      <br />
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Clima;