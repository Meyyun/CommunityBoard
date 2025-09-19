import './App.css';
import Heading from './components/title'
import Card from './components/Cards/Card'
const App = () => {

  return (
    <div className="App">
      <h1>This is a park favorite website </h1>
      <Heading />
      <Card />
    </div>
  )
}

export default App