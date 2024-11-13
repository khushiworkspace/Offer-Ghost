import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import '../css/search.css';
import { SearchOutlined } from '@ant-design/icons';
import searchicon from '../assets/images/Frame 391.svg';

const SearchInput = ({ searchInput, placeholder, setSearch }) => {
    const inputRef = useRef(null);

    const handleSearch = () => {
        const inputValue = inputRef.current.value.trim();
        setSearch(inputValue);
        searchInput(inputValue);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleIconClick = (e) => {
        e.preventDefault();
        handleSearch();
    };

    return (
        <div className="search-input-container">
            <img
                src={searchicon}
                style={{ width: '16px', height: '16px', margin: '0px 16px 0px 16px', cursor: 'pointer' }}
                onClick={handleIconClick}
                alt="Search Icon"
            />
            <div className="search-input-vl"></div>
            <input
                id="header-search-input"
                type="text"
                className="search-input"
                placeholder={placeholder}
                onKeyDown={handleKeyPress}
                ref={inputRef}
                autoComplete="off"
            />
        </div>
    );
};

SearchInput.propTypes = {
    searchInput: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    setSearch: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
    placeholder: 'Search...',
};

export default SearchInput;
