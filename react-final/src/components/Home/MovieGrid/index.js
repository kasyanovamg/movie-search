import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommonMovieGrid from '../../Common/CommonMovieGrid'

const propTypes = {
    loading: PropTypes.bool,
    errored: PropTypes.bool,
    movies: PropTypes.array,
    fetchData: PropTypes.func,
    addToFav: PropTypes.func,
    removeFromFav: PropTypes.func,
    favorites: PropTypes.object,
    searchQuery: PropTypes.string,
    searchBy: PropTypes.string,
    sortBy: PropTypes.string,
    emptyMovieArray: PropTypes.func,
}

class MovieGrid extends Component {
    componentDidMount() {
        this.props.searchQuery &&
            this.props.fetchData(this.props.searchQuery, this.props.searchBy, this.props.sortBy)
    }
    componentDidUpdate(prevProps) {
        if (this.props.searchQuery && (
            this.props.searchQuery !== prevProps.searchQuery
            || this.props.searchBy !== prevProps.searchBy
            || this.props.sortBy !== prevProps.sortBy)) {
            this.props.fetchData(this.props.searchQuery, this.props.searchBy, this.props.sortBy)
        }
    }
    render() {
        return (
            <CommonMovieGrid
                loading={this.props.loading}
                errored={this.props.errored}
                movies={this.props.movies}
                addToFav={this.props.addToFav}
                removeFromFav={this.props.removeFromFav}
                favorites={this.props.favorites}
                emptyMovieArray={this.props.emptyMovieArray}
            />
        )
    }
}

MovieGrid.propTypes = propTypes;

export default MovieGrid;