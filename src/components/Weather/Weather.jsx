import "./Weather.sass";
import { useWeather } from "../../context/WeatherContext";

function Weather() {
  const { city } = useWeather();

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h2>{city}</h2>
      <div className="row justify-content-center gap-3 mt-4">
        <div className="weather__card col-1">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" />
          <span>Monday</span>
          <span>30 °C</span>
        </div>
        <div className="weather__card col-1">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" />
          <span>Tuesday</span>
          <span>30 °C</span>
        </div>
        <div className="weather__card col-1">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" />
          <span>Wednesday</span>
          <span>30 °C</span>
        </div>
        <div className="weather__card col-1">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" />
          <span>Thursday</span>
          <span>30 °C</span>
        </div>
        <div className="weather__card col-1">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" />
          <span>Friday</span>
          <span>30 °C</span>
        </div>
        <div className="weather__card col-1">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" />
          <span>Saturday</span>
          <span>30 °C</span>
        </div>
        <div className="weather__card col-1">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" />
          <span>Sunday</span>
          <span>30 °C</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;
