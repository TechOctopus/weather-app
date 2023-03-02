import './App.css'
import AdditionalData from './components/AdditionalData'
import Contrlos from './components/Controls'
import Header from './components/Header'
import WeatherData from './components/WeatherData'

function App() {
  return (
    <div className="App">
      <Header title='Bratislava, rigion of Bratislava | Slovakia' />
      <Contrlos />
      <WeatherData />
      <AdditionalData />
    </div>
  )
}

export default App
