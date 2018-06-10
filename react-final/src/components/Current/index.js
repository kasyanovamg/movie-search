import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CurrentMovie from './CurrentMovie'
import CurrentMovieGrid from './CurrentMovieGrid'
import SearchResults from '../Common/SearchResults'
import Header from '../Common/Header'

const propTypes = {
  current: PropTypes.array,
  fetchCurrentMovieData: PropTypes.func,
  addToFav: PropTypes.func,
  removeFromFav: PropTypes.func,
  fetchSameDirector: PropTypes.func,
  favorites: PropTypes.object,
  loading: PropTypes.bool,
  errored: PropTypes.bool,
};

class Current extends Component {
  componentDidMount() {
    this.props.fetchCurrentMovieData(this.props.searchQuery)

  }

  componentDidUpdate(prevProps) {
    if (this.props.searchQuery !== prevProps.searchQuery) {
      this.props.fetchCurrentMovieData(this.props.searchQuery)
    }
  }

  render() {
    let director = this.props.current[0] ? this.props.current[0].director[0] : '';

    return (
      <div>
        <Header linkToFav={false}/>
        <div className="back">
          <CurrentMovie current={this.props.current[0]}
            addToFav={this.props.addToFav}
            removeFromFav={this.props.removeFromFav}
            favorites={this.props.favorites} />
        </div>

        <SearchResults search={director} page={'current'}/>

        {director.length > 0 &&
          <CurrentMovieGrid
            director={director}
            fetchSameDirector={this.props.fetchSameDirector}
            moviesBySameDirector={this.props.moviesBySameDirector}
            loading={this.props.moviesIsLoading}
            errored={this.props.moviesHasErrored}
            addToFav={this.props.addToFav}
            removeFromFav={this.props.removeFromFav}
            favorites={this.props.favorites}
            fetchCurrentMovieData={this.props.fetchCurrentMovieData}
            searchQuery={this.props.searchQuery}
            currentID={this.props.current[0].id}
          />}

      </div>
    )
  }
}

Current.propTypes = propTypes;

export default Current;
