import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import FavoritesContainer from '../../containers/FavoritesContainer'
import HomeContainer from '../../containers/HomeContainer'
import CurrentMovieContainer from '../../containers/CurrentMovieContainer'
import Footer from '../Common/Footer'
import { ErrorBoundary } from '../ErrorBoundary'
import './styles.css';

class App extends Component {

  render() {
    return (
      <ErrorBoundary>
        <div className="page">

          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route path="/search/:id" render={({ match, history }) =>
              <HomeContainer searchQuery={match.params.id} history={history} />} />
            <Route path='/film/:id' render={({ match }) =>
              <CurrentMovieContainer searchQuery={match.params.id} />} />
            <Route path='/favorite' component={FavoritesContainer} />
            <Redirect to='/' />
          </Switch>

          <Footer />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
