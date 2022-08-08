import Container from "./components/Container/Container";
import { WeatherProvider } from "./context/WeatherContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <Container></Container>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
