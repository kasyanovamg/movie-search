import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommonMovieGrid from '../../Common/CommonMovieGrid'

const propTypes = {
    loading: PropTypes.bool,
    errored: PropTypes.bool,
    moviesBySameDirector: PropTypes.array,
    addToFav: PropTypes.func,
    removeFromFav: PropTypes.func,
    favorites: PropTypes.object,
    fetchSameDirector: PropTypes.func,
    fetchCurrentMovieData: PropTypes.func,
    currentID: PropTypes.number,
};

class CurrentMovieGrid extends Component {
    componentDidMount() {
        this.props.fetchSameDirector(this.props.director)
    }
    componentDidUpdate(prevProps) {
        if (this.props.director !== prevProps.director) {
            this.props.fetchSameDirector(this.props.director)
        }
    }
    render() {
        let moviesBySameDirector = this.props.moviesBySameDirector ? this.props.moviesBySameDirector : []
        return (
            <CommonMovieGrid
                loading={this.props.loading}
                errored={this.props.errored}
                movies={moviesBySameDirector.filter(movie => movie.id !== this.props.currentID)}
                addToFav={this.props.addToFav}
                removeFromFav={this.props.removeFromFav}
                favorites={this.props.favorites}
                fetchSameDirector={this.props.fetchSameDirector}
                fetchCurrentMovieData={this.props.fetchCurrentMovieData}
                searchQuery={this.props.searchQuery}
            />
        );
    }
}

CurrentMovieGrid.propTypes = propTypes;

export default CurrentMovieGrid;