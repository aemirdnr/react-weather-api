import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("İstanbul");
  const [weather, setWeather] = useState({});
  const [err, setErr] = useState(false);

  const API_KEY = "8dfb4a59db45fac738b61477b8d175cb";

  useEffect(() => {
    const API =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      API_KEY;

    axios(API)
      .then((res) => {
        setWeather({
          city: res.data.name,
          temp: res.data.main.temp,
          icon: res.data.weather[0].icon,
          type: res.data.weather[0].main,
          alt: res.data.weather[0].description,
        });

        setErr(false);
      })
      .catch((error) => {
        setErr(true);
      });
  }, [city]);

  const values = {
    city,
    setCity,
    weather,
    err,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
