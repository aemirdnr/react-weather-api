import Container from "./components/Container/Container";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <Container></Container>
    </WeatherProvider>
  );
}

export default App;
