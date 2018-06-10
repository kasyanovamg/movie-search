import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
    search: PropTypes.string,
    onClick: PropTypes.func,
  };
  
const SearchBtn = ({search, onClick = () => {}}) => {
    return (
        <Link to={search} >
          <button type="button" onClick={() => onClick() }
            className="searchbtn" >
            Search
          </button>
        </Link>
    )
}

SearchBtn.propTypes = propTypes;

export default SearchBtn

