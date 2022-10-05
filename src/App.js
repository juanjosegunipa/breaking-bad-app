import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Quotes from './pages/Quotes';
import Deaths from './pages/Deaths';
import SingleCharacter from './pages/SingleCharacter';
import SingleEpisode from './pages/SingleEpisode';
import SingleDeath from './pages/SingleDeath';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/characters/:characterId' element={<SingleCharacter />} />
        <Route path='/characters/name/:characterName' element={<SingleCharacter />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/episodes/:episodeId' element={<SingleEpisode />} />
        <Route path='/quotes' element={<Quotes />} />
        <Route path='/deaths' element={<Deaths />} />
        <Route path='/deaths/name/:characterName' element={<SingleDeath />} />
      </Routes>
    </div>
  );
}

export default App;
