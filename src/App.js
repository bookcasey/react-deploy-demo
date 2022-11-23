import { useEffect } from 'react';
import { BrowserRouter as Router, useHistory, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import './App.css';

// TODO: review useRouteMatch
// TODO: review nested routes

function Dinosaur() {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    // GET request for some dino info
    if (isNaN(parseInt(id))) {
      history.push('/not-found');
    }
  }, [id, history])

  return <p>ID: {id}</p>
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          Homepage
        </Route>
        <Route path='/dinosaurs/new'>
          Form for a new dinosaur
        </Route>
        <Route path='/dinosaurs/:id'>
          <Dinosaur />
        </Route>
        <Route path='/dinosaurs'>
          DINOSAUR!
        </Route>
        <Route>
          404 not found
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
