import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import SearchBtn from '../SearchBtn'
import './style.css';

const propTypes = {
  linkToFav: PropTypes.bool,
  emptyMovieArray: PropTypes.func,
}

const Header = ({ linkToFav, emptyMovieArray = () => { } }) => {
  return (
    <div className="back">
      <div className="header container">
        <h4 className="header__title">
          <Link to="/">netflixroulette</Link>
        </h4>

        {linkToFav ?
          <Link to="/favorite" className="header__fav"
            onClick={() => emptyMovieArray()}>My favorites</Link> :
          <SearchBtn search={'/'} />}

      </div>
    </div>
  )
};

Header.propTypes = propTypes;

export default Header;
