import "./Select.sass";
import { useRef } from "react";
import { useWeather } from "../../context/WeatherContext";

function Select() {
  const { city, setCity } = useWeather();
  const cityInput = useRef(null);

  return (
    <div className="d-flex gap-4">
      <div className="select__input">
        <input
          ref={cityInput}
          placeholder="City..."
          type="text"
          defaultValue={city}
        />
      </div>
      <button
        className="select__button"
        onClick={() => setCity(cityInput.current.value)}
      >
        Select
      </button>
    </div>
  );
}

export default Select;
