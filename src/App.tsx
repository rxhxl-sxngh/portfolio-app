import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import PortfolioVisualizer from './components/PortfolioVisualizer'

function App() {
  return (
    <Router>
      <div className="App">
        <PortfolioVisualizer />
      </div>
    </Router>
  )
}

export default App
