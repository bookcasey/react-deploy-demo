import { useEffect } from 'react';
import { BrowserRouter as Router, Link, useHistory, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import './App.css';

// TODO: review useRouteMatch
// TODO: review nested routes

function Dinosaur() {
  const { id } = useParams();
  const { path, url } = useRouteMatch();
  console.log(useRouteMatch());
  const history = useHistory();

  useEffect(() => {
    // GET request for some dino info
    if (isNaN(parseInt(id))) {
      history.push('/not-found');
    }
  }, [id, history])

  return (
    <div>
      <nav>
        <Link to={url}>Dino home</Link> <br />
        <Link to={`${url}/locations`}>Locations</Link>
      </nav>
      <Switch>
        <Route path={`${path}/locations`}>
          <p>Locations!</p>
        </Route>
        <Route>
          <p>ID: {id}</p>
        </Route>
      </Switch>
    </div>
  )
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
