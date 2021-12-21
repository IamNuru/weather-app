
import Main from './Main';
import WeatherState from "./components/context/WeatherState"

function App() {
  return (
    <WeatherState>
      <div className="app p-2 h-screen bg-gray-100 text-center rounded-md mt-1 mx-2 md:mx-4 max-w-screen-xl">
       <Main />
      </div>
    </WeatherState>
  );
}

export default App;
