import "./Weather.sass";
import { useWeather } from "../../context/WeatherContext";

function Weather() {
  const { city, weather, err } = useWeather();

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h2>{city}</h2>
      {!err ? (
        <div className="d-flex justify-content-center gap-3 mt-4">
          <div className="weather__card">
            <span>{weather.temp + " °C"}</span>
            <img
              src={
                "http://openweathermap.org/img/wn/" + weather.icon + "@2x.png"
              }
              alt={weather.alt}
            />
            <span>{new Date().toLocaleString()}</span>
          </div>
        </div>
      ) : (
        <h1 className="mt-5">Couldn't find any data for this city.</h1>
      )}
    </div>
  );
}

export default Weather;
