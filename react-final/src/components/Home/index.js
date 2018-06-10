import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MovieGrid from './MovieGrid'
import SearchBtn from '../Common/SearchBtn'
import SearchByBtn from '../Common/SearchByBtn'
import SearchResults from '../Common/SearchResults'
import Header from '../Common/Header'
import './styles.css';

const propTypes = {
  fetchData: PropTypes.func,
  searchBy: PropTypes.string,
  searchData: PropTypes.func,
  movies: PropTypes.array,
  sortBy: PropTypes.string,
  sortData: PropTypes.func,
  searchQuery: PropTypes.string,
  loading: PropTypes.bool,
  errored: PropTypes.bool,
  addToFav: PropTypes.func,
  removeFromFav: PropTypes.func,
  favorites: PropTypes.object,
  emptyMovieArray: PropTypes.func,
};

class Home extends Component {
  state = { search: '' }
  handleInput = (event) => {
    this.setState({ search: event.target.value })
  }
  submitInput = () => {
    this.props.history.push(`/search/${this.state ? this.state.search : ""}`);
    this.state.search.length === 0 && this.props.emptyMovieArray()
  }

  render() {

    const { search } = this.state;
    return (
      <div>
        <Header linkToFav={true} emptyMovieArray={this.props.emptyMovieArray}/>
        <div className="back">

          <div className="home container">
            <h1 className="home__title">find your movie</h1>

            <div className="home__searchfield">
              <form onSubmit={(e) => { e.preventDefault(); this.submitInput() }} >
                <input type="textarea" className="home__searchbar" value={search} onChange={this.handleInput}></input>
              </form>
              <div className="home__searchspecs">
                <div className="home__searchby">
                  Search by
                  <SearchByBtn onClick={() => this.props.searchData('title')}
                    btnClass={this.props.searchBy === 'title' ? 'focus' : ''} text={'title'} />
                  <SearchByBtn onClick={() => this.props.searchData('director')}
                    btnClass={this.props.searchBy === 'director' ? 'focus' : ''} text={'director'} />
                </div>

                <SearchBtn search={this.state ? this.state.search : ""}
                  onClick={() => { this.submitInput() }} />

              </div>
            </div>

          </div>
        </div>

        <SearchResults
          movies={this.props.movies}
          sortBy={this.props.sortBy}
          searchBy={this.props.searchBy}
          sortData={this.props.sortData}
          fetchData={this.props.fetchData}
          search={this.state ? this.state.search : "no_results"}
          page={'home'}
          searchQuery={this.props.searchQuery} />

        <MovieGrid
          searchQuery={this.props.searchQuery}
          movies={this.props.movies}
          loading={this.props.isLoading}
          errored={this.props.hasErrored}
          fetchData={this.props.fetchData}
          addToFav={this.props.addToFav}
          removeFromFav={this.props.removeFromFav}
          favorites={this.props.favorites}
          searchBy={this.props.searchBy}
          sortBy={this.props.sortBy}
          emptyMovieArray={this.props.emptyMovieArray}
        />
      </div>
    );
  }
}

Home.propTypes = propTypes;

export default Home
