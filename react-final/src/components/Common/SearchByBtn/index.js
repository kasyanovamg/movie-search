import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const propTypes = {
    onClick: PropTypes.func,
    btnClass: PropTypes.string,
    text: PropTypes.string,
};

const SearchByBtn = ({ onClick = () => {}, btnClass, text }) => {
    return (
        <button
            type="button"
            onClick={() => onClick()}
            className={`searchByBtn ${btnClass}`} >
            {text}
        </button>
    )
}

SearchByBtn.propTypes = propTypes;

export default SearchByBtn