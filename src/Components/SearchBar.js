import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <header>
                <input type="text" placeholder="Search by App"
                       onChange={e => this.onChange(e)}
                />
            </header>
        );
    }

    onChange = ({target: {value}}) => {
        this.props.onSearch(value);
    };

}

export default SearchBar;