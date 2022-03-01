import './App.css';
import GameSelection from './GameSelection';
import Game from './Game';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';



function App() {


  return (
    <Router>
      <Switch>
        <Route exact path ="/Game/:id/:name">
          <Game />
        </Route>
        <Route exact path="/">
          <GameSelection />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
