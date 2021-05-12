
import Main from './Main';
import WeatherState from "./components/context/WeatherState"

function App() {
  return (
    <WeatherState>
      <div className="app container max-w-lg h-screen text-center m-auto rounded-md mt-1">
       <Main />
      </div>
    </WeatherState>
  );
}

export default App;
