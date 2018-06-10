import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const propTypes = {
    movies: PropTypes.array,
    sortBy: PropTypes.string,
    searchBy: PropTypes.string,
    sortData: PropTypes.func,
    fetchData: PropTypes.func,
    search: PropTypes.string,
    page: PropTypes.string,
    searchQuery: PropTypes.string,
};

const SearchResults = ({
    movies = [],
    sortBy,
    searchBy,
    search,
    sortData = () => { },
    fetchData = () => { },
    page,
    searchQuery = '' }) => {
    return (
        <div className="search-results">
            {(page === 'home' && searchQuery.length > 0) &&
                <div className="container search-results__container">
                    <div className="search-results__text">
                        {movies.length} movie{movies.length === 1 ? '' : 's'} found
                    </div>

                    <div className="search-results__sort-by">
                        <span className="search-results__description">Sort by </span>

                        <span className={`search-results__sort-item ${sortBy === 'year' ? 'focus' : ''}`}
                            onClick={() => sortData('year')}>
                            release date
                        </span>

                        <span className={`search-results__sort-item ${sortBy === 'rating' ? 'focus' : ''}`}
                            onClick={() => sortData('rating')}>
                            rating
                        </span>
                    </div>
                </div>
            }
            {page === 'favorites' &&
                <div className="container search-results__container">
                    <div className="search-results__text">
                        You have {movies.length} favorite movie{movies.length === 1 ? '' : 's'}
                    </div>
                </div>
            }
            {page === 'current' &&
                <div className="container search-results__container">
                    <div className="search-results__text">
                        Films by {search}
                    </div>
                </div>
            }
        </div>

    )
}

SearchResults.propTypes = propTypes;

export default SearchResults